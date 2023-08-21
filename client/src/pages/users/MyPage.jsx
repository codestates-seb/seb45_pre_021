import { useContext } from 'react';
import { LoginContext } from '../../App.js';

const MyPage = () => {
  const { userData } = useContext(LoginContext);

  if (userData) {
    // Display user data or perform actions with it
    console.log(userData);
  } else {
    // User is not logged in or data is not available
    console.log('no user data');
  }
};

export default MyPage;
