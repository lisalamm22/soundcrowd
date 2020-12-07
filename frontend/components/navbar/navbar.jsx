import React from 'react';
import {Link} from 'react-router-dom'
import SearchContainer from '../search/search_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faAngellist } from "@fortawesome/free-brands-svg-icons";


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
        const {currentUser} = this.props
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
                <SearchContainer history={this.props.history}/>
                <ul className="navbar-right">
                    <Link to='/upload'><h5>Upload</h5></Link>
                    <div className="header-name-grp">
                        <Link className="header-name-link" to={`/users/${currentUser.id}`}>
                            <img src={currentUser.photoURL} className="header-name-img"/>
                            <h2 className="header-name" id="header-name">{currentUser.username}</h2>
                        </Link>
                    </div>
                    <a className="navbar-link" href="https://github.com/lisalamm22/soundcrowd" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                    <a className="navbar-link" href="https://www.linkedin.com/in/lisa-lam-64607743/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a className="navbar-link" href="https://angel.co/u/lisa-lam-9" target="_blank"><FontAwesomeIcon icon={faAngellist} /></a>
                    <div className={`navbar-more`} onClick={this.handleMore}>
                        <ul className={`more-dropdown-${this.state.dropdown}`} >
                            {/* <li>About us</li> */}
                            <li><a href="https://github.com/lisalamm22/soundcrowd" target="_blank">Github</a></li>
                            <li><a href="https://www.linkedin.com/in/lisa-lam-64607743/" target="_blank">LinkedIn</a></li>
                            <li><a href="https://angel.co/u/lisa-lam-9" target="_blank">AngelList</a></li>
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