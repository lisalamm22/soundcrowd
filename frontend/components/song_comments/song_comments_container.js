import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteComment } from '../../actions/comment_actions';
import SongComments from './song_comments';

const mapStateToProps = (state) => {
    return ({
        currentUserId: state.session.currentUserId,
        comments: state.entities.comments,
        users: state.entities.users,
    })
};

const mapDispatchToProps = dispatch => ({
    deleteComment: songId => dispatch(deleteComment(songId)),
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(SongComments));