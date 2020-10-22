import { RECEIVE_CURRENT_USER } from '../actions/session_actions'
import { RECEIVE_SONG } from '../actions/song_actions'
import { RECEIVE_COMMENT } from '../actions/comment_actions'
import { RECEIVE_USER } from '../actions/user_actions'

const usersReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({},state )
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.user.id]: action.user });
            
        case RECEIVE_SONG:
            nextState = Object.assign(nextState, action.song.users)
            return nextState;
        case RECEIVE_COMMENT:
            nextState = Object.assign(nextState, {[action.comment.author.id]: action.comment.author})
            return nextState;
        case RECEIVE_USER:
            return Object.assign({}, state, { [action.user.user.id]: action.user.user });
        default:
            return state;
    }
}

export default usersReducer