import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class PlayButton extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        const playbar = document.getElementById('audio')
        if(this.props.playing && this.props.currentSongId === this.props.songId){
            this.props.pauseSong();
            playbar.pause();
        }
        else if(!this.props.playing && this.props.currentSongId === this.props.songId){
            this.props.playSong();
            playbar.play();
        }
        else{
            this.props.receivePrevSong(this.props.currentSongId);
            this.props.receiveCurrSong(this.props.songId);
            localStorage.setItem('currentSongId', this.props.songId)
            this.props.playSong();
            playbar.setAttribute("autoPlay", "");
            playbar.play();
        }
    }

    render() {
        const buttonIcon = (this.props.playing && this.props.currentSongId === this.props.songId) ?
            <FontAwesomeIcon className="pause-icon" icon="pause" />
            : <FontAwesomeIcon className="play-icon" icon="play" />
        return (
            <button id="play-btn" className="play-btn" onClick={this.handleClick}>{buttonIcon}</button>
        )
    }
}

export default PlayButton