
import { 
    RECEIVE_CURRENT_SONG, 
    RECEIVE_PREVIOUS_SONG, 
    RECEIVE_NEXT_SONG, 
    PLAY_SONG, 
    PAUSE_SONG, 
    RECEIVE_PLAYLIST
} from '../actions/playbar_actions';

const defaultState = {
    playing: false,
    currentSongId: null,
    prevSongs: [],
    nextSongs: [],
}

const playbarReducer = (oldState = defaultState, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState)
    switch(action.type){
        case RECEIVE_CURRENT_SONG:
            nextState[currentSongId] = action.songId;
            return nextState;
        case RECEIVE_PREVIOUS_SONG:
            nextState.prevSongs.push(action.songId);
            return nextState;
        case RECEIVE_NEXT_SONG:
            nextState.nextSongs.push(action.songId);
            return nextState;
        case PLAY_SONG:
            nextState[playing] = true;
            return nextState;
        case PAUSE_SONG:
            nextState[playing] = false;
            return nextState;
        case RECEIVE_PLAYLIST:
            const playlist = Object.values(action.songs);
            playlist.forEach((song, idx) => {
                randIdx = Math.floor(Math.random()*(playlist.length-idx))
                nextState.nextSongs.push(playlist[randIdx])
            })
            return nextState;
        default:
            return oldState

    }
}

export default playbarReducer;