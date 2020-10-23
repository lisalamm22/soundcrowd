import { connect } from 'react-redux';
import Stream from './stream';
import { fetchSongs, deleteSong } from '../../actions/song_actions';


const mSTP = (state) => {
    return ({
        songs: Object.values(state.entities.songs),
        currentUserId: state.session.currentUserId,
    })
}

const mDTP = (dispatch) => {
    return ({
        fetchSongs: (data) => {
            return dispatch(fetchSongs(data))
        },
        deleteSong: songId => dispatch(deleteSong(songId))
    })
}

export default connect(mSTP, mDTP)(Stream)