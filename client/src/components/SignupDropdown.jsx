import { useEffect } from 'react';
import { styled } from 'styled-components';

import PropTypes from 'prop-types';

const SignupDropdown = ({ dropDownHandler }) => {
  useEffect(() => {
    dropDownHandler();
  }, [dropDownHandler]);

  return (
    <DropDownSection>
      <Polygon />
      <p>
        We know you hate spam, and we do too. That’s why we make it easy for you
        to update your email preferences or unsubscribe at anytime.
      </p>
      <p>
        We never share your email address with third parties for marketing
        purposes.
      </p>
    </DropDownSection>
  );
};

SignupDropdown.propTypes = {
  dropDownHandler: PropTypes.func.isRequired,
};

const DropDownSection = styled.nav`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 13.125rem;
  top: 30rem;
  font-size: 0.8125rem;
  border-radius: 0.75rem;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
  background-color: white;
  padding: 0.75rem;
  gap: 0.8125rem;
`;

const Polygon = styled.div`
  position: absolute;
  width: 1rem;
  height: 1.125rem;
  margin-left: 11.8rem;
  margin-bottom: 0.125rem;
  transform: rotate(135deg);
  box-shadow: -1px -1px 1px 0 rgba(0, 0, 0, 0.1);
  background-color: inherit;
`;

export default SignupDropdown;
