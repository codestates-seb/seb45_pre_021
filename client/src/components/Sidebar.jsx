import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';

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
            <ListItem>
              <LinkItems to="/questions">Questions</LinkItems>
            </ListItem>
            <ListItem>
              <LinkItems to="/tags">Tags</LinkItems>
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
            onClick={() => handleClick('https://stackoverflow.com/collectives')}
          >
            Explore Collectives
          </LinkItems>
        </CollectivesBox>
        <ButtonBox>
          <Titles>Teams</Titles>

          <LinkItems
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
  height: 100vh;
`;

const SideBox = styled.div`
  width: 100%;
  height: 540px;
`;

const HomeLayer = styled.div`
  height: 25px;
  padding: 0 5px;
`;

const HomeBox = styled.h3`
  display: flex;
  align-items: center;
  height: 100%;
  font-weight: 600;
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
`;

const ListItem = styled.li`
  list-style: none;

  line-height: 1.7;
  height: 25px;
  margin: 10px;

  font-size: 15px;
  font-weight: 500;
`;

const CollectivesBox = styled.div`
  padding-left: 10px;
  height: 60px;
`;

const ButtonBox = styled.div`
  padding-left: 10px;
`;

const QuestionBox = styled.p`
  background-color: #f0f8ff;
  text-align: center;
  font-size: 13px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  position: relative;
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
`;

const HomeTitle = styled(Link)`
  color: #000;
  font-size: 16px;
  text-decoration: none;
  font-weight: 700;
`;
