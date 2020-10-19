import React from 'react';
import { Link } from 'react-router-dom';
import SongShowHeader from './song_show_header'

class SongShow extends React.Component {
    constructor(props) {
        super(props)
        this.deleteTrack = this.deleteTrack.bind(this)
    }

    componentDidMount() {
        // debugger
        this.props.fetchSong(this.props.match.params.songId);
    }

    deleteTrack(){
        this.props.deleteSong(this.props.match.params.songId)
    }

    render() {
        // debugger
        let checkSong;
        (this.props.song) ? checkSong = this.props.song : checkSong = null

        return (
            (!checkSong) ? <div>no song yet</div> : (
                <div>
                    <SongShowHeader song={checkSong}/>
                    <p><Link to={`/songs/${checkSong.id}/edit`}>Edit</Link></p>
                    <button onClick={this.deleteTrack}>Delete Track</button>
                    
                </div>
            )
        )
    }
}

export default SongShow