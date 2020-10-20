import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SongShowBody extends React.Component {
    constructor(props) {
        super(props)

        this.deleteTrack = this.deleteTrack.bind(this)
    }

    deleteTrack(){
        this.props.deleteSong(this.props.song.id);
        <Redirect to={`/user/${this.props.currentUserId}`}/>
    }

    render() {
        const { song } = this.props
        let options = null;
        this.props.currentUserId === song.artist_id ? options = (
            <nav className="song-show-body-op">
                <Link to={`/songs/${song.id}/edit`}><FontAwesomeIcon icon="pencil-alt" />Edit</Link>
                <a href="#" onClick={this.deleteTrack}><FontAwesomeIcon icon="trash" />Delete Track</a>
            </nav>
        ) : null
        return (
            <div className="song-show-body">
                {/* comment bar */}
                {options}
                <div>
                    <section className="song-show-left">
                        <img src={song.artist.photoURL} className="song-show-artist-img" />
                        <h5>{song.artist.username}</h5>
                    </section>
                {/* </div>
                <div> */}
                    <section className='song-show-right'>
                        {song.description}
                    </section>
                </div>

            </div>
        )
    }
}

export default SongShowBody