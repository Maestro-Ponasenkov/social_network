import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.avatar_div}>
                <img className={s.avatar} src='https://i.imgur.com/OE5hM33.jpg' alt='avatar'/>
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;
