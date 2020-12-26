
import { 
    RECEIVE_CURRENT_SONG, 
    REMOVE_CURRENT_SONG, 
    RECEIVE_PREVIOUS_SONG, 
    RECEIVE_NEXT_SONG, 
    REMOVE_NEXT_SONG,
    REMOVE_PLAYLIST_SONG,
    PLAY_SONG, 
    PAUSE_SONG, 
    RECEIVE_PLAYLIST
} from '../actions/playbar_actions';

import{
    RECEIVE_CURRENT_USER
} from '../actions/session_actions';

import{
    REMOVE_SONG
} from '../actions/song_actions';

const defaultState = {
    playing: false,
    currentSongId: null,
    prevSongs: [],
    nextSongs: [],
    playlist: [],
}

const playbarReducer = (oldState = defaultState, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState)
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            nextState = defaultState;
            return nextState;
        case RECEIVE_CURRENT_SONG:
            nextState["currentSongId"] = action.songId;
            return nextState;
        case REMOVE_CURRENT_SONG:
            nextState["currentSongId"] = null;
            nextState["playing"] = false;
            return nextState;
        case RECEIVE_PREVIOUS_SONG:
            nextState.prevSongs.unshift(action.songId);
            return nextState;
        case RECEIVE_NEXT_SONG:
            nextState.nextSongs.push(action.songId);
            return nextState;
        case REMOVE_NEXT_SONG:
            nextState.nextSongs.splice(action.listIdx,1);
            return nextState;
        case REMOVE_PLAYLIST_SONG:
            nextState.playlist.splice(action.listIdx,1);
            return nextState;
        case PLAY_SONG:
            nextState["playing"] = true;
            return nextState;
        case PAUSE_SONG:
            nextState["playing"] = false;
            return nextState;
        case RECEIVE_PLAYLIST:
            let songs = Object.values(action.songs);
            let currIdx = songs.length;
            let temp;
            let randIdx;
            while( 0 !== currIdx){
                randIdx = Math.floor(Math.random() * currIdx);
                currIdx -= 1;

                temp = songs[currIdx];
                songs[currIdx] = songs[randIdx];
                songs[randIdx] = temp;
            }
            songs.forEach( (song, idx) => {
                nextState.playlist.push(song.id)
            })
            return nextState;
        case REMOVE_SONG:
            if(nextState.currentSongId === action.songId){
                nextState.currentSongId = null;
            }
            nextState.prevSongs = nextState.prevSongs.filter(songId => songId !== action.songId)
            nextState.nextSongs = nextState.nextSongs.filter(songId => songId !== action.songId)
            nextState.playlist = nextState.playlist.filter(songId => songId !== action.songId)
            return nextState;
        default:
            return oldState

    }
}

export default playbarReducer;