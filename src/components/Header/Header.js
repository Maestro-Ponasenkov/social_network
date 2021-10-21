import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={s.header}>
            <NavLink to='/profile'>
            <img className={s.logo} src='https://i.imgur.com/sn2u13Q.png' alt='logo'/>
            </NavLink>
        </header>

    )
}

export default Header;
