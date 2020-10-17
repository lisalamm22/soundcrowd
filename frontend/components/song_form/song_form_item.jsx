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
            <dt>
                <dd>Artist{artist.username}</dd>
                <dd>Title{song.title}</dd>
                <dd>Image{song.imageURL}</dd>
                <Link to={`/api/songs/${song.id}`}/>
            </dt>
        )
    }
}

export default SongFormItem