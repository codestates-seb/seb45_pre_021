import { styled } from 'styled-components';

const Home = () => {
  return (
    <MainLayout>
      <TitleContainer>
        <h1>Welcome to Stack Overflow</h1>
      </TitleContainer>
      <BodyLayout>
        <DeveloperLayout>
          <div>Frontend</div>
          <div>Backend</div>
        </DeveloperLayout>
        <SkillsLayout>
          <h2>Skills</h2>
          <div>Frontend Skills</div>
          <div>Backend skills</div>
        </SkillsLayout>
      </BodyLayout>
    </MainLayout>
  );
};

export default Home;

const MainLayout = styled.body`
  width: 100vw;
  height: calc (100vh - 56px);
  margin-top: 56px;
`;

const TitleContainer = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #3b3f43;
  color: #fff;

  height: 250px;
  font-size: 24px;
`;

const BodyLayout = styled.div`
  display: flex;
`;
const DeveloperLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 80px;
`;

const SkillsLayout = styled.div`
  display: flex;
  flex-direction: column;
`;
