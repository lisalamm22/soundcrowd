import {
    RECEIVE_LIKE,
    REMOVE_LIKE
} from '../actions/like_actions'
import { RECEIVE_SONG } from '../actions/song_actions';

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
        default:
            return oldState;
    }
}

export default LikesReducer