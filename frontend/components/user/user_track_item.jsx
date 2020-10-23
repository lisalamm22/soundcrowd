import React from 'react';
import { Link } from 'react-router-dom';
import PlayButtonContainer from '../play_button/play_button_container';
import CreateCommentFormContainer from '../comment_form/create_comment_form_container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class UserTrackItem extends React.Component {
    constructor(props) {
        super(props)    // song, user, currentUserId , need deleteSong f

        this.handleDelete = this.handleDelete.bind(this);
        this.timeDiff = this.timeDiff.bind(this);
    }

    handleDelete() {
        this.props.deleteSong(this.props.song.id);
    }

    timeDiff() {
        const now = new Date();
        let years = now.getUTCFullYear() - this.props.song.created_at.slice(0, 4);
        let months = now.getUTCMonth() + 1 - this.props.song.created_at.slice(5, 7);
        let days = now.getUTCDate() - this.props.song.created_at.slice(8, 10);
        let hours = now.getUTCHours() - this.props.song.created_at.slice(11, 13);
        let minutes = now.getUTCMinutes() - this.props.song.created_at.slice(14, 16);
        let seconds = now.getUTCSeconds() - this.props.song.created_at.slice(17, 19);
        if (years > 0) {
            return <p>{`${years} years ago`}</p>
        }
        else if (months > 0) {
            return <p>{`${months} months ago`}</p>
        }
        else if (days > 7) {
            return <p>{`${Math.floor(days / 7)} weeks ago`}</p>
        }
        else if (days > 0) {
            return <p>{`${days} days ago`}</p>
        }
        else if (hours > 0) {
            return <p>{`${hours} hours ago`}</p>
        }
        else if (minutes > 0) {
            return <p>{`${minutes} minutes ago`}</p>
        }
        else if (seconds > 0) {
            return <p>{`${seconds} seconds ago`}</p>
        }
        else {
            return <p>{`just created`}</p>
        }
    }

    render() {
        const { user, song, currentUserId } = this.props
        return (
            <div className="user-track">
                <img src={song.imageURL} className="user-track-img" />
                <div>
                <ul className="user-songs">
                    <div className="user-song-info">
                        <div className="user-song-play">
                            <PlayButtonContainer songId={song.id}/></div>
                        <div>
                            <Link to={`/songs/${user.id}`}>{user.username}</Link>
                            <Link to={`/songs/${song.id}`}>{song.title}</Link>
                        </div>
                    </div>
                    <span>{this.timeDiff()}</span>

                </ul>
                <div className="user-song-actions"><CreateCommentFormContainer />
                <nav>
                    {user.id === currentUserId ? 
                    <button onClick={()=> <Redirect to={`/songs/${song.id}/edit`}/>} 
                        className='user-track-item-edit'>
                        <FontAwesomeIcon icon="pencil-alt" />Edit</button> : null}
                    {user.id === currentUserId ? 
                    <button onClick={this.handleDelete} className='user-track-item-edit'>
                        <FontAwesomeIcon icon="trash" />Delete</button> : null}
                </nav></div>
            </div>
            </div>
        )
    }
}

export default UserTrackItem