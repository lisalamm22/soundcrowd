import { connect } from 'react-redux';
import SongShow from './song_show';
import { fetchSong } from '../../actions/song_actions';


const mSTP = (state, ownProps) => {
    return ({
        song: state.entities.songs[ownProps.match.params.songId]
    })
}

const mDTP = (dispatch) => {
    return ({
        fetchSong: (songId) => {
            debugger
            return dispatch(fetchSong(songId))
        },
    })
}

export default connect(mSTP, mDTP)(SongShow)