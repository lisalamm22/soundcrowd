import { connect } from 'react-redux';
import Splash from './splash';
import { openModal } from '../../actions/modal_actions';
import { fetchSongs } from '../../actions/song_actions'

const mapStateToProps = ({ entities, session }) => ({
    currentUser: entities.users[session.currentUserId],
    songs: entities.songs,
});

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    fetchSongs: data => dispatch(fetchSongs(data)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Splash)