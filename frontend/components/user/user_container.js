import { connect } from 'react-redux';

// import { updateSong, deleteSong } from '../../actions/song_actions';
import UserSongs from './user';
import { fetchSongs } from '../../actions/song_actions';

const mapStateToProps = (state) => {
    debugger
    return ({
        currentUserId: state.session.currentUserId,
        currentUser: state.entities.users[state.session.currentUserId],
        songs: state.entities.songs,
        users: state.entities.users
    }
    )
};

const mapDispatchToProps = dispatch => ({
    updateSong: song => dispatch(updateSong(song)),
    deleteSong: song => dispatch(deleteSong(song)),
    fetchSongs: data => dispatch(fetchSongs(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserSongs);