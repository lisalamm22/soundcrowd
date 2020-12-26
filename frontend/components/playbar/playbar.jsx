import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {formatSongTime } from '../../util/playbar_util';
import { Link } from 'react-router-dom';
import LikeButtonContainer from '../like_button/like_button_container';
// import { receiveNextSong } from '../../actions/playbar_actions';

class Playbar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            songLength: 0,
            songPlayed: 0,
            volume: 0.5,
            mute: false,
            dropdown: false,
        }
        this.getSongLength = this.getSongLength.bind(this);
        this.handlePlay = this.handlePlay.bind(this);
        this.handleSongPlay = this.handleSongPlay.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        this.handleScrubbing = this.handleScrubbing.bind(this);
        this.handleRepeat = this.handleRepeat.bind(this);
        this.handleVolume = this.handleVolume.bind(this);
        this.handleMute = this.handleMute.bind(this);
        this.handleNextList = this.handleNextList.bind(this);
        this.handleLike = this.handleLike.bind(this)
        this.handleAddNext = this.handleAddNext.bind(this)
        this.handleRemoveNext = this.handleRemoveNext.bind(this)
    }

    componentDidMount(){
        const playbar = document.getElementById('audio');
        playbar.volume = 0.5;
        this.props.receivePlaylist(this.props.songs);
    }

    componentDidUpdate(prevProps){
        if(this.props.nextSongs !== prevProps.nextSongs
            || this.props.playlist !== prevProps.playlist){
                this.setState({});
        }
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

        if(!playbar.paused && this.props.currentSong){
            this.songPlay = setInterval(()=>{
                scrubber.value = playbar.currentTime;
                this.setState({ songPlayed: playbar.currentTime})
            },50);
        }
    }

    handleNext(){
        const playbar = document.getElementById('audio');
        let nextSongId;
        playbar.pause();
        if(this.props.currentSong){
            this.props.receivePrevSong(this.props.currentSong.id);
        }
        if(this.props.nextSongs.length > 0){
            nextSongId = this.props.nextSongs.shift();
            this.props.receiveCurrSong(nextSongId);
            localStorage.setItem('currentSongId', nextSongId);
            this.setState({songPlayed: 0}, () => {
                this.props.playSong();
                playbar.currentTime = 0;
                playbar.play();
            })
        }
        else if(this.props.playlist.length > 0){
            nextSongId = this.props.playlist.shift();
            this.props.receiveCurrSong(nextSongId);
            localStorage.setItem('currentSongId', nextSongId);
            this.setState({songPlayed: 0}, () => {
                this.props.playSong();
                playbar.currentTime = 0;
                playbar.play();
            })
        }
        else{
            playbar.currentTime = 0;
            this.props.removeCurrSong();
            this.setState({songPlayed : 0}, ()=> {})
        }
    }

    handlePrev(){
        const playbar = document.getElementById('audio')
        if(this.props.prevSongs.length > 0){
            this.props.receiveNextSong(this.props.currentSong.id);
            
            let prevSongId = this.props.prevSongs.shift() 
            this.props.receiveCurrSong(prevSongId);
            localStorage.setItem('currentSongId', prevSongId);
            this.setState({songPlayed: 0}, () => {
                this.props.playSong();
                playbar.play();
            })
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
        this.setState({ volume: e.target.value/1000.0, mute: false })
    }

    handleMute(){
        const playbar = document.getElementById('audio');
        if(!this.state.mute){
            playbar.volume = 0;
        }
        else{
            playbar.volume = this.state.volume
        }
        this.setState({ mute: !this.state.mute })
    }

    handleNextList(e){
        if(e.target.dataset.icon === "list" || e.target.dataset.icon === "times"){
            let newState = !this.state.dropdown;
            this.setState({ dropdown: newState });
        }
    }

    handleLike(){
        console.log("liked!")
    }
    handleAddNext(e){
        this.props.receiveNextSong(parseInt(e.currentTarget.value,10))
        
    }
    handleRemoveNext(e){
        let listIdx = parseInt(e.currentTarget.value,10)
        const nextSongsLen = this.props.nextSongs.length
        if(listIdx<nextSongsLen){
            this.props.removeNextSong(listIdx)
        }
        else{
            this.props.removePlaylistSong(listIdx-nextSongsLen)
        }
    }

    render(){
        // if(!this.props.prevSongs){return null}
        let volumeIcon;
        if(this.state.volume === 0 || this.state.mute){
            volumeIcon = <FontAwesomeIcon icon="volume-mute" />
        }
        else if(this.state.volume < 0.5){
            volumeIcon = <FontAwesomeIcon icon="volume-down" />
        }
        else{
            volumeIcon = <FontAwesomeIcon icon="volume-up" />
        }
        const {currentSong, artist, playing} = this.props
        const prevSong = this.props.songs[this.props.prevSongs[this.props.prevSongs.length-1]] ? this.props.songs[this.props.prevSongs[this.props.prevSongs.length-1]] : null
        const songURL = currentSong ? currentSong.audioURL : null
        const currentSongInfo = currentSong ? 
            <div className="playbar-song-info">
                <Link to={`/songs/${currentSong.id}`}><img src={currentSong.imageURL}/> </Link>
                <div>
                    <Link to={`/users/${currentSong.artist_id}`}className="playbar-song-info-artist">{currentSong.artist.username}</Link>
                    <Link to={`/songs/${currentSong.id}`}className="playbar-song-info-title">{currentSong.title}</Link>
                </div>
            </div> : null
        const prevSongInfo = prevSong ?
            <div className="playbar-song-info">
                <Link to={`/songs/${prevSong.id}`}><img src={prevSong.imageURL}/> </Link>
                <div>
                    <Link to={`/users/${prevSong.artist_id}`} className="playbar-song-info-artist">{prevSong.artist.username}</Link>
                    <Link to={`/songs/${prevSong.id}`} className="playbar-song-info-title">{prevSong.title}</Link>
                </div>
            </div> : null
        const songInfo = currentSongInfo || prevSongInfo || <div></div>

        const nextList = this.props.nextSongs.concat(this.props.playlist).map((nextSongId,idx) => {
            let nextSong = this.props.songs[nextSongId]
            let listClass;
            if(idx<this.props.nextSongs.length){
                listClass = "next-list-item"
            }
            else{
                listClass = "playlist-item"
            }
            return <li key={idx} className={listClass}>
                <Link to={`/songs/${nextSong.id}`}><img src={nextSong.imageURL}/> </Link>
                <div className="next-list-item-info">
                    <Link to={`/users/${nextSong.artist_id}`} className="next-list-item-artist">{nextSong.artist.username}</Link>
                    <Link to={`/songs/${nextSong.id}`} className="next-list-item-title">{nextSong.title}</Link>
                </div>
                <div className="next-list-item-options">
                    {/* <button className="next-list-item-opt"
                        value={nextSongId}
                        onClick={this.handleLike}>
                        <FontAwesomeIcon icon="heart" /></button> */}
                    <LikeButtonContainer song={nextSong}/>
                    <button className="next-list-item-opt" 
                        value={nextSongId}
                        onClick={this.handleAddNext}>
                        <FontAwesomeIcon icon="plus"/></button>
                    <button className="next-list-item-opt"
                        value={idx}
                        onClick={this.handleRemoveNext}>
                        <FontAwesomeIcon icon="minus" /></button>
                </div>
            </li>
        })

        const nextUpList = nextList.length === 0 ? null : nextList

        const playbar = (currentSong || this.props.prevSongs.length > 0) ? 
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
                <div className="playbar-volume-container">
                    <button className="playbar-volume" 
                        onClick={this.handleMute}>
                        {volumeIcon}</button>
                    <input type="range"
                        min="0.0" 
                        defaultValue={this.state.volume*1000}
                        max = "1000.0"
                        onChange={this.handleVolume} />
                </div>
            </div>
            {songInfo}
            <div className="playbar-controls-right">
                {/* <button className="playbar-like"
                    onClick={this.handleLike}>
                    <FontAwesomeIcon icon="heart" /></button> */}
                    <LikeButtonContainer song={currentSong}/>
                <button className="playbar-follow"
                    onClick={this.handleFollow}>
                    <FontAwesomeIcon icon="user-plus"/></button>
                <div className={`playbar-list`} onClick={this.handleNextList}>
                    <FontAwesomeIcon icon="list"/> 
                    <div className={`next-list-dropdown-${this.state.dropdown}`} >
                        <div className="next-list-head">
                            <p className="next-list-head-p">Next up</p>
                            <button className="next-list-close"
                                onClick={this.handleNextList}>
                                <FontAwesomeIcon icon="times" /></button>
                        </div>
                        <ul className="next-list">{nextUpList}</ul>
                    </div>
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
                ></audio>
                {playbar}
            </>
        )
    }
}

export default Playbar