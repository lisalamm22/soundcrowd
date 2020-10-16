import { connect } from 'react-redux';

import { createSong } from '../../actions/song_actions';
import SongForm from './song_form';

const mapStateToProps = (state, {song}) => ({
    currentUserId: state.session.currentUserId
});

const mapDispatchToProps = dispatch => ({
    createSong: song => dispatch(createSong(song))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SongForm);