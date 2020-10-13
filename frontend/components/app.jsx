import React from "react";
import {Route, Switch} from 'react-router-dom';
// import LoginFormContainer from './login_form_container';
// import SignupFormContainer from './signup_form_container';
import NavBarContainer from './navbar/navbar_container';
// import { AuthRoute } from '../util/route_util';
import Modal from './modal/modal'
import SplashContainer from './splash/splash_container'

const App = () => (
    <div>
        <Modal />
        <header>
            <NavBarContainer />
            <h1>SoundCrowd</h1>
        </header>
        <Switch>
            <Route exact path="/" component={SplashContainer}/>
        </Switch>
    </div>
);

export default App;