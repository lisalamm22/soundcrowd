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
                <Link to={`/songs/${song.id}`}><img src={song.imageURL} className="song-index-img"/></Link>
                <Link to={`/songs/${song.id}`}>{song.title}</Link>
                <Link to={`/users/${song.artist_id}`}>{song.artist.username}</Link>
            </li>
        )
    }
}

export default SongIndexItem