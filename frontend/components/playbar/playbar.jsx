import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {formatSongTime } from '../../util/playbar_util';
import { Link } from 'react-router-dom';

class Playbar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            songLength: 0,
            songPlayed: 0,
            volume: 0.05,
        }
        this.getSongLength = this.getSongLength.bind(this);
        this.handlePlay = this.handlePlay.bind(this);
        this.handleSongPlay = this.handleSongPlay.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        this.handleScrubbing = this.handleScrubbing.bind(this);
        this.handleRepeat = this.handleRepeat.bind(this);
        this.handleVolume = this.handleVolume.bind(this);
    }

    componentDidMount(){
        const playbar = document.getElementById('audio');
        playbar.volume = 0.05;
        setTimeout(()=>this.props.receivePlaylist(this.props.songs),1000);
    }

    getSongLength() {
        const playbar = document.getElementById('audio');
        this.setState({ songLength: playbar.duration })
    }

    handlePlay(){
        const playbar = document.getElementById('audio');
        if(this.props.playing){
            clearInterval(this.songPlay);
            this.props.pauseSong();
            playbar.pause();
        }
        else{
            this.props.playSong();
            playbar.play();
        }
    }

    handleSongPlay(){
        const playbar = document.getElementById('audio');
        const scrubber = document.getElementById('scrubber');

        if(!playbar.paused){
            this.songPlay = setInterval(()=>{
                scrubber.value = playbar.currentTime;
                this.setState({ songPlayed: playbar.currentTime})
            },50);
        }
    }

    handleNext(){
        const playbar = document.getElementById('audio');
        this.props.receivePrevSong(this.props.currentSong.id);
        if(this.props.nextSongs.length > 0){
            this.props.receiveCurrSong(this.props.nextSongs.shift());
            this.props.playSong();
            playbar.play();
        }
        else if(this.props.playlist.length > 0){
            this.props.receiveCurrSong(this.props.playlist.shift());
            this.props.playSong();
            playbar.play();
        }
        // this.props.playSong();
        this.setState({songPlayed: 0})
    }

    handlePrev(){
        const playbar = document.getElementById('audio')
        if(this.props.prevSongs.length > 0){
            this.props.receiveNextSong(this.props.currentSong.id);
            this.props.receiveCurrSong(this.props.prevSongs.pop());
        }
        else{
            playbar.currentTime = 0;
            this.props.playSong();
            playbar.play();
            this.setState({songPlayed: 0});
        }
    }

    handleScrubbing(e){
        const playbar = document.getElementById('audio');
        playbar.currentTime = e.target.value;
        this.setState({ songPlayed: e.target.value });
    }

    handleRepeat(){
        this.props.receiveNextSong(this.props.currentSong.id);
        // this.props.receivePrevSong(this.props.currentSong.id);
    }

    handleVolume(e){
        const playbar = document.getElementById('audio');
        playbar.volume = e.target.value / 1000.0;
        this.setState({ volume: e.target.value/1000.0 })
    }

    render(){
        let volumeIcon;
        if(this.state.volume === 0){
            volumeIcon = <FontAwesomeIcon icon="volume-mute" />
        }
        else if(this.state.volume < 0.5){
            volumeIcon = <FontAwesomeIcon icon="volume-down" />
        }
        else{
            volumeIcon = <FontAwesomeIcon icon="volume-up" />
        }
        const {currentSong, artist, playing} = this.props
        const songURL = currentSong ? currentSong.audioURL : null
        const playbar = currentSong ? 
        <div className = "playbar">
            <div>
            <div className="playbar-controls">
                <button className="playbar-prev"
                    onClick={this.handlePrev}>
                    <FontAwesomeIcon icon="step-backward" /></button>
                {this.props.playing ? 
                    <button className="playbar-pause"
                        onClick={this.handlePlay}>
                        <FontAwesomeIcon icon="pause"/></button> :
                    <button className="playbar-play"
                        onClick={this.handlePlay}>
                        <FontAwesomeIcon icon="play"/></button> 
                }
                <button className="playbar-next"
                    onClick={this.handleNext}>
                    <FontAwesomeIcon icon="step-forward"/></button>
                <button className="playbar-shuffle">
                    <FontAwesomeIcon icon="random"/></button>
                <button className="playbar-repeat"
                    onClick={this.handleRepeat}>
                    <FontAwesomeIcon icon="redo-alt"/></button>
            </div>
            <div className="playbar-scrub">
                <p>{formatSongTime(this.state.songPlayed)}</p>
                <input type="range" id="scrubber" min='0' max={this.state.songLength}
                    onInput={this.handleScrubbing} className="slider"/>
                <p>{formatSongTime(this.state.songLength)}</p>
                <button className="playbar-volume">
                    <input type="range" 
                    min="0.0" 
                    defaultValue={this.state.volume*1000}
                    max = "1000.0"
                    onChange={this.handleVolume} />
                {volumeIcon}</button>
            </div>
            <div className="playbar-song-info">
                <Link to={`/songs/${currentSong.id}`}><img src={currentSong.imageURL}/> </Link>
                <div>
                    <Link to={`/users/${currentSong.artist_id}`}>{currentSong.artist.username}</Link>
                    <Link to={`/songs/${currentSong.id}`}>{currentSong.title}</Link>
                </div>
            </div>
        </div>
        </div> 
        : null;
        return(
            <>
                <audio id="audio"
                    src={songURL}
                    controls
                    controlsList="nodownload"
                    onLoadedMetadata={this.getSongLength}
                    onPlaying={this.handleSongPlay}
                    onEnded={this.handleNext}
                    // crossOrigin="anonymous"
                ></audio>
                {playbar}
            </>
        )
    }
}

export default Playbar