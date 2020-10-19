import {
    RECEIVE_ALL_SONGS,
    RECEIVE_SONG,
    REMOVE_SONG,
} from '../actions/song_actions';


const SongsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    // debugger
    switch (action.type) {
        case RECEIVE_ALL_SONGS:
            return action.songs;
        case RECEIVE_SONG:
            nextState[action.song.id] = action.song
            // debugger
            return nextState;
        case REMOVE_SONG:
            delete nextState[action.songId];
            return nextState;
        default:
            return oldState;
    }
}

export default SongsReducer