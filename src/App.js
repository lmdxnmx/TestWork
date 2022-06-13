import React, { useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from "react-router-dom";
import Profile from './Components/Profile/Profile.jsx'
import News from './Components/News/News.jsx'
import Login from './Components/Login/Login';
import Main from './Components/Main/Main';

function App() {

  return (
  <div>
    <Header/>
    <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/news"} element={<News />} />
        <Route path={"/profile"} element={<Profile />} />
      </Routes>
  </div>
  );
}

export default App;
