import { styled } from 'styled-components';
import profileImg from '../imgs/profile-img.jpeg';

const Home = () => {
  const stack = {
    react:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
    css: 'https://cdn-icons-png.flaticon.com/512/5968/5968242.png',
    html: 'https://img.shields.io/badge/-HTML-05122A?style=flat&logo=HTML5',
    javascript:
      'https://img.shields.io/badge/-JavaScript-05122A?style=flat&logo=JavaScript',
    styledComponent:
      'https://img.shields.io/badge/-styledcomponents-05122A?style=flat&logo=styledcomponents',
    figma: 'https://img.shields.io/badge/-Figma-05122A?style=flat&logo=Figma',
    nodejs:
      'https://img.shields.io/badge/-Node.js-05122A?style=flat&logo=Node.js',
    java: 'https://img.shields.io/badge/-Java-05122A?style=flat&logo=Java',
    spring:
      'https://img.shields.io/badge/-Spring-05122A?style=flat&logo=Spring',
  };

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
              <ProfileDetails>
                <ProfileImg src={profileImg} alt="profile img" />
                <span>강성일 (팀장)</span>
              </ProfileDetails>
              <ProfileDetails>
                <ProfileImg src={profileImg} alt="profile img" />
                <span>김동훈</span>
              </ProfileDetails>
              <ProfileDetails>
                <ProfileImg src={profileImg} alt="profile img" />
                <span>이지원</span>
              </ProfileDetails>
            </ProfileLayout>
          </DeveloperComponent>
          <DeveloperComponent>
            <h2>Backend</h2>
            <ProfileLayout>
              <ProfileDetails>
                <ProfileImg src={profileImg} alt="profile img" />
                <span>한도석 (부팀장)</span>
              </ProfileDetails>
              <ProfileDetails>
                <ProfileImg src={profileImg} alt="profile img" />
                <span>정승관</span>
              </ProfileDetails>
              <ProfileDetails>
                <ProfileImg src={profileImg} alt="profile img" />
                <span>정창인</span>
              </ProfileDetails>
            </ProfileLayout>
          </DeveloperComponent>
        </DeveloperLayout>
        <SkillsLayout>
          <h2>Stack</h2>
          <SkillsComponent>
            <StackImage src={stack.react} alt="react badge" />
            <StackImage src={stack.css} alt="react badge" />
            <StackImage src={stack.css} alt="react badge" />
            <StackImage src={stack.react} alt="react badge" />
            <StackImage src={stack.react} alt="react badge" />
            <StackImage src={stack.css} alt="react badge" />

            <StackImage src={stack.react} alt="react badge" />
            <StackImage src={stack.css} alt="react badge" />
            <StackImage src={stack.react} alt="react badge" />
            <StackImage src={stack.react} alt="react badge" />

            <StackImage src={stack.react} alt="react badge" />
            <StackImage src={stack.react} alt="react badge" />
            <StackImage src={stack.react} alt="react badge" />
            <StackImage src={stack.react} alt="react badge" />
          </SkillsComponent>
        </SkillsLayout>
      </BodyLayout>
    </MainLayout>
  );
};

export default Home;

const MainLayout = styled.body`
  width: 100vw;

  height: calc(100vh - 204px);
  margin-top: 54px;

  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
`;

const TitleContainer = styled.div`
  color: #fff;
  height: 30vh;
  /* background-color: red; */
  width: 100%;

  font-size: 26px;
  background-color: #3b3f43;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const BodyLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 100vw;
  margin: auto;
`;
const DeveloperLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 40vh;
  width: 50vw;
  margin: auto;
`;

const DeveloperComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  /* height: 200px; */
`;

const ProfileLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 350px;
  height: 100%;
  background-color: #fff;
`;

const ProfileDetails = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  > span {
    margin-top: 14px;
    color: rgba(0, 0, 0, 0.6);
  }
`;

const ProfileImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  box-shadow:
    rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;

const SkillsLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 40vh;
  width: 40vw;
  margin: auto;

  > h2 {
    font-size: 36px;
    margin-bottom: 20px;
    margin-top: -20px;
  }
`;

const SkillsComponent = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 10px;
  width: 500px;
  /* background: #000; */
`;
const StackImage = styled.img`
  width: 60px;
  /* height: 60px; */
  margin: 16px;
`;
