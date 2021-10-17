import './App.css';
import React from 'react';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import HeaderImage from "./components/HeaderImage";

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
