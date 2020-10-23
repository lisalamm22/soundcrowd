import React from 'react';
import PlayButton from '../play_button/play_button_container'

class SplashSongItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {song} = this.props
        console.log(song)
        return (<li className="splash-song-item">
            <div className="splash-song-play"><PlayButton songId={song.id}/></div>
            <img src={song.imageURL} className="splash-song-img" />
            <span className="splash-song-title">{song.title}</span>
            <span className="splash-song-artist">{song.artist.username}</span>
        </li>)
    }
}

export default SplashSongItem