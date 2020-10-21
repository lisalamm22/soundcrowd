import { connect } from 'react-redux';
import { withRouter } from  'react-router-dom'
import Playbar from './playbar';
import { receiveCurrSong, receivePrevSong, receiveNextSong, playSong, pauseSong, receivePlaylist } from '../../actions/playbar_actions';

const mSTP = state => {
    return {
        songs: state.entities.songs,
        currentSong: state.entities.songs[state.ui.playbar.currentSongId],
        playing: state.ui.playbar.playing,
        prevSongs: state.ui.playbar.prevSongs,
        nextSongs: state.ui.playbar.nextSongs,
        playlist: state.ui.playbar.playlist,
    };
};

const mDTP = dispatch => {
    return {
        receiveCurrSong: songId => dispatch(receiveCurrSong(songId)),
        receivePrevSong: songId => dispatch(receivePrevSong(songId)),
        receiveNextSong: songId => dispatch(receiveNextSong(songId)),
        receivePlaylist: songs => dispatch(receivePlaylist(songs)),
        playSong: () => dispatch(playSong()),
        pauseSong: () => dispatch(pauseSong()),
    };
};

export default withRouter(connect(mSTP, mDTP)(Playbar));