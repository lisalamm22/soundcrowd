import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'

class LikeButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            like : false,
        }
        this.handleClick = this.handleClick.bind(this)
        this.findLike = this.findLike.bind(this)
        this.countLikes = this.countLikes.bind(this)
    }

    componentDidUpdate(prevProps){
        if(prevProps.likes !== this.props.likes){
            if(this.findLike()){
                this.setState({like: true})
            }
        }
    }

    findLike(){
        let thisLike = null;
        Object.keys(this.props.likes).forEach(likeId => {
            let like = this.props.likes[likeId]
            if(like.song_id === this.props.song.id 
                && like.liker_id === this.props.currentUserId){
                    thisLike = likeId
                }
        })
        return thisLike
    }
    countLikes(){
        let count = 0;
        Object.keys(this.props.likes).forEach(likeId => {
            let like = this.props.likes[likeId]
            if(like.song_id === this.props.song.id){
                    count += 1
                }
        })
        return count
    }

    handleClick(){
        if(!this.state.like){
            this.props.createLike({
                song_id : this.props.song.id, 
                liker_id : this.props.currentUserId
            })
        }
        else{
            this.props.deleteLike(this.findLike())
        }
        this.setState({like: !this.state.like})
        
    }

    render() {
        const buttonIcon = this.state.like ?
            <FontAwesomeIcon className="liked-icon" icon="heart" />
            : <FontAwesomeIcon className="not-liked-icon" icon={farHeart}  />
        // const buttonText = this.props.page === "stream" ?
        //     this.countLikes() : "Like"
        let buttonText = "";
        if(this.props.page === "stream"){
            buttonText = this.countLikes()
        }
        else if( this.props.page === "song"){
            buttonText = "Like"
        }
        
        return (
        <button id="like-btn" className="like-btn" onClick={this.handleClick}>{buttonIcon} {buttonText}</button>
        )
    }
}

export default LikeButton