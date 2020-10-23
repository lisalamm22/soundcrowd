import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import ListeningHistory from './listening_history';
// import { receiveCurrSong, receivePrevSong, receiveNextSong, playSong, pauseSong, receivePlaylist } from '../../actions/playbar_actions';

const mSTP = state => {
    return {
        songs: state.entities.songs,
        currentSong: state.entities.songs[state.ui.playbar.currentSongId],
        prevSongs: state.ui.playbar.prevSongs,
    };
};

// const mDTP = dispatch => {
//     return {
//     };
// };

export default withRouter(connect(mSTP)(ListeningHistory));