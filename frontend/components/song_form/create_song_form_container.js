import { connect } from 'react-redux';

import { createSong } from '../../actions/song_actions';
import CreateSongForm from './create_song_form';
import { fetchSongs } from '../../actions/song_actions';

const mapStateToProps = (state) => {
    return({
        currentUserId: state.session.currentUserId,
        currentUser: state.entities.users[state.session.currentUserId],
        songs: state.entities.songs,
        // song: {
        //     title: '',
        //     artist_id: state.session.currentUserId,
        //     genre: 'none',
        //     description: 'Describe your track',
        //     imageURL: '',
        //     imagePrev: '',
        //     audioURL: '',
        //     audio: false,
        // },
        formType: 'Create Song',

        
    }
)};

const mapDispatchToProps = dispatch => ({
    processForm: song => dispatch(createSong(song)),
    fetchSongs: data => dispatch(fetchSongs(data))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateSongForm);