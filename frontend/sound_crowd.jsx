import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store'
import Root from './components/root'
import {fetchSongs} from './util/song_api_util'


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    // const store = configureStore();
    let store;
    let songs;
    if (window.localStorage.getItem('songs')) {
        songs = JSON.parse(window.localStorage.getItem('songs'));
    }
    let currentSongId;
    if(window.localStorage.getItem('currentSongId')){
        currentSongId = JSON.parse(window.localStorage.getItem('currentSongId'))
    }
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser },
                songs: songs
            },
            session: { currentUserId: window.currentUser.id },
            ui: {
                playbar: { 
                    currentSongId: currentSongId,
                    playing: false,
                    prevSongs: [],
                    nextSongs: [],
                    playlist: [], 
                }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
 
    ReactDOM.render(<Root store={store} />, root);
    window.fetchSongs = fetchSongs;
    window.getState = store.getState;
    window.dispatch = store.dispatch;

});
