import React from 'react';
import {Link} from 'react-router-dom'

class SongFormItem extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        const {artist, song} = this.props
        console.log(artist)
        console.log(song)
        return(
            <div className="song-form-item">
                <img src={song.imageURL} className="uploaded-song-img"/>
                <ul className="uploaded-song-det">
                    <div>
                        <li>Artist: {artist.username}</li>
                        <li>Title: {song.title}</li>
                    </div>
                    <div>
                        <p>Upload complete.</p>
                        <Link to={`/songs/${song.id}`}>Go to your track</Link>
                    </div>
                </ul>
            </div>
        )
    }
}

export default SongFormItem