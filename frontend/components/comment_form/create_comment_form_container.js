import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createComment } from '../../actions/comment_actions';
import CreateCommentForm from './create_comment_form';

const mapStateToProps = (state) => {
    return ({
        currentUserId: state.session.currentUserId,
        // currentUser: state.session.users[state.session.currentUserId],
        comments: state.entities.comments,
        
    })
};

const mapDispatchToProps = dispatch => ({
    createComment: song => dispatch(createComment(song)),
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateCommentForm));