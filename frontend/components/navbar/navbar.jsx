import React from 'react';
import {Link} from 'react-router-dom'

class NavBar extends React.Component {
    constructor(props){
        super(props)
        this.sessionLinks = this.sessionLinks.bind(this)
        this.navLinks = this.navLinks.bind(this)
    }
    sessionLinks(){
        return(<nav className="login-signup">
            <div>
                <Link to='/'>
                    <img src={window.logonameclearback} alt="SoundCrowd"/>
                </Link>
                <div className="login-signup-buttons">
                    <button onClick={() => this.props.openModal('login')} className='signin'>Sign in</button>
                    <button onClick={() => this.props.openModal('signup')} className='signup'>Create account</button>
                </div>
            </div>
        </nav>
    )};
    navLinks(){
        return(<hgroup className="header-group">
            <Link to='/discover'>
                <img src={window.logo} alt="SoundCrowd"/>
            </Link>
            <Link to='/discover'><h5>Home</h5></Link>
            <Link to='/stream'><h5>Stream</h5></Link>
            <Link to='/library'><h5>Library</h5></Link>
            {/* searchcontainer */}
            <h5>Upload</h5>
            <h2 className="header-name">{this.props.currentUser.username}</h2>
            <button className="header-button" onClick={this.props.logout}>Log Out</button>
        </hgroup>
    )}
    render(){
        const{ currentUser, logout, openModal } = this.props
        return (
            <>
            {currentUser ?
                this.navLinks(currentUser, logout) :
                this.sessionLinks()}</>
    )};
};
export default NavBar