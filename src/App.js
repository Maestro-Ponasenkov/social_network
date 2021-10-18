import './App.css';
import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import HeaderImage from "./components/HeaderImage/HeaderImage";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header />
            <HeaderImage />
            <Navbar />
            <Profile />
        </div>
    );
}

export default App;
