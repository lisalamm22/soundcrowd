import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PlayButton from './play_button';
import { receiveCurrSong, playSong, pauseSong, receivePrevSong } from '../../actions/playbar_actions';

const mSTP = state => {
    return {
        playing: state.ui.playbar.playing,
        // currentSong: state.entities.songs[state.ui.playbar.currentSongId],
        currentSongId: state.ui.playbar.currentSongId,
    };
};

const mDTP = dispatch => {
    return {
        receiveCurrSong: songId => dispatch(receiveCurrSong(songId)),
        receivePrevSong: songId => dispatch(receivePrevSong(songId)),
        playSong: () => dispatch(playSong()),
        pauseSong: () => dispatch(pauseSong()),
    };
};

export default withRouter(connect(mSTP, mDTP)(PlayButton));