import React from 'react';
import { Link } from 'react-router-dom';

class SongIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const {song} = this.props
        return (
            <li className="song-index-item">
                <img src={song.imageURL} className="song-index-img"/>
                <p>{song.title}</p>
                <p>{song.artist.username}</p>
            </li>
        )
    }
}

export default SongIndexItem