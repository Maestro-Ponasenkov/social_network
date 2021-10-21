import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.avatar_div}>
                <img className={s.avatar} src='https://i.imgur.com/orDq85g.jpg' alt='avatar'/>
                description
            </div>
        </div>
    )
}

export default ProfileInfo;
