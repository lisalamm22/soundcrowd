import React from 'react';
import SongShow from './song_show';

class SongShowHeader extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {song} = this.props
        debugger
        return(
            <div className="song-show-header">
                <h3>{song.artist.username}</h3>
                <h2>{song.title}</h2>
                <img src={song.imageURL} className="song-show-track-img" />
                <img src={song.artist.photoURL} className="show-show-artist-img"/>
            </div>
        )
    }
}

export default SongShowHeader