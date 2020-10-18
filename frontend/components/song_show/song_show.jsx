import React from 'react';
import { Link } from 'react-router-dom';

class SongShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // debugger
        this.props.fetchSong(this.props.match.params.songId);
    }

    render() {
        // debugger
        let checkSong;
        (this.props.song) ? checkSong = this.props.song : checkSong = null

        return (
            (!checkSong) ? <div>no song</div> : (
                <p><Link to={`/songs/${checkSong.id}/edit`}>Edit Song</Link></p>
            )
        )
    }
}

export default SongShow