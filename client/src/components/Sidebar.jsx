import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <SideContainer>
      <SideBox>
        <HomeLayer>
          <HomeTitle>
            <Link to="/">Home</Link>
          </HomeTitle>
        </HomeLayer>

        <PublicBox>
          <h2>Public</h2>
          <ul>
            <ListItem>
              <Link to="/">Questions</Link>
            </ListItem>
            <ListItem>
              <Link to="/">Tags</Link>
            </ListItem>
            <ListItem>
              <Link to="/">Users</Link>
            </ListItem>
            <ListItem>
              <Link to="/">Companies</Link>
            </ListItem>
          </ul>
        </PublicBox>
        <CollectivesBox>
          <h2>Collectives</h2>
          <ul>
            <ListItem>
              <Link>Explore Collectives</Link>
            </ListItem>
          </ul>
        </CollectivesBox>
        <ButtonBox>
          <h2>Teams</h2>
          <TeamButton>
            <Link>Create Free Team</Link>
          </TeamButton>
          <QuestionBox>
            <Link>Looking for your Teams?</Link>
          </QuestionBox>
        </ButtonBox>
      </SideBox>
    </SideContainer>
  );
};

export default Sidebar;

const SideContainer = styled.aside`
  height: 100vh;
  width: 240px;
  padding: 0 20px;
  border-right: 1px solid gray;
`;

const SideBox = styled.div`
  width: 100%;
  height: 580px;
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
  height: 180px;
`;

const ListItem = styled.li`
  list-style: none;
  font-size: 16px;
  line-height: 2;
`;

const CollectivesBox = styled.div`
  padding: 0 10px;
`;

const ButtonBox = styled.div`
  padding: 0 10px;
  margin-top: 80px;
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
