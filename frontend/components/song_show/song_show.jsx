import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import SongShowHeader from './song_show_header'
import SongShowBody from './song_show_body'

class SongShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

        this.props.fetchSong(this.props.match.params.songId);
    }

    render() {
        let checkSong;
        (this.props.song) ? checkSong = this.props.song : checkSong = null

        return (
            (!checkSong) ? <div><Redirect to="/discover"/></div> : (
                <div>
                    <SongShowHeader song={checkSong}/>
                    <SongShowBody song={checkSong} deleteSong={this.props.deleteSong}
                        currentUserId={this.props.currentUserId}/>
                </div>
            )
        )
    }
}

export default SongShow