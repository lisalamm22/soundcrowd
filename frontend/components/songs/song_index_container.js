import { connect } from 'react-redux';
import SongIndex from './song_index';
import { fetchSongs } from '../../actions/song_actions';


const mSTP = (state) => {
    return ({
        songs: Object.values(state.entities.songs)
    })
}

const mDTP = (dispatch) => {
    return ({
        fetchSongs: () => {
            return dispatch(fetchSongs())
        },
    })
}

export default connect(mSTP, mDTP)(SongIndex)