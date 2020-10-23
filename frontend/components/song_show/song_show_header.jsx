import React from 'react';
import {Link} from 'react-router-dom';
import PlayButtonContainer from '../play_button/play_button_container'

class SongShowHeader extends React.Component{
    constructor(props){
        super(props)
        this.timeDiff = this.timeDiff.bind(this)
    }

    timeDiff(){
        const now = new Date();
        let years = now.getUTCFullYear() - this.props.song.created_at.slice(0,4);
        let months = now.getUTCMonth() + 1 - this.props.song.created_at.slice(5,7);
        let days = now.getUTCDate() - this.props.song.created_at.slice(8,10);
        let hours = now.getUTCHours() - this.props.song.created_at.slice(11,13);
        let minutes = now.getUTCMinutes() - this.props.song.created_at.slice(14,16);
        if(years > 0){
            return <p>{`${years} years ago`}</p>
        }
        else if (months > 0){
            return <p>{`${months} months ago`}</p>
        }
        else if (days > 7){
            return <p>{`${Math.floor(days/7)} weeks ago`}</p>
        }
        else if (days > 0){
            return <p>{`${days} days ago`}</p>
        }
        else if (hours > 0){
            return <p>{`${hours} hours ago`}</p>
        }
        else if (minutes > 0){
            return <p>{`${minutes} minutes ago`}</p>
        }
        else {
            return <p>{`just created`}</p>
        }
    }

    render(){
        const {song} = this.props
        return(
            <div className="song-show-header">
                <div className="song-show-head-left">
                    <PlayButtonContainer songId={song.id}/>
                    <div>
                        <Link to={`/users/${song.artist_id}`} >{song.artist.username}</Link>
                        <h2>{song.title}</h2>
                    </div>
                </div>
                <div className="song-show-head-right">
                {this.timeDiff()}
                <img src={song.imageURL} className="song-show-track-img" />
                </div>
            </div>
        )
    }
}

export default SongShowHeader