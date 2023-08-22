import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import sidebar from '../imgs/sidebar.gif';

const Sidebar = () => {
  const handleClick = (link) => {
    window.location.href = link;
  };

  const [toggle, setToggle] = useState(false);
  return (
    <SideContainer>
      <SideBox>
        <HomeLayer>
          <HomeBox>
            <HomeTitle to="/">Home</HomeTitle>
          </HomeBox>
        </HomeLayer>

        <PublicBox>
          <Titles>Public</Titles>
          <ul>
            <ListItem className="iconTab">
              <Icon icon="ion:earth-sharp" />
              <LinkItems to="/questions">Questions</LinkItems>
            </ListItem>
            <ListItem>
              <LinkItems onClick={() => alert('in progress')}>Tags</LinkItems>
            </ListItem>
            <ListItem>
              <LinkItems to="/users">Users</LinkItems>
            </ListItem>
            <ListItem>
              <LinkItems to="/companies">Companies</LinkItems>
            </ListItem>
          </ul>
        </PublicBox>
        <CollectivesBox>
          <Titles>Collectives</Titles>

          <LinkItems
            className="iconTab"
            onClick={() => handleClick('https://stackoverflow.com/collectives')}
          >
            <Icon icon="material-symbols:award-star-rounded" color="#f48224" />
            Explore Collectives
          </LinkItems>
        </CollectivesBox>
        <ButtonBox>
          <Titles>Teams</Titles>
          <img src={sidebar} alt="sidebar" />
          <LinkItems
            className="team"
            onClick={() =>
              handleClick(
                'https://stackoverflowteams.com/teams/create/free/?utm_source=so-owned&utm_medium=side-bar&utm_campaign=campaign-38&utm_content=cta',
              )
            }
          >
            Create Free Team
          </LinkItems>
        </ButtonBox>

        <FindTeamBox>
          <QuestionBox>
            <LinkButton onClick={() => setToggle(!toggle)}>
              Looking for your Teams?
            </LinkButton>
            {toggle && (
              <ModalBox>
                <p>Stack Overflow for Teams has its own domain!</p>
                <p>
                  You can now access your Teams at{' '}
                  <a href="https://stackoverflowteams.com/">
                    stackoverflowteams.com
                  </a>
                  . Teams no longer appear in the left sidebar on
                  stackoverflow.com. Check your email to learn more about these
                  changes.
                </p>
              </ModalBox>
            )}
          </QuestionBox>
        </FindTeamBox>
      </SideBox>
    </SideContainer>
  );
};

export default Sidebar;

const SideContainer = styled.aside`
  width: 164px;
  border-right: 1px solid gray;
`;

const SideBox = styled.div`
  width: 100%;
  height: 540px;
`;

const HomeLayer = styled.div`
  height: 20px;
  padding: 0 5px;
`;

const HomeBox = styled.h3`
  display: flex;
  align-items: center;
  height: 100%;
  font-weight: 600;
  margin-top: 20px;
`;

const PublicBox = styled.div`
  padding-left: 10px;
  height: 200px;
  margin-top: 35px;
`;

const Titles = styled.p`
  text-transform: uppercase;
  font-weight: 300;
  font-size: 13px;
  margin-left: -8px;
  margin-bottom: 3px;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: left;
  list-style: none;

  line-height: 1.7;
  height: 38px;

  font-size: 15px;
  font-weight: 500;

  &.iconTab {
    gap: 3px;
    margin-left: -8px;
    font-weight: bold;
    background-color: hsl(210, 8%, 95%);
    color: hsl(210, 8%, 5%);
    border-right: 3px solid hsl(27, 90%, 55%);
  }
`;

const CollectivesBox = styled.div`
  padding-left: 10px;
  height: 60px;
`;

const ButtonBox = styled.div`
  padding-left: 10px;
  img {
    width: 120px;
    border-radius: 6px;
  }
`;

const QuestionBox = styled.p`
  background-color: #f0f8ff;
  text-align: center;
  font-size: 13px;
  width: 120px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: left;
  font-weight: 500;
  position: relative;
  border-radius: 6px;
  padding: 6px;
  margin-left: 10px;
`;

const FindTeamBox = styled.div`
  padding-left: 0px;
`;

const ModalBox = styled.div`
  width: 400px;
  height: 150px;

  position: absolute;
  left: 2px;
  bottom: -170px;

  border: 1px solid rgba(0, 0, 0, 0.6);
  background-color: #fff;
  border-radius: 12px;

  font-size: 16px;
  text-align: left;

  padding: 5px;

  a {
    color: blue;
  }
`;

const LinkButton = styled(Link)`
  color: #0063bf;
`;

const LinkItems = styled(Link)`
  color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: left;
  align-items: center;
  list-style: none;
  line-height: 1.7;
  font-size: 13px;

  &.iconTab {
    gap: 3px;
    margin-left: -8px;
  }
  &.team {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    color: hsl(0, 0%, 100%);
    background-color: hsl(27, 90%, 55%);
    padding: 6px;
    border-radius: 6px;
  }
`;

const HomeTitle = styled(Link)`
  color: #000;
  font-size: 16px;
  text-decoration: none;
  font-weight: normal;
`;
