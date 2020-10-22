import {
    RECEIVE_ALL_SONGS,
    RECEIVE_SONG,
    REMOVE_SONG,
} from '../actions/song_actions';
import { RECEIVE_USER } from '../actions/user_actions';


const SongsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    // debugger
    switch (action.type) {
        case RECEIVE_ALL_SONGS:
            return action.songs;
        case RECEIVE_SONG:
            nextState[action.song.id] = action.song.song
            // debugger
            return nextState;
        case REMOVE_SONG:
            delete nextState[action.songId];
            return nextState;
        case RECEIVE_USER:
            return Object.assign({}, action.user.songs)
        default:
            return oldState;
    }
}

export default SongsReducer