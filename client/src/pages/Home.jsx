import { styled } from 'styled-components';
import Footer from './../components/Footer.jsx';

const Home = () => {
  return (
    <>
      <Header>Header</Header>
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
      <Footer />
    </>
  );
};

export default Home;

const Header = styled.header`
  height: 5vh;
`;

const MainLayout = styled.body`
  height: calc(95vh - 150px);
  margin-top: 54px;
  width: 100vw;

  /* calc(100vh - 204px)
calc(100vh - 150px)
marigin-top: 54px; */
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
