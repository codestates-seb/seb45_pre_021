import { useEffect } from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarth, faStar } from '@fortawesome/free-solid-svg-icons';

import PropTypes from 'prop-types';

const HeaderDropdown = ({ dropDownHandler }) => {
  const navigate = useNavigate();

  useEffect(() => {
    dropDownHandler();
  }, [dropDownHandler]);

  return (
    <DropDownSection>
      <MenuSection>
        <ListSection onClick={() => navigate('/')}>
          <li>Home</li>
        </ListSection>
        <UserInfo>PUBLIC</UserInfo>
        <ListSection>
          <FontAwesomeIcon icon={faEarth} />
          <li>Questions</li>
          <li>Tags</li>
          <li>Users</li>
          <li>companies</li>
        </ListSection>
        <UserInfo>COLLECTIVES</UserInfo>
        <FontAwesomeIcon icon={faStar} />
        <ListSection>
          <li> Explore Collectives</li>
        </ListSection>
        <UserInfo>TEAMS</UserInfo>
        <ListSection>
          <li>Create a free Team</li>
          <li>Why Teams?</li>
        </ListSection>
      </MenuSection>
    </DropDownSection>
  );
};

HeaderDropdown.propTypes = {
  dropDownHandler: PropTypes.func.isRequired,
};

const DropDownSection = styled.nav`
  position: absolute;
  display: flex;
  justify-content: start;
  flex-direction: column;
  margin-right: 64%;
  width: 15rem;
  height: 40rem;
  top: 5.6vh;
`;

const MenuSection = styled.ol`
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
  background-color: white;

  li {
    height: calc(150px / 3);
    display: flex;
    align-items: center;
  }
`;

const UserInfo = styled.ol``;

const ListSection = styled.ol`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 0.3125rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export default HeaderDropdown;
