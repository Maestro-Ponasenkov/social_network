import React from 'react';

const Navbar = () => {
    return (
        <nav className='nav'>
            <div>
                <a>Profile</a>
            </div>
            <div>
                <a>Messages</a>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>Music</a>
            </div>
            <div className='settings'>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;
