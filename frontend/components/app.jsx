import React from "react";
import {Route} from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import NavBarContainer from './navbar_container';
import { AuthRoute } from '../util/route_util';
import Modal from './modal'

const App = () => (
    <div>
        <Modal />
        <header>
            <NavBarContainer />
            <h1>SoundCrowd</h1>
        </header>

        {/* <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} /> */}
    </div>
);

export default App;