import { styled } from 'styled-components';
import PropTypes from 'prop-types';

const Button = ({ children, type = 'primary', onClick, disabled }) => {
  const buttonStyle = {
    primary: {
      color: '#ffffff',
      bgColor: '#0a95ff',
      hoverColor: '#0074cc',
      disabledColor: '#84caff',
      border: 'none',
    },
    light: {
      color: '#0a95ff',
      bgColor: '#ffffff',
      hoverColor: '#f0f8ff',
      disabledColor: '#d2d5d8',
      border: '#none',
    },
  };
  return (
    <NextButton
      className={disabled ? 'disabled' : ''}
      onClick={onClick}
      $st={buttonStyle[type]}
    >
      {children}
    </NextButton>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;

const NextButton = styled.button`
  width: fit-content;
  height: 40px;
  padding: 10px;
  background-color: ${(props) => props.$st.bgColor};
  color: ${(props) => props.$st.color};
  border: 1px solid ${(props) => props.$st.border};
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.$st.hoverColor};
  }
  &.disabled {
    background-color: ${(props) => props.$st.disabledColor};
    pointer-events: none;
  }
`;
