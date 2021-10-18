import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.logo} src='https://i.imgur.com/sn2u13Q.png' alt='logo'/>
        </header>

    )
}

export default Header;
