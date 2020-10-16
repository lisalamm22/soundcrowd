import React from "react";
import {Redirect, Switch} from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal'
import SplashContainer from './splash/splash_container'
import DiscoverContainer from './discover/discover_container'
import SongFormContainer from './song_form/song_form_container'

const App = () => (
    <div>
        <Modal />
        <header>
            <NavBarContainer />
            {/* <h1>SoundCrowd</h1> */}
        </header>
        <section className="main-content">
            <Switch>
                <ProtectedRoute exact path="/discover" component={DiscoverContainer}/>
                <ProtectedRoute exact path="/upload" component={SongFormContainer}/>
                <AuthRoute exact path="/" component={SplashContainer}/>
                <Redirect to="/" /> 
            </Switch>
        </section>
        
    </div>
);

export default App;