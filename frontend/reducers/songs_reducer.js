import {
    RECEIVE_ALL_SONGS,
    RECEIVE_SONG,
    REMOVE_SONG,
} from '../actions/song_actions';


const SongsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_ALL_SONGS:
            return action.posts;
        case RECEIVE_SONG:
            nextState[action.song.id] = action.song
            return nextState;
        case REMOVE_SONG:
            delete nextState[action.songId];
            return nextState;
        default:
            return oldState;
    }
}

export default SongsReducer