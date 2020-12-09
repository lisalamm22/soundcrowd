import React from 'react';
import { Link } from 'react-router-dom';
import PlayButtonContainer from '../play_button/play_button_container'
import PlayButton from '../play_button/play_button';

class ListeningHistory extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        // if(this.props.prevSongs.length === 0){return null}
        // let prevSongsRev = this.props.prevSongs.reverse()
        // console.log(prevSongsRev)
        const playedSongs = this.props.prevSongs.map((songId, idx)=>{
            let song = this.props.songs[songId]
            if(song){
            return (<li key={idx} className="listening-history-item">
                <div className="listening-history-play">
                    <PlayButtonContainer songId={song.id} />
                </div>
                <Link to={`/songs/${song.id}`}><img src={song.imageURL} className="song-img-small" /></Link>
                <div className="listening-history-info">
                    <Link to={`/users/${song.artist_id}`}>{song.artist.username}</Link>
                    <Link to={`/songs/${song.id}`}>{song.title}</Link>
                </div>
            </li>)}
        })
        return(
            <div className="listening-history">
                <div className="listening-header-grp">
                    <h5>Listening History </h5>
                    <Link to="/library">View All</Link>
                </div>
                {playedSongs}
            </div>
        )
    }
}

export default ListeningHistory

