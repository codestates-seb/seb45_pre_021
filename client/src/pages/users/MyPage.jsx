import { styled } from 'styled-components';
import Sidebar from '../../components/Sidebar.jsx';
import { useState, useContext } from 'react';
import { ProfileBox } from '../../components/ProfileBox.jsx';
import { ActivityBox } from '../../components/ActivityBox.jsx';
import { SettingBox } from '../../components/SettingBox.jsx';
import SavesBox from '../../components/SavesBox.jsx';
import { LoginContext } from '../../App';
import profiles from '../../utils/profiles.js';

const MyPage = () => {
  const { selectedProfileIndex } = useContext(LoginContext);
  const [tab, setTab] = useState(0);

  const boxCompoenents = [
    <ProfileBox key={0} />,
    <ActivityBox key={1} />,
    <SavesBox key={2} />,
    <SettingBox key={3} />,
  ];

  return (
    <MyPageLayout>
      <Sidebar />
      <MyPageContainer>
        <PageHeader>
          <HeaderLeft>
            <div>
              <img src={profiles[selectedProfileIndex]} alt="profile img" />
            </div>
            <UserInfo>
              <h2>Qazx960</h2>
              <div className="userinfo--details">
                <div className="userinfo--box">
                  <svg
                    aria-hidden="true"
                    className="svg-icon iconCake"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path d="M9 4.5a1.5 1.5 0 0 0 1.28-2.27L9 0 7.72 2.23c-.14.22-.22.48-.22.77 0 .83.68 1.5 1.5 1.5Zm3.45 7.5-.8-.81-.81.8c-.98.98-2.69.98-3.67 0l-.8-.8-.82.8c-.49.49-1.14.76-1.83.76-.55 0-1.3-.17-1.72-.46V15c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-2.7c-.42.28-1.17.45-1.72.45-.69 0-1.34-.27-1.83-.76Zm1.3-5H10V5H8v2H4.25C3 7 2 8 2 9.25v.9c0 .81.91 1.47 1.72 1.47.39 0 .77-.14 1.03-.42l1.61-1.6 1.6 1.6a1.5 1.5 0 0 0 2.08 0l1.6-1.6 1.6 1.6c.28.28.64.43 1.03.43.81 0 1.73-.67 1.73-1.48v-.9C16 8.01 15 7 13.75 7Z"></path>
                  </svg>
                  <span>Member for 10 days</span>
                </div>
                <div className="userinfo--box">
                  <svg
                    aria-hidden="true"
                    className="svg-icon iconClock"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path d="M9 17c-4.36 0-8-3.64-8-8 0-4.36 3.64-8 8-8 4.36 0 8 3.64 8 8 0 4.36-3.64 8-8 8Zm0-2c3.27 0 6-2.73 6-6s-2.73-6-6-6-6 2.73-6 6 2.73 6 6 6ZM8 5h1.01L9 9.36l3.22 2.1-.6.93L8 10V5Z"></path>
                  </svg>
                  <span>Last seen this week</span>
                </div>

                <div className="userinfo--box">
                  <svg
                    aria-hidden="true"
                    className="svg-icon iconCalendar"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path d="M14 2h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h1V0h2v2h6V0h2v2ZM3 6v9h12V6H3Zm2 2h2v2H5V8Zm0 3h2v2H5v-2Zm3 0h2v2H8v-2Zm3 0h2v2h-2v-2Zm0-3h2v2h-2V8ZM8 8h2v2H8V8Z"></path>
                  </svg>
                  <span>Visited 2 days, 1 consecutive</span>
                </div>
              </div>
            </UserInfo>
          </HeaderLeft>
          <HeaderRight>
            <button>
              {' '}
              <svg
                aria-hidden="true"
                className="svg-icon iconPencil"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path
                  fill="#F1B600"
                  d="m2 13.13 8.5-8.5 2.88 2.88-8.5 8.5H2v-2.88Z"
                ></path>
                <path
                  fill="#E87C87"
                  d="m13.68 2.15 2.17 2.17c.2.2.2.51 0 .71L14.5 6.39l-2.88-2.88 1.35-1.36c.2-.2.51-.2.71 0Z"
                ></path>
              </svg>
              Edit Profile
            </button>

            <button>
              <svg
                aria-hidden="true"
                className="native mln2 mr2 svg-icon iconLogoSEXxs"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path
                  d="M3 4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2H3Z"
                  fill="#8FD8F7"
                ></path>
                <path
                  d="M15 11H3c0 1.1.9 2 2 2h5v3l3-3a2 2 0 0 0 2-2Z"
                  fill="#155397"
                ></path>
                <path fill="#46A2D9" d="M3 5h12v2H3z"></path>
                <path fill="#2D6DB5" d="M3 8h12v2H3z"></path>
              </svg>
              Network Profile
            </button>
          </HeaderRight>
        </PageHeader>
        <ProfileTabs>
          <div className="tab--container">
            <button onClick={() => setTab(0)}>Profile</button>
            <button onClick={() => setTab(1)}>Activity</button>
            <button onClick={() => setTab(2)}>Saves</button>
            <button onClick={() => setTab(3)}>Settings</button>
          </div>
        </ProfileTabs>
        {boxCompoenents[tab]}
      </MyPageContainer>
    </MyPageLayout>
  );
};

export default MyPage;

const MyPageLayout = styled.div`
  width: 1264px;
  margin: auto;
  display: flex;
  padding-top: 56px;
`;

const MyPageContainer = styled.div`
  width: 100%;
`;

const PageHeader = styled.div`
  /* width: 100vw; */
  height: 184px;
  display: flex;
  justify-content: space-between;
  padding: 30px;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 128px;
    height: 128px;
  }
`;

const UserInfo = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;

  h2 {
    margin-bottom: 10px;
    font-size: 30px;
    font-weight: 400;
  }

  .userinfo--details {
    width: 504px;
    /* background-color: red; */

    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #6a737c;
    font-size: 14px;
  }

  .userinfo--box {
    display: flex;
    /* align-items: center; */

    span {
      margin-left: 3px;
    }
  }
`;

const HeaderRight = styled.div`
  width: 260px;
  display: flex;
  justify-content: space-around;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 100px; */
    height: 35px;
    padding: 14px;

    border-radius: 8px;
    font-size: 12px;

    background-color: #fff;
    border: 1px solid rgb(0, 0, 0, 0.2);

    &:hover {
      cursor: pointer;
    }
  }
`;

const ProfileTabs = styled.div`
  width: 100%;

  margin-left: 20px;

  .tab--container {
    width: 320px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  button {
    display: flex;
    align-items: center;
    padding: 14px;
    height: 30px;
    border-radius: 12px;
    font-size: 15px;
    background-color: #f48225;
    color: #fff;

    &:hover {
      cursor: pointer;
    }
  }
`;
