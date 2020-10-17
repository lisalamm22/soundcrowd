import { connect } from 'react-redux';

import { createSong } from '../../actions/song_actions';
import SongForm from './song_form';
import { fetchSongs } from '../../actions/song_actions';

const mapStateToProps = (state) => {
    return({
        currentUserId: state.session.currentUserId,
        songs: state.entities.songs
    }
)};

const mapDispatchToProps = dispatch => ({
    createSong: song => dispatch(createSong(song)),
    fetchSongs: data => dispatch(fetchSongs(data))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SongForm);