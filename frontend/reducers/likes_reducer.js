import {
    RECEIVE_LIKE,
    REMOVE_LIKE
} from '../actions/like_actions'
import { RECEIVE_ALL_SONGS, RECEIVE_SONG } from '../actions/song_actions';
import { RECEIVE_PLAYLIST } from '../actions/playbar_actions';

const LikesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch(action.type){
        case RECEIVE_LIKE:
            nextState[action.like.like.id] = action.like.like;
            return nextState;
        case REMOVE_LIKE:
            delete nextState[action.likeId];
            return nextState;
        case RECEIVE_SONG:
            return Object.assign({}, action.song.likes)
        case RECEIVE_ALL_SONGS:
            const songIds = Object.keys(action.songs)
            songIds.forEach(songId => {
                let songLikes = action.songs[songId].likes
                if(songLikes !== undefined){
                    Object.keys(songLikes).forEach(songLikeId => {
                        nextState[songLikeId] = action.songs[songId].likes[songLikeId]
                })}
            })
            return nextState;
        case RECEIVE_PLAYLIST:
            const playlistIds = Object.keys(action.songs)
            playlistIds.forEach(songId => {
                let songLikes = action.songs[songId].likes
                if(songLikes !== undefined){
                    Object.keys(songLikes).forEach(songLikeId => {
                        nextState[songLikeId] = action.songs[songId].likes[songLikeId]
                })}
            })
            return nextState;
        default:
            return oldState;
    }
}

export default LikesReducer