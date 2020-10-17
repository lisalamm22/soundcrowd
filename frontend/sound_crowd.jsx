import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store'
import Root from './components/root'
import {fetchSongs} from './util/song_api_util'


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    // const store = configureStore();
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { currentUserId: window.currentUser.id }
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
