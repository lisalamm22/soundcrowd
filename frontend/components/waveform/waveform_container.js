import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import WaveForm from './waveform';

const mSTP = state => {
    return {
        songs: state.entities.songs,
        playing: state.ui.playbar.playing,
        currentSongId: state.ui.playbar.currentSongId,
    };
};

const mDTP = dispatch => {
    return {
    };
};

export default withRouter(connect(mSTP, mDTP)(WaveForm));