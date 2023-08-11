import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Sidebar = () => {
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
              <LinkItems to="/">Questions</LinkItems>
            </ListItem>
            <ListItem>
              <LinkItems to="/">Tags</LinkItems>
            </ListItem>
            <ListItem>
              <Link to="/">Users</Link>
            </ListItem>
            <ListItem>
              <LinkItems to="/">Companies</LinkItems>
            </ListItem>
          </ul>
        </PublicBox>
        <CollectivesBox>
          <Titles>Collectives</Titles>

          <LinkItems>Explore Collectives</LinkItems>
        </CollectivesBox>
        <ButtonBox>
          <Titles>Teams</Titles>

          <LinkItems>Create Free Team</LinkItems>
        </ButtonBox>

        <FindTeamBox>
          <QuestionBox>
            <LinkButton>Looking for your Teams?</LinkButton>
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
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
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
  /* font-size: 16px; */
  line-height: 1.7;
  height: 25px;
  margin: 10px;
  margin-left: -20px;
  font-size: 15px;
  font-weight: 500;
  /* padding-left: 0px; */

  /* background-color: red; */

  & hover {
    background-color: #000;
  }
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
`;

const FindTeamBox = styled.div`
  padding-left: 0px;
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
