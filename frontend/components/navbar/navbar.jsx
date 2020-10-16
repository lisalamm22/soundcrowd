import React from 'react';
import {Link} from 'react-router-dom'

class NavBar extends React.Component {
    constructor(props){
        super(props)
        this.state={
            dropdown: false
        }
        this.sessionLinks = this.sessionLinks.bind(this)
        this.navLinks = this.navLinks.bind(this)
        this.handleMore = this.handleMore.bind(this)
    }
    handleMore(){
        // debugger
        let newState = !this.state.dropdown;
        this.setState({ dropdown: newState });
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
        // debugger
        return(<hgroup className="header-group">
            <nav>
                <ul className="navbar-left">
                    <Link to='/discover'>
                        <img src={window.logo} alt="SoundCrowd"/>
                    </Link>
                    <Link to='/discover'><h5>Home</h5></Link>
                    <Link to='/stream'><h5>Stream</h5></Link>
                    <Link to='/library'><h5>Library</h5></Link>
                </ul>
                {/* searchcontainer */}
                <ul className="navbar-right">
                    <Link to='/upload'><h5>Upload</h5></Link>
                    <h2 className="header-name">{this.props.currentUser.username}</h2>
                    <div className={`navbar-more`} onClick={this.handleMore}>
                        <ul className={`more-dropdown-${this.state.dropdown}`} >
                            <li>About us</li>
                            <li>Github</li>
                            <li>LinkedIn</li>
                            <li>Something</li>
                            <li>Else</li>
                            <li onClick={this.props.logout}>Sign Out</li>
                        </ul>
                    </div>
                </ul>
            </nav>
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