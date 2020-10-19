import { connect } from 'react-redux';

import { fetchSong, updateSong } from '../../actions/song_actions';
import EditSongForm from './edit_song_form';

const mapStateToProps = (state, ownProps) => {
    // debugger
    return ({
        song: state.entities.songs[ownProps.match.params.songId],
        formType: 'Update Song'
    })
};

const mapDispatchToProps = dispatch => ({
    processForm: song => dispatch(updateSong(song)),
    fetchSong: songId => dispatch(fetchSong(songId)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditSongForm);