import { styled } from 'styled-components';
import icon from '../../imgs/google_icon.svg';
import { Icon } from '@iconify/react';

import { useState, useContext } from 'react';

import SignupDropdown from '../../components/SignupDropdown.jsx';
import myAxios from '../../utils/axios';
import { useNavigate } from 'react-router-dom';
import captcha from '../../imgs/captcha.jpg';
import clikedCaptcha from '../../imgs/clicked_captcha.gif';

import { LoginContext } from '../../App';

const Register = () => {
  const [isShow, setIsShow] = useState(false);
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const { isLoggedIn } = useContext(LoginContext);
  const nav = useNavigate();

  const nav = useNavigate();

  if (isLoggedIn) {
    nav('/questions');
  }

  const [clicked, setClicked] = useState(false);

  const handleCaptchaChange = () => {
    setClicked((prevClicked) => !prevClicked);
  };

  const dropDownHandler = () => {
    setIsShow((props) => !props);
  };

  const nickNameRegex = /^[가-힣a-zA-Z]{2,6}$/;
  const emailRegex = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%#?&])[A-Za-z\d$@$!%#?&]{8,16}$/;

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!clicked) {
      alert('Please click the reCaptcha before submitting the form.');
      return;
    }

    const newErrors = {};

    if (!nickName) {
      newErrors.nickName = 'Nickname cannot be empty.';
    } else if (!nickNameRegex.test(nickName)) {
      newErrors.nickName = 'The nickname is not valid.';
    }

    if (!email) {
      newErrors.email = 'Email cannot be empty.';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'The email is not a valid email address.';
    }

    if (!password) {
      newErrors.password = 'Password cannot be empty.';
    } else if (!passwordRegex.test(password)) {
      newErrors.password = 'No user found with matching email';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const userInfo = { nickName, email, password };
        const response = await myAxios.post('users/signup', userInfo);
        console.log(response);
        nav('/users/login');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <RegisterSection>
      <BodySection>
        <ItemSection>
          <h1>Join the Stack Overflow community</h1>
          <FontSection>
            <p>
              <Icon
                icon="fluent:chat-bubbles-question-28-filled"
                color="hsl(206,100%,52%)"
                width="26"
                height="26"
              />
              Get unstuck — ask a question
            </p>
            <p>
              <Icon
                icon="entypo:select-arrows"
                color="hsl(206,100%,52%)"
                width="26"
                height="26"
              />
              Unlock new privileges like voting and commenting
            </p>
            <p>
              <Icon
                icon="mingcute:tag-2-fill"
                hFlip={true}
                color="hsl(206,100%,52%)"
                width="26"
                height="26"
              />
              Save your favorite questions, answers, watch tags, and more
            </p>
            <p>
              <Icon
                icon="solar:cup-star-bold"
                color="hsl(206,100%,52%)"
                width="26"
                height="26"
              />
              Earn reputation and badges
            </p>
            <div>
              Collaborate and share knowledge with a private group for FREE.
              <br />
              <a
                href="https://stackoverflow.com/teams?utm_source=so-owned&amp;utm_medium=product&amp;utm_campaign=free-50&amp;utm_content=public-sign-up"
                target="_blank"
                rel="noreferrer"
              >
                Get Stack Overflow for Teams free for up to 50 users
              </a>
            </div>
          </FontSection>
        </ItemSection>
        <ItemSection>
          <OAuthSection>
            <img src={icon} alt="icon" />
            <p>Sign up with Google</p>
          </OAuthSection>
          <FormSection onSubmit={handleSignUp}>
            <LabelSection>
              <label htmlFor="Display_name">Display name</label>
              <input
                type="Display_name"
                name="Display_name"
                id="Display_name"
                value={nickName}
                onChange={(e) => setNickName(e.target.value)}
              />
              {errors.nickName && <span>{errors.nickName}</span>}
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <span>{errors.email}</span>}
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <span>{errors.password}</span>}
              <p>
                Passwords must contain at least eight characters, including at
                least 1 letter and 1 number.
              </p>
            </LabelSection>
            {clicked ? (
              <RecaptchaSection>
                <img src={clikedCaptcha} alt="reCaptcha" />
              </RecaptchaSection>
            ) : (
              <RecaptchaSection onClick={handleCaptchaChange}>
                <img src={captcha} alt="reCaptcha" />
              </RecaptchaSection>
            )}

            <CheckSection>
              <div>
                <input type="checkbox" name="EmailOptIn" id="opt-in"></input>
              </div>
              <label htmlFor="opt-in">
                Opt-in to receive occasional product updates, user research
                invitations, company announcements, and digests.
              </label>
              <button onClick={dropDownHandler}>
                <Icon icon="ri:question-fill" width="14" height="14" />
              </button>
              {isShow ? (
                <SignupDropdown dropDownHandler={dropDownHandler} />
              ) : (
                ''
              )}
            </CheckSection>
            <ButtonSection type="submit">Sign up</ButtonSection>
            <CaptionSection>
              By clicking “Sign up”, you agree to our{` `}
              <a
                href="https://stackoverflow.com/legal/terms-of-service/public"
                name="tos"
                target="_blank"
                className="-link"
                rel="noreferrer"
              >
                terms of service{` `}
              </a>
              and acknowledge that you have read and understand our{` `}
              <a
                href="https://stackoverflow.com/legal/privacy-policy"
                name="privacy"
                target="_blank"
                className="-link"
                rel="noreferrer"
              >
                privacy policy{` `}
              </a>
              and{` `}
              <a
                href="https://stackoverflow.com/conduct"
                name="conduct"
                target="_blank"
                className="-link"
                rel="noreferrer"
              >
                code of conduct.
              </a>
            </CaptionSection>
          </FormSection>
          <RedirectSection>
            <p>
              Already have an account? <a href="/users/login">Log in</a>
            </p>
            <p>
              Are you an employer?{` `}
              <a href="https://talent.stackoverflow.com/users/login">
                Sign up on Talent{' '}
                <Icon
                  className="icon"
                  icon="icon-park-outline:share"
                  width="13"
                  height="13"
                />
              </a>
            </p>
          </RedirectSection>
        </ItemSection>
      </BodySection>
    </RegisterSection>
  );
};

const RegisterSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - 204px);
  margin-top: 3.375rem;
  background: transparent;
  padding: 1.1875rem;
`;

const BodySection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  width: 49.0625rem;
`;

const ItemSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  width: 30vw;
  gap: 1rem;
  margin: 0 auto;

  h1 {
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
`;

const FontSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  width: inherit;
  gap: 1.5rem;
  margin: 0 auto;

  p {
    display: flex;
    justify-content: left;
    align-items: center;
    height: 1.625rem;
    gap: 0.3rem;
  }

  div {
    font-size: 0.8125rem;
    color: hsl(210, 8%, 45%);
    a {
      color: hsl(206, 100%, 40%);
      text-decoration: none;
      cursor: pointer;
    }
  }
`;

const OAuthSection = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 21.75rem;
  height: 38px;
  gap: 0.625rem;
  margin: 0.25rem 0rem;
  padding: 0.65rem;
  background: hsl(0, 0%, 100%);
  box-shadow:
    0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05),
    0 1px 4px hsla(0, 0%, 0%, 0.1);

  border: 1px solid hsl(210, 8%, 85%);
  border-radius: 0.375rem;
  background-color: white;

  &:hover {
    background-color: hsl(210, 8%, 97.5%);
  }
  &:active {
    background-color: hsl(210, 8%, 95%);
  }
`;

const FormSection = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 21.75rem;
  height: 37.5rem;
  gap: 1rem;

  padding: 1.5rem;
  border-radius: 8px;
  background: hsl(0, 0%, 100%);
  box-shadow:
    0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05),
    0 1px 4px hsla(0, 0%, 0%, 0.1);

  span {
    display: flex;
    flex-direction: column;
    height: 0.1875rem;
    font-size: 0.8125rem;
    font-weight: bold;
    color: #d0393e;
    padding-left: 0.125rem;
    margin-top: -1.125rem;
    margin-bottom: 0.9375rem;
  }
`;

const LabelSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 0.625rem;

  label {
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 1rem;
    color: hsl(210, 8%, 5%);
    font-weight: 600;
    margin: 0.125rem 0px;
    padding: 0px 0.125rem;
    cursor: pointer;
  }

  input {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18.75rem;
    height: 2rem;
    box-shadow: 0px 0px 1px 1px rgba(136, 135, 135, 0.5);
    border-radius: 0.3125rem;
    margin: 0rem 0rem 1rem;
    padding: 7.8px 32px 7.8px 9.1px;
    border: 2px solid transparent;
    transition: border-color 0.3s;

    &:focus {
      border-color: hsla(206, 100%, 40%, 0.6);
      outline: none;
    }
  }

  p {
    color: hsl(210, 8%, 45%);
    font-size: 0.75rem;
    margin-top: -0.8rem;
    margin-left: 0.125rem;
  }
`;

const RecaptchaSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 18.75rem;
  }
`;

const ButtonSection = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18.75rem;
  height: 2.3125rem;
  margin: 0.125rem 0px;
  padding: 0.65rem;
  gap: 0.3125rem;
  color: white;
  box-shadow: none;
  outline: none;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 0.375rem;
  background-color: hsl(206, 100%, 52%);
  cursor: pointer;

  img {
    width: 1.125rem;
    height: 1.125rem;
  }

  &:hover {
    background-color: hsl(206, 100%, 40%);
  }
  &:active {
    background-color: hsl(209, 100%, 37.5%);
  }
`;

const CheckSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 0.5rem;

  input,
  label,
  button {
    font-size: 0.75rem;
    background-color: inherit;
    cursor: pointer;
  }
`;

const CaptionSection = styled.div`
  width: 18.75rem;
  color: hsl(210, 8%, 45%);
  text-align: left;
  font-size: 0.75rem;

  a {
    color: hsl(206, 100%, 40%);
    text-decoration: none;
    cursor: pointer;
  }
`;

const RedirectSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 21.75rem;
  gap: 0.5rem;
  text-align: center;
  font-size: 0.8125rem;
  padding: 2px;

  a {
    color: hsl(206, 100%, 40%);
    text-decoration: none;
    cursor: pointer;
    .icon {
      margin-bottom: -0.125rem;
    }
  }
`;

export default Register;
