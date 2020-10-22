import React from 'react';
import SongCommentItem from './song_comment_item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class SongComments extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const { comments, users } = this.props
        return(
            <div className="song-comments">
                <p><FontAwesomeIcon icon="comment-alt" />{` ${Object.values(comments).length} comments`}</p>
                <ul>
                    {Object.values(comments).map((comment, idx) => {
                        return <SongCommentItem key={idx} 
                            currentUserId={this.props.currentUserId}
                            comment={comment}
                            author = {users[comment.author_id]}
                            deleteComment={this.props.deleteComment} />
                    })}
                </ul>
            </div>
        )
    }
}

export default SongComments