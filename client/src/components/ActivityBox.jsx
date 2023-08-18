import { styled } from 'styled-components';
import {
  ActiveBounties,
  Answers,
  Articles,
  Badges,
  FollowedPosts,
  Questions,
  Reputation,
  Tags,
  VotesCast,
} from './MyPageBoxes.jsx';

export const ActivityBox = () => {
  return (
    <ProfileContainer>
      <ActivityHeader>
        <ProfileLeft>
          <ul>
            <li>Summary</li>
            <li>Answers</li>
            <li>Questions</li>
            <li>Tags</li>
            <li>Articles</li>
            <li>Badges</li>
            <li>Following</li>
            <li>Bounties</li>
            <li>Reputation</li>
            <li>All actions</li>
            <li>Responses</li>
            <li>Votes</li>
          </ul>
        </ProfileLeft>
        <ProfileRight>
          <h3>Summary</h3>
          <div className="activity--boxes">
            <BoxOne>
              <svg
                aria-hidden="true"
                className="svg-spot spotReputation"
                width="48"
                height="48"
                viewBox="0 0 48 48"
              >
                <path
                  d="M32 9a1 1 0 0 1-1 1H6a1 1 0 0 1 0-2h25a1 1 0 0 1 1 1Zm4.25 1.6a1 1 0 0 1 .92-.6H41a1 1 0 1 1 0 2h-3.18l-4.9 11.4a1 1 0 0 1-.92.6h-7.38l-2.73 5.45A1 1 0 0 1 21 30h-6.51l-4.07 9.4a1 1 0 0 1-1.84-.8l4.34-10a1 1 0 0 1 .91-.6h6.55l2.73-5.45A1 1 0 0 1 24 22h7.34l4.9-11.4ZM42 16a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2h2Zm-24 5a1 1 0 0 1-1 1H6a1 1 0 1 1 0-2h11a1 1 0 0 1 1 1Zm24 1a1 1 0 1 0 0-2h-4a1 1 0 1 0 0 2h4Zm1 11a1 1 0 0 1-1 1H17a1 1 0 1 1 0-2h25a1 1 0 0 1 1 1ZM8 28a1 1 0 1 0 0-2H6a1 1 0 1 0 0 2h2Z"
                  opacity=".2"
                ></path>
                <path d="M36.17 8a1 1 0 0 0-.92.6L30.35 20H23a1 1 0 0 0-.9.55L19.39 26h-6.55a1 1 0 0 0-.9.58L6.1 39.08a1 1 0 0 0 1.82.84L13.47 28H20a1 1 0 0 0 .9-.55L23.61 22H31a1 1 0 0 0 .92-.6l4.9-11.4H42a1 1 0 1 0 0-2h-5.83ZM27 16a1 1 0 1 0 0-2H6a1 1 0 1 0 0 2h21Zm16 11a1 1 0 0 1-1 1H28a1 1 0 1 1 0-2h14a1 1 0 0 1 1 1Zm-1 13a1 1 0 1 0 0-2H14a1 1 0 1 0 0 2h28Z"></path>
              </svg>
              <p>Reputation is how the community thanks you</p>
              <p>
                When users upvote your helpful posts, you will earn reputation
                and unlock new privileges.
              </p>
              <p>Learn more about reputation and privileges</p>
            </BoxOne>
            <BoxTwo>
              <svg
                aria-hidden="true"
                className="svg-spot spotBadge"
                width="48"
                height="48"
                viewBox="0 0 48 48"
              >
                <path
                  d="M14 6a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1ZM7 21c0-1.1.9-2 2-2h35a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3V21Zm27 23a1 1 0 1 0 0-2H14a1 1 0 1 0 0 2h20Z"
                  opacity=".2"
                ></path>
                <path d="M8 11a1 1 0 0 1 1-1h31a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm0 13a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4a3 3 0 0 1 3-3h36a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V18Zm3-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h36a1 1 0 0 0 1-1V18a1 1 0 0 0-1-1H6Zm34 22a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2h31Z"></path>
              </svg>
              <p>Earn badges for helpful actions</p>
              <p>
                Badges are bits of digital flair that you get when you
                participate in especially helpful ways.
              </p>
              <button>Take the Tour and earn your first badge</button>
            </BoxTwo>
            <BoxThree>
              <svg
                aria-hidden="true"
                className="svg-spot spotAstronaut"
                width="48"
                height="48"
                viewBox="0 0 48 48"
              >
                <path
                  d="M39.5 12a.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5h-6.1c-.77 0-1.4.63-1.4 1.4v6.2c0 .77.63 1.4 1.4 1.4H38a1 1 0 0 1 1 1 1 1 0 0 0 1 1h3.6c.77 0 1.4-.63 1.4-1.4v-7.2c0-.77-.63-1.4-1.4-1.4h-4.1Z"
                  opacity=".2"
                ></path>
                <path d="M15.03 5.84c-2.17 0-3.66.42-4.44 1.59-.37.55-.5 1.17-.55 1.73-.05.44-.04.93-.04 1.39v1.8c0 .4.2.7.38.89.18.17.38.29.54.37.34.15.75.25 1.15.32.83.15 1.9.22 2.93.22 1.03 0 2.1-.07 2.93-.22.4-.07.81-.17 1.15-.32.16-.08.36-.2.54-.37.18-.19.38-.49.38-.9V10.5c0-.44 0-.9-.03-1.32a3.68 3.68 0 0 0-.52-1.73c-.76-1.18-2.25-1.6-4.42-1.6ZM12 10.5c0-.45 0-.82.03-1.15.04-.4.12-.65.22-.81.18-.26.7-.7 2.78-.7s2.58.44 2.74.69c.1.15.18.4.21.8.03.32.02.66.02 1.07v1.47l-.43.1c-.67.12-1.6.18-2.57.18a15.59 15.59 0 0 1-3-.28V10.5ZM11 21a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1Zm4.03-19c-3.82 0-6.2 1.12-7.57 3-1.31 1.8-1.51 4.08-1.51 6v3.94A4.45 4.45 0 0 0 2 19.5v11C2 32.02 3.13 34 5.47 34c.58 0 1.09-.12 1.53-.33V44a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V32h2v12a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V23.3l2.87 2.74 1.97 1.86.16.14V44a1 1 0 1 0 2 0V28.79h.1c.8 0 1.65-.28 2.27-.9.62-.64.88-1.52.88-2.32 0-.79-.26-1.66-.87-2.3L30 20.78V19h6c0 1.1.9 2 2 2h3a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3h-3.09c-.2-.58-.76-1-1.41-1H30v-.17a3 3 0 1 0-2 0v10.83l-1.24-1.32h-.01l-.34-.36c-.48-.49-.93-.95-1.36-1.3-.3-.25-.64-.47-1.02-.63V11c0-1.9-.18-4.2-1.47-6-1.35-1.88-3.71-3-7.53-3Zm-7.08 9c0-1.86.21-3.57 1.13-4.83C9.94 5 11.6 4 15.03 4s5.06.99 5.9 2.17c.9 1.25 1.1 2.96 1.1 4.83v4.41c-.35.11-.9.22-1.64.32a46.7 46.7 0 0 1-5.4.28c-1.99 0-3.95-.1-5.4-.28a9.4 9.4 0 0 1-1.64-.32V11ZM12 39.34a3.4 3.4 0 0 0-3 0V36h3v3.34Zm-3 3.31c0-.98.71-1.65 1.5-1.65s1.5.67 1.5 1.65V43H9v-.35Zm9 .35v-.35c0-.98.71-1.65 1.5-1.65s1.5.67 1.5 1.65V43h-3Zm1.5-4a3.4 3.4 0 0 0-1.5.34V36h3v3.34a3.4 3.4 0 0 0-1.5-.34ZM9 34v-8h12v8h-3v-3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3H9Zm-2-3.5c0 .69-.56 1.5-1.53 1.5C4.53 32 4 31.23 4 30.5V29h3v1.5ZM7 27H4v-7.5c0-.88.32-1.51.8-1.93a3 3 0 0 1 1.67-.69l.08.06c.24.17.52.29.78.37.53.17 1.23.3 2 .4 1.57.2 3.62.3 5.66.3 2.03 0 4.09-.1 5.65-.3.78-.1 1.48-.23 2.01-.4.25-.08.52-.19.75-.35l.4.27c.32.27.66.62 1.13 1.1v.01l.38.39L28 21.56v.92l-1.45 1.44-3.64-3.46c-.25-.24-.55-.46-.91-.46a1 1 0 0 0-1 1v3H9v-3a1 1 0 1 0-2 0v6Zm23-.22v-3.1l.93.98h.01c.17.18.31.51.31.91s-.14.73-.3.91a1.19 1.19 0 0 1-.95.3ZM29 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm1 13v-7h6v7h-6Zm8 2v-8h3a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-3Z"></path>
              </svg>
              <p>Measure your impact</p>
              <p>
                Your posts and helpful actions here help hundreds or thousands
                of people searching for help.
              </p>
            </BoxThree>
          </div>
        </ProfileRight>
      </ActivityHeader>
      <ActivityBody>
        <ActivityItems>
          <Answers />
          <Questions />
        </ActivityItems>
        <ActivityItems>
          <Tags />
          <Reputation />
        </ActivityItems>
      </ActivityBody>
      <ActivityBigRows>
        <Badges />
        <FollowedPosts />
        <ActiveBounties />
        <Articles />
        <VotesCast />
      </ActivityBigRows>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  margin-left: 20px;
  margin-top: 10px;
  padding: 20px 10px;
  width: 1075px;
`;

const ActivityHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ActivityBody = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 130px;
  align-items: center;
  justify-content: space-around;
`;

const ProfileLeft = styled.div`
  height: 100%;
  margin-right: 20px;
  width: 130px;

  li {
    list-style: none;
    padding: 7px;
    font-weight: 300;
  }

  li:hover {
    cursor: pointer;
  }
`;

const ProfileRight = styled.div`
  width: 100vw;
  margin-left: 6px;
  font-size: 14px;

  h3 {
    padding: 6px;
    font-size: 24px;
    font-weight: 400;
  }
  .activity--boxes {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const BoxOne = styled.div`
  width: 360px;
  height: 300px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  padding: 16px;
`;
const BoxTwo = styled.div`
  width: 286px;
  height: 300px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  padding: 16px;

  button {
    padding: 16px;
    background-color: #0a95ff;
    color: #fff;
    border-radius: 8px;
  }
`;
const BoxThree = styled.div`
  width: 212px;
  height: 300px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  padding: 16px;
`;

const ActivityItems = styled.div`
  /* height: 100%; */
`;

const ActivityBigRows = styled.div`
  margin-left: 130px;
  padding: 20px 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
