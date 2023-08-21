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
import NotFound from './pages/NotFound.jsx';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
// import axios from 'axios';
import myAxios from './utils/axios.js';

import './App.css';

export const LoginContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('access_token');

    if (!storedToken) {
      handleLogout();
    }

    const fetchUserData = async () => {
      try {
        const response = await myAxios.get();
        setUserData(response.data);
        setIsLoggedIn(true);
      } catch (error) {
        handleLogout();
      }
    };

    fetchUserData();
  }, []);

  return (
    <LoginContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, userData, setUserData, handleLogout }}
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
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;
