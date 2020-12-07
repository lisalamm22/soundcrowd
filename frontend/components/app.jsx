import React from "react";
import {Redirect, Switch, Router} from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import SplashContainer from './splash/splash_container';
import DiscoverContainer from './discover/discover_container';
import StreamContainer from './stream/stream_container';
import CreateSongFormContainer from './song_form/create_song_form_container';
import SongShowContainer from './song_show/song_show_container';
import EditSongFormContainer from './song_form/edit_song_form_container';
import UserContainer from './user/user_container';
import PlaybarContainer from './playbar/playbar_container';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faAngellist, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPencilAlt, faTrash,
    faPlay, faPause, faStepBackward, faStepForward,
    faVolumeUp, faVolumeDown, faVolumeMute, 
    faRandom, faRedoAlt,
    faCommentAlt,
    faHeart, faUserPlus, faList,
    faTimes, faPlus, faMinus,
} from '@fortawesome/free-solid-svg-icons';

import { faHeart as farHeart} from '@fortawesome/free-regular-svg-icons';

library.add(fab, faPencilAlt, faTrash, 
    faPlay, faPause, faStepBackward, faStepForward,
    faVolumeUp, faVolumeDown, faVolumeMute,
    faRandom, faRedoAlt,
    faCommentAlt,
    faHeart, faUserPlus, faList, farHeart,
    faTimes, faPlus, faMinus,
    faGithub, faLinkedin, faAngellist);

const App = () => (
    <div>
        <Modal />
        <header>
            <NavBarContainer />
        </header>
        <section className="main-content">
            <Switch>
                <ProtectedRoute exact path="/discover" component={DiscoverContainer}/>
                <ProtectedRoute exact path="/stream" component={StreamContainer}/>
                <ProtectedRoute exact path="/upload" component={CreateSongFormContainer}/>
                <ProtectedRoute exact path="/users/:userId" component={UserContainer}/>
                <ProtectedRoute exact path="/songs/:songId" component={SongShowContainer}/>
                <ProtectedRoute exact path="/songs/:songId/edit" component={EditSongFormContainer}/>
                <AuthRoute exact path="/" component={SplashContainer}/>
                <Redirect to="/" /> 
            </Switch>
        </section>
        <PlaybarContainer />
    </div>
);

export default App;