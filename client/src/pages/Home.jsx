import { styled } from 'styled-components';
import profileImg from '../imgs/profile-img.jpeg';

const Home = () => {
  return (
    <MainLayout>
      <TitleContainer>
        <h1>Welcome to Stack Overflow</h1>
      </TitleContainer>
      <BodyLayout>
        <DeveloperLayout>
          <DeveloperComponent>
            <h2>Frontend</h2>
            <ProfileLayout>
              <ProfileImg src={profileImg} alt="profile img" />
              <ProfileImg src={profileImg} alt="profile img" />
              <ProfileImg src={profileImg} alt="profile img" />
            </ProfileLayout>
          </DeveloperComponent>
          <DeveloperComponent>
            <h2>Backend</h2>
            <ProfileLayout>
              <ProfileImg src={profileImg} alt="profile img" />
              <ProfileImg src={profileImg} alt="profile img" />
              <ProfileImg src={profileImg} alt="profile img" />
            </ProfileLayout>
          </DeveloperComponent>
        </DeveloperLayout>
        <SkillsLayout>
          <h2>Skills</h2>
          <div>
            <h2>stacks</h2>
          </div>
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
  width: 50vw;
`;

const DeveloperComponent = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-evenly;

  /* width: 550px; */
  height: 200px;
  background-color: red;

  > h2 {
    color: #fff;
  }
`;

const ProfileLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 350px;
  background-color: #fff;
`;
const SkillsLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  box-shadow:
    rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;
