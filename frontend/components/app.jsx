import React from "react";
import {Redirect, Switch} from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal'
import SplashContainer from './splash/splash_container'
import DiscoverContainer from './discover/discover_container'

const App = () => (
    <div>
        <Modal />
        <header>
            <NavBarContainer />
            {/* <h1>SoundCrowd</h1> */}
        </header>
        <Switch>
            <ProtectedRoute exact path="/discover" component={DiscoverContainer}/>
            <AuthRoute exact path="/" component={SplashContainer}/>
            <Redirect to="/" /> 
        </Switch>
    </div>
);

export default App;