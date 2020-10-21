import { connect } from 'react-redux';
import Playbar from './playbar';
import { receiveCurrSong, receivePrevSong, receiveNextSong, playSong, pauseSong, receivePlaylist } from '../../actions/playbar_actions';

const mSTP = state => {
    return {
        songs: state.entities.songs,
        currentSong: state.entities.songs[state.ui.playbar.currentSongId],
        playing: state.ui.playbar.playing,
        prevSongs: state.ui.playbar.prevSongs,
        nextSongs: state.ui.playbar.nextSongs
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

export default connect(mSTP, mDTP)(Playbar);