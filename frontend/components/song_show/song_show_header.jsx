import React from 'react';
import {Link} from 'react-router-dom'

class SongShowHeader extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {song} = this.props
        return(
            <div className="song-show-header">
                <div className="song-show-det">
                    <Link to={`/user/${song.artist_id}`} >{song.artist.username}</Link>
                    <h2>{song.title}</h2>
                </div>
                <img src={song.imageURL} className="song-show-track-img" />
                
            </div>
        )
    }
}

export default SongShowHeader