import React from 'react';

class CreateCommentForm extends React.Component{
    constructor(props){
        super(props)

        this.state={
            body: '',
            author_id: this.props.currentUserId,
            song_id: this.props.match.params.songId,
        }

    }

    handleChange(field){
        return (e) => {
            this.setState({ [field]: e.target.value })
        };
    }

    handleSubmit(){
        this.props.createComment(this.state);
        this.setState({
            body: '',
            author_id: this.props.currentUserId,
            song_id: this.props.match.params.songId,
        })
    }

    render(){
        console.log(this.props)
        return(
            <div className="create-comment">
                <img src={this.props.currentUser.photoURL}/>
                <form onKeyPress={
                    e => {
                        if(e.key === 'Enter'){
                            e.preventDefault();
                            this.handleSubmit();
                        }
                    }
                }>
                    <input 
                    type="text" 
                    className="comment-form-input"
                    placeholder="Write a comment"
                    value={this.state.body}
                    onChange={this.handleChange('body')}/>
                </form>
            </div>
        )
    }
}

export default CreateCommentForm