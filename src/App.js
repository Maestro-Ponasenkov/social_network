import './App.css';
import React from 'react';
import Route from "react-router-dom/es/Route";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import HeaderImage from "./components/HeaderImage/HeaderImage";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <HeaderImage/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile updateNewPostText={props.updateNewPostText} profilePage={props.state.profilePage} addPost={props.addPost}/>}/>
                    <Route path='/dialogs'
                           render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path='/news'
                           render={() => <News/>}/>
                    <Route path='/music'
                           render={() => <Music/>}/>
                    <Route path='/settings'
                           render={() => <Settings/>}/>
                </div>
            </div>
    );
}

export default App;
