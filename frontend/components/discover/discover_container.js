import { connect } from 'react-redux';
import Discover from './discover';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchSongs } from '../../actions/song_actions';

const mapStateToProps = ({ entities, session }) => ({
    currentUser: entities.users[session.currentUserId],
    songs: Object.values(entities.songs),
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    fetchSongs: (data) => {
            return dispatch(fetchSongs(data))
        },
});

export default connect(mapStateToProps,mapDispatchToProps)(Discover);