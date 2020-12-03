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
            console.log(likeId)
            let like = this.props.likes[likeId]
            if(like.song_id === this.props.song.id 
                && like.liker_id === this.props.currentUserId){
                    thisLike = likeId
                }
        })
        return thisLike
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
        return (
            <button id="like-btn" className="like-btn" onClick={this.handleClick}>{buttonIcon}</button>
        )
    }
}

export default LikeButton