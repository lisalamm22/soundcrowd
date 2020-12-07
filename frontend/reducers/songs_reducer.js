import {
    RECEIVE_ALL_SONGS,
    RECEIVE_SONG,
    REMOVE_SONG,
} from '../actions/song_actions';
import { RECEIVE_USER } from '../actions/user_actions';


const SongsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_ALL_SONGS:
            let songIds = Object.keys(action.songs)
            songIds.forEach(songId => {
                nextState[songId] = action.songs[songId]
            })
            return nextState;
            // return action.songs
        case RECEIVE_SONG:
            nextState[action.song.id] = action.song.song
            return nextState;
        case REMOVE_SONG:
            delete nextState[action.songId];
            return nextState;
        // case RECEIVE_USER:
        //     return Object.assign(nextState, action.user.songs)
        default:
            return oldState;
    }
}

export default SongsReducer