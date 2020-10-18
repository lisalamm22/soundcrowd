import React from 'react';
import {Link} from 'react-router-dom'

//display image, artist, title, 'go to your track'

class SongFormItem extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        const {artist, song} = this.props
        console.log(artist)
        console.log(song)
        return(
            <dt className="song-form-item">
                <dd>Artist: {artist.username}</dd>
                <dd>Title: {song.title}</dd>
                <dd>Image:<img src={song.imageURL} /></dd>
                <span>Upload complete.</span>
                <Link to={`/songs/${song.id}`}>Go to your track</Link>
            </dt>
        )
    }
}

export default SongFormItem