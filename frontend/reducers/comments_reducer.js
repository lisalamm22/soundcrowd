import {
    RECEIVE_COMMENT,
    REMOVE_COMMENT
} from '../actions/comment_actions'

import { RECEIVE_SONG } from '../actions/song_actions'

const CommentsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch(action.type){
        case RECEIVE_SONG:
            debugger
            nextState = action.song.comments;
            return nextState;
        case RECEIVE_COMMENT:
            nextState[action.comment.comment.id] = action.comment.comment;
            return nextState;
        case REMOVE_COMMENT:
            delete nextState[action.commentId];
            return nextState;
        default:
            return oldState;
    }
}

export default CommentsReducer