import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

class SongCommentItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this);
        this.timeDiff = this.timeDiff.bind(this);
    }

    handleDelete(){
        this.props.deleteComment(this.props.comment.id);
    }

    timeDiff() {
        const now = new Date();
        let years = now.getUTCFullYear() - this.props.comment.created_at.slice(0, 4);
        let months = now.getUTCMonth() + 1 - this.props.comment.created_at.slice(5, 7);
        let days = now.getUTCDate() - this.props.comment.created_at.slice(8, 10);
        let hours = now.getUTCHours() - this.props.comment.created_at.slice(11, 13);
        let minutes = now.getUTCMinutes() - this.props.comment.created_at.slice(14, 16);
        let seconds = now.getUTCSeconds() - this.props.comment.created_at.slice(17, 19);
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
        const profilePic = this.props.author.photoURL ?
            <img src={this.props.author.photoURL} className="comment-img"/> :
            <div className="comment-img">profile pic placeholder</div>
        return (
            <li className="comment-item">
                <div>
                    {profilePic}
                    <div className="comment-body">
                        <Link to={`/users/${this.props.author.id}`} >{this.props.author.username}</Link>
                        <span>{this.props.comment.body}</span>
                    </div>
                </div>
                <div className="comment-more">
                    <span>{this.timeDiff()}</span>
                    {this.props.author.id === this.props.currentUserId ? 
                    <button onClick={this.handleDelete} className='comment-item-delete'>
                    <FontAwesomeIcon icon="trash" /></button> : null}
                    
                </div>
            </li>
        )
    }
}

export default SongCommentItem