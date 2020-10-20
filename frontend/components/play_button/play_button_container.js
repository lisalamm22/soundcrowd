import { connect } from 'react-redux';
import PlayButton from './play_button';
import { receiveCurrentSong, playSong, pauseSong, receivePreviousSong } from '../../actions/playbar_actions';

const mSTP = state => {
    return {
        playing: state.ui.playbar.playing,
        currentSong: state.entities.songs[state.ui.playbar.currentSongId]
    };
};

const mDTP = dispatch => {
    return {
        receiveCurrentSong: songId => dispatch(receiveCurrentSong(songId)),
        receivePreviousSong: songId => dispatch(receivePreviousSong(songId)),
        playSong: () => dispatch(playSong()),
        pauseSong: () => dispatch(pauseSong()),
    };
};

export default connect(mSTP, mDTP)(PlayButton);