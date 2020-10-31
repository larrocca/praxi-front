import React from 'react';
import './App.scss';
import LandingPage from './pages/LandingPage/LandingPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import MainPage from './pages/MainPage/MainPage';
import Header from './components/Header/Header';
import MessagePage from './pages/MessagePage/MessagePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="siteContainer">
        <MainPage/>
      </div>
    </div>
  );
}

export default App;
