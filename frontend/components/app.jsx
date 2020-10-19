import React from "react";
import {Redirect, Switch, Route} from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal'
import SplashContainer from './splash/splash_container'
import DiscoverContainer from './discover/discover_container'
import CreateSongFormContainer from './song_form/create_song_form_container'
import SongShowContainer from './song_show/song_show_container'
import YourTracksContainer from './user/user_container';
import EditSongFormContainer from './song_form/edit_song_form_container';
import UserContainer from './user/user_container'

const App = () => (
    <div>
        <Modal />
        <header>
            <NavBarContainer />
        </header>
        <section className="main-content">
            <Switch>
                <ProtectedRoute exact path="/discover" component={DiscoverContainer}/>
                <ProtectedRoute exact path="/upload" component={CreateSongFormContainer}/>
                <Route exact path="/user/:userId" component={UserContainer}/>
                <Route exact path="/songs/:songId" component={SongShowContainer}/>
                <Route exact path="/songs/:songId/edit" component={EditSongFormContainer}/>
                <AuthRoute exact path="/" component={SplashContainer}/>
                <Redirect to="/" /> 
            </Switch>
        </section>
        
    </div>
);

export default App;