import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <SideContainer>
      <SideBox>
        <HomeLayer>
          <HomeTitle>
            <LinkItems to="/">Home</LinkItems>
          </HomeTitle>
        </HomeLayer>

        <PublicBox>
          <h2>Public</h2>
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
          <h2>Collectives</h2>
          <ul>
            <ListItem>
              <LinkItems>Explore Collectives</LinkItems>
            </ListItem>
          </ul>
        </CollectivesBox>
        <ButtonBox>
          <h2>Teams</h2>
          <TeamButton>
            <LinkButton>Create Free Team</LinkButton>
          </TeamButton>
          <QuestionBox>
            <LinkItems>Looking for your Teams?</LinkItems>
          </QuestionBox>
        </ButtonBox>
      </SideBox>
    </SideContainer>
  );
};

export default Sidebar;

const SideContainer = styled.aside`
  height: 100vh;
  width: 280px;
  padding: 0 20px;
  border-right: 1px solid gray;
`;

const SideBox = styled.div`
  width: 100%;
  height: 540px;
  font-size: 13px;
  border-bottom: 1px solid gray;
`;

const HomeLayer = styled.div`
  /* background-color: #9a9a9a; */
  height: 70px;
`;

const HomeTitle = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 22px;
`;

const PublicBox = styled.div`
  padding: 0 10px;
  height: 200px;
`;

const ListItem = styled.li`
  list-style: none;
  font-size: 16px;
  line-height: 1.7;
  height: 25px;
  margin: 10px;
  padding-left: 20px;

  /* background-color: red; */

  & hover {
    background-color: #000;
  }
`;

const CollectivesBox = styled.div`
  padding: 0 10px;
`;

const ButtonBox = styled.div`
  padding: 0 10px;
  margin-top: 60px;

  height: 140px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const TeamButton = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 3px;
  border-color: transparent;
  background-color: #f48024;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

const QuestionBox = styled.p`
  color: rgba(0, 0, 0, 0.6);
  text-align: center;
`;

const LinkButton = styled(Link)`
  color: #fff;
`;

const LinkItems = styled(Link)`
  color: #000;
`;
