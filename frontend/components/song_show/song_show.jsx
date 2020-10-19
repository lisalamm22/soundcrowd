import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import SongShowHeader from './song_show_header'
import SongShowBody from './song_show_body'

class SongShow extends React.Component {
    constructor(props) {
        super(props)
        // this.deleteTrack = this.deleteTrack.bind(this)
    }

    componentDidMount() {
        // debugger
        this.props.fetchSong(this.props.match.params.songId);
    }

    // deleteTrack(){
    //     this.props.deleteSong(this.props.match.params.songId);
    //         // .then(() => this.props.history.push('/'));
    //     <Redirect to={`/user/${this.props.currentUserId}`}/>
    // }

    render() {
        debugger
        let checkSong;
        (this.props.song) ? checkSong = this.props.song : checkSong = null

        return (
            (!checkSong) ? <div>no song yet</div> : (
                <div>
                    <SongShowHeader song={checkSong}/>
                    <SongShowBody song={checkSong} deleteSong={this.props.deleteSong}
                        currentUserId={this.props.currentUserId}/>
                    {/* <img src={checkSong.artist.photoURL} className="song-show-artist-img" />
                    <Link to={`/songs/${checkSong.id}/edit`}>Edit</Link>
                    <button onClick={this.deleteTrack}>Delete Track</button>
                    <section className='song-show-des'>
                        {checkSong.description}
                    </section> */}
                </div>
            )
        )
    }
}

export default SongShow