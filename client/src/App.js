import { useState, createContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import MyPage from './pages/users/MyPage.jsx';
import Login from './pages/users/Login.jsx';
import Register from './pages/users/Register.jsx';
import Main from './pages/questions/Main.jsx';
import Post from './pages/questions/Post.jsx';
import Edit from './pages/questions/Edit.jsx';
import Detail from './pages/questions/Detail.jsx';
import Search from './pages/questions/Search.jsx';
import NotFound from './pages/NotFound.jsx';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import axios from './utils/axios.js';

import './App.css';

export const LoginContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    try {
      const response = await axios.get('users/mypage');
      setUserData(response.data);
      setIsLoggedIn(true);
    } catch (error) {
      handleLogout();
      console.log('err', error);
    }
  };

  const handleProfileChange = async (index) => {
    if (userData === null) return;
    try {
      await axios.patch('users/mypage/edit-info', {
        imageId: index,
      });
      await fetchUserData();
    } catch (error) {
      console.log('err', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    setIsLoggedIn(false);
    setUserData(null);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('access_token');

    if (!storedToken) {
      handleLogout();
    }

    fetchUserData();
  }, []);

  return (
    <LoginContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        userData,
        setUserData,
        handleLogout,
        handleProfileChange,
        fetchUserData,
      }}
    >
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<MyPage />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/users/register" element={<Register />} />
          <Route path="/questions" element={<Main />} />
          <Route path="/questions/post" element={<Post />} />
          <Route path="/questions/edit/:id" element={<Edit />} />
          <Route path="/questions/detail/:id" element={<Detail />} />
          <Route path="/questions/search/:keyword" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;
