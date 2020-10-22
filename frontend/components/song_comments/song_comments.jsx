import React from 'react';
import SongCommentItem from './song_comment_item'

class SongComments extends React.Component{
    constructor(props){
        super(props)
    }



    render(){
        const { comments, users } = this.props
        debugger
        return(
            <div>
                <ul>
                    {Object.values(comments).map((comment, idx) => {
                        return <SongCommentItem key={idx} 
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