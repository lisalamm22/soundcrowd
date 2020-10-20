import { connect } from 'react-redux';
import Playbar from './playbar';
import { receiveCurrSong, receivePrevSong, receiveNextSong, playSong, pauseSong, pauseSong, receivePlaylist } from '../../actions/playbar_actions';

const mSTP = state => {
    return {
        currentSong: state.entities.songs[state.ui.playbar.currentSongId]
    };
};

const mDTP = dispatch => {
    return {
        receiveCurrSong: songId => dispatch(receiveCurrSong(songId)),
        receivePrevSong: songId => dispatch(receivePrevSong(songId)),
        receiveNextSong: songId => dispatch(receiveNextSong(songId)),
        playSong: () => dispatch(playSong()),
        pauseSong: () => dispatch(pauseSong()),
        receivePlaylist: songs => dispatch(receivePlaylist(songs))
    };
};

export default connect(mSTP, mDTP)(Playbar);