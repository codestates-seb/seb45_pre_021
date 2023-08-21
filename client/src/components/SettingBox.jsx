import { useState, useContext, useEffect } from 'react';
import { styled } from 'styled-components';
import { LoginContext } from '../App';

export const SettingBox = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { profileImages, selectedProfileIndex, handleProfileChange } =
    useContext(LoginContext);

  useEffect(() => {
    localStorage.setItem('selected_profile', selectedProfileIndex);
  }, [selectedProfileIndex]);

  const handlePictureChange = () => {
    const newIndex = (selectedProfileIndex + 1) % profileImages.length;
    handleProfileChange(newIndex);
  };

  return (
    <ProfileContainer>
      <ActivityHeader>
        {/* <ProfileLeft>
          <ul>
            <li>Edit Profile</li>
          </ul>
        </ProfileLeft> */}
        <ProfileRight>
          <h3>Edit your profile</h3>
          <div className="profile--box">
            <h4>Public information</h4>
            <GeneralInfo>
              <p>Profile Image</p>
              <ProfileBox className="profile--img">
                <img src={profileImages[selectedProfileIndex]} alt="profile" />
                <ChangePictureBtn onClick={handlePictureChange}>
                  Change Picture
                </ChangePictureBtn>
              </ProfileBox>
              <Form>
                <label htmlFor="name">Display Name</label>
                <input type="text" id="name" />
                <label htmlFor="location">Location</label>
                <input type="text" id="location" />
                <label htmlFor="title">Title</label>
                <input type="text" id="title" />
                <label htmlFor="about">About me</label>
                <textarea />
              </Form>
            </GeneralInfo>
          </div>
          <LinkContainerTitle>Links</LinkContainerTitle>
          <LinksContainer>
            <UserLinks>
              <LinkBox>
                <label htmlFor="website">Website Link</label>
                <input type="text" id="website" />
              </LinkBox>

              <LinkBox>
                <label htmlFor="twitter">Twitter link or username</label>
                <input type="text" id="twitter" />
              </LinkBox>
              <LinkBox>
                <label htmlFor="github">GitHub link or username</label>
                <input type="text" id="github" />
              </LinkBox>
            </UserLinks>
          </LinksContainer>
          <PrivateInfoTitle>
            Private Information <span>Not shown publicly</span>
          </PrivateInfoTitle>
          <PrivateInfoContainer>
            <LinkBox>
              <label htmlFor="fullname">Full Name</label>
              <input type="text" id="fullname" />
            </LinkBox>
          </PrivateInfoContainer>
          <h3>Delete Profile</h3>
          <DeleteContainer>
            <p>
              Before confirming that you would like your profile deleted, we
              would like to take a moment to explain the implications of
              deletion:
            </p>

            <ul>
              <li>
                Deletion is irreversible, and you will have no way to regain any
                of your original content, should this deletion be carried out
                and you change your mind later on.
              </li>

              <li>
                Your questions and answers will remain on the site, but will be
                disassociated and anonymized (the author will be listed as
                user22360943) and will not indicate your authorship even if you
                later return to the site.
              </li>
            </ul>
            <p>
              Confirming deletion will only delete your profile on Stack
              Overflow - it will not affect any of your other profiles on the
              Stack Exchange network. If you want to delete multiple profiles,
              you will need to visit each site separately and request deletion
              of those individual profiles.
            </p>
            <div className="checkbox">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              <p>
                I have read the information stated above and understand the
                implications of having my profile deleted. I wish to proceed
                with the deletion of my profile.
              </p>
            </div>
            <DeleteButton disabled={!isChecked}>Delete Profile</DeleteButton>
          </DeleteContainer>
        </ProfileRight>
      </ActivityHeader>
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

const ProfileRight = styled.div`
  width: 100vw;
  margin-left: 6px;
  font-size: 14px;
  padding: 20px;

  h3 {
    height: 50px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    padding: 6px;
    font-size: 24px;
    font-weight: 400;
  }

  .profile--box {
    h4 {
      padding: 10px 0;
      font-size: 20px;
      font-weight: 400;
    }

    p {
      font-weight: 600;
      font-size: 16px;
      padding: 10px 0;
    }
  }
`;

const GeneralInfo = styled.div`
  border: 1px solid rgba(0, 0, 0, 0, 2);
`;

const ProfileBox = styled.div`
  position: relative;
  img {
    width: 164px;
  }
`;

const ChangePictureBtn = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 164px;
  height: 25px;

  &:hover {
    cursor: pointer;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px 0px;

  label {
    font-weight: 600;
    font-size: 18px;
  }

  input {
    border: 1px solid rgba(0, 0, 0, 0.4);
    width: 50%;
    height: 33px;
    border-radius: 6px;
    margin: 8px 0;
    padding: 6px 8px;
  }

  textarea {
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 6px;
    width: 100%;
    height: 200px;
    margin: 8px 0;
    padding: 8px 10px;
  }
`;

const LinkContainerTitle = styled.p`
  font-size: 20px;
  padding-top: 40px;
  padding-bottom: 10px;
`;

const LinksContainer = styled.div`
  height: 120px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
`;

const UserLinks = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px 0px;

  label {
    font-weight: 600;
    font-size: 18px;
  }

  input {
    border: 1px solid rgba(0, 0, 0, 0.4);
    width: 220px;
    height: 33px;
    border-radius: 6px;
    margin: 8px 0;
    padding: 6px 8px;
    border-radius: 6px;
  }

  textarea {
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 6px;
    width: 100%;
    height: 200px;
    margin: 8px 0;
    padding: 8px 10px;
  }
`;

const LinkBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const PrivateInfoTitle = styled.p`
  font-size: 20px;
  padding-top: 40px;
  padding-bottom: 10px;

  span {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
  }
`;

const PrivateInfoContainer = styled.div`
  height: 120px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 40px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;

  input {
    border: 1px solid rgba(0, 0, 0, 0.4);
    width: 220px;
    height: 33px;
    border-radius: 6px;
    margin: 8px 0;
    padding: 6px 8px;
    border-radius: 6px;
  }

  label {
    font-weight: 600;
    font-size: 18px;
  }
`;

const DeleteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  height: 500px;
  font-size: 17px;
  color: rgba(0, 0, 0, 0 0.8);

  li {
    margin: 20px;
    font-size: 15px;
  }

  .checkbox {
    display: flex;
    font-size: 15px;
  }

  input {
    margin-right: 12px;
  }
`;

const DeleteButton = styled.button`
  padding: 14px 20px;
  border-radius: 12px;
  background-color: ${(props) => (props.disabled ? 'rgba(0,0,0,0.4)' : 'red')};
  color: ${(props) => (props.disabled ? 'rgba(0,0,0,0.3)' : 'white')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;
