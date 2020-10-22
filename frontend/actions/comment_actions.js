import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveComment = (comment) => {
    // debugger
    return ({
        type: RECEIVE_COMMENT,
        comment,
    });
};

const removeComment = (commentId) => {
    return ({
        type: REMOVE_COMMENT,
        commentId,
    });
};

export const createComment = (comment) => (dispatch) => {
    return (
        CommentApiUtil.createComment(comment)
            .then(comment => {
                return dispatch(receiveComment(comment))
            })
    );
};

export const deleteComment = (commentId) => (dispatch) => {
    return (
        CommentApiUtil.deleteComment(commentId)
            .then(() => { dispatch(removeComment(commentId)) })
    );
};