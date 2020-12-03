import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CreateCommentFormContainer from '../comment_form/create_comment_form_container'
import SongCommentsContainer from '../song_comments/song_comments_container';
import LikeButtonContainer from '../like_button/like_button_container'

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
        ) : options = (<nav>
                <LikeButtonContainer song={song}/>
            </nav>)
        console.log(options)
        return (
            <div className="song-show-body">
                <CreateCommentFormContainer />
                {options}
                <div>
                    <section className="song-show-left">
                        <img src={song.artist.photoURL} className="song-show-artist-img" />
                        <h5>{song.artist.username}</h5>
                    </section>
                    <section className='song-show-right'>
                        <section className="song-description">{song.description}</section>
                        <SongCommentsContainer />
                    </section>
                </div>

            </div>
        )
    }
}

export default SongShowBody