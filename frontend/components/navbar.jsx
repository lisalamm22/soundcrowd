import React from 'react';
import { Link } from 'react-router-dom';

// class NavBar extends React.Component {
//     constructor(props) {
//         super(props)
//         this.handleClick = this.handleClick.bind(this)
//     }

//     handleClick(e) {
//         e.preventDefault();
//         this.props.logout()
//         // .then(()=> this.props.history.push('/'));
//     }

//     render() {
//         if (this.props.currentUser) {
//             return (
//                 <div>
//                     {/* Welcome to SoundCrowd, {this.props.currentUser.username} */}
//                     <button onClick={this.handleClick}>Logout</button>
//                 </div>
//             )
//         }
//         else {
//             return (
//                 <div>
//                     {/* <Link to='signup'>Signup</Link>
//                     <Link to='login'>Login</Link> */}
//                 </div>
//             )
//         }

//     }
// }
const NavBar = ({ currentUser, logout, openModal }) => {

    const sessionLinks = () => (
        <nav className="login-signup">
            <button onClick={() => openModal('login')}>Login</button>
      &nbsp;or&nbsp;
            <button onClick={() => openModal('signup')}>Signup</button>
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