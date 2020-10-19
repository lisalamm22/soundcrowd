import { connect } from 'react-redux';
import SongShow from './song_show';
import { fetchSong, deleteSong } from '../../actions/song_actions';


const mSTP = (state, ownProps) => {
    return ({
        song: state.entities.songs[ownProps.match.params.songId],
        currentUserId: state.session.currentUserId,
    })
}

const mDTP = (dispatch) => {
    return ({
        fetchSong: (songId) => {
            return dispatch(fetchSong(songId))
        },
        deleteSong: (songId) => {
            return dispatch(deleteSong(songId))
        },
    })
}

export default connect(mSTP, mDTP)(SongShow)