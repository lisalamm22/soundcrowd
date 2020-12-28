import { connect } from 'react-redux';
import Library from './library';
import { fetchSongs, deleteSong } from '../../actions/song_actions';


const mSTP = (state) => {
    return ({
        songs: Object.values(state.entities.songs),
        likes: Object.values(state.entities.likes),
        prevSongs: state.ui.playbar.prevSongs,
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

export default connect(mSTP, mDTP)(Library)