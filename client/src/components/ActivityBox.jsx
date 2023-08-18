import { styled } from 'styled-components';

export const ActivityBox = () => {
  return (
    <ProfileContainer>
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
      <BoxLayout></BoxLayout>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  margin-left: 20px;
  margin-top: 10px;
  padding: 10px;
  width: 1075px;
  display: flex;
  justify-content: space-between;
`;

const ProfileLeft = styled.div`
  height: 300px;
  margin-right: 20px;
`;

const BoxLayout = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
