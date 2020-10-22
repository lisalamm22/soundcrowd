import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { updateSong, deleteSong } from '../../actions/song_actions';
import UserSongs from './user';
// import { fetchSongs } from '../../actions/song_actions';
import { fetchUser } from '../../actions/user_actions';


const mapStateToProps = (state, ownProps) => {
    debugger
    return ({
        currentUserId: state.session.currentUserId,
        // currentUser: state.entities.users[state.session.currentUserId],
        songs: state.entities.songs,
        user: state.entities.users[ownProps.match.params.userId]
    }
    )
};

const mapDispatchToProps = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(UserSongs));