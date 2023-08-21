import { styled } from 'styled-components';
import { AboutBox, Badges, Posts } from './MyPageBoxes.jsx';

export const ProfileBox = () => {
  return (
    <ProfileContainer>
      <ProfileLeft>
        <h3 className="stats--title">Stats</h3>
        <StatsBox>
          <div className="stats--box">
            <p className="stats--box-num">1</p>
            <p>reputation</p>
          </div>
          <div className="stats--box">
            <p>0</p>
            <p>reached</p>
          </div>

          <div className="stats--box">
            <p>0</p>
            <p>answers</p>
          </div>
          <div className="stats--box">
            <p>0</p>
            <p>question</p>{' '}
          </div>
        </StatsBox>
        <h3 className="stats--title community">Communities</h3>

        <CommunityBox>
          <span>Stack Overflow</span>
        </CommunityBox>
      </ProfileLeft>
      <BoxLayout>
        <AboutBox />
        <Badges />
        <Posts />
      </BoxLayout>
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
  /* width: 240px; */
  margin-right: 20px;
  .stats--title {
    width: 100%;
    padding: 10px 0;
    font-size: 24px;
    font-weight: 400;
  }

  .community {
    margin-top: 20px;
  }
`;

const StatsBox = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 180px;
  height: 140px;

  display: flex;
  flex-wrap: wrap;
  border-radius: 4px;

  /* justify-content: center; */

  .stats--box {
    width: 50%;
    height: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`;

const CommunityBox = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);

  width: 180px;
  height: 55px;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #0074cc;

  &:hover {
    cursor: pointer;
  }
`;

const BoxLayout = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
