import React from 'react';

const NavBar = ({ currentUser, logout, openModal }) => {

    const sessionLinks = () => (
        <nav className="login-signup">
            <div>
                <img src={window.logonameclearback} alt="SoundCrowd"/>
                <div className="login-signup-buttons">
                    <button onClick={() => openModal('login')} className='signin'>Sign in</button>
                    <button onClick={() => openModal('signup')} className='signup'>Create account</button>
                </div>
            </div>
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return (
        currentUser ?
            personalGreeting(currentUser, logout) :
            sessionLinks()
    );
};
export default NavBar