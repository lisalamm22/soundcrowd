import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import SongShowHeader from './song_show_header';
import SongShowBody from './song_show_body';
// import CreateCommentFormContainer from '../comment_form/create_comment_form_container'
// import SongCommentsContainer from '../song_comments/song_comments_container';

class SongShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchSong(this.props.match.params.songId);
        window.scrollTo(0,0)
    }

    render() {
        let checkSong;
        (this.props.song) ? checkSong = this.props.song : checkSong = null

        return (
            (!checkSong) ? <div><Redirect to="/discover"/></div> : (
                <div>
                    <SongShowHeader song={checkSong}/>
                    {/* <CreateCommentFormContainer /> */}
                    <SongShowBody song={checkSong} deleteSong={this.props.deleteSong}
                        currentUserId={this.props.currentUserId}/>
                    {/* <SongCommentsContainer /> */}
                </div>
            )
        )
    }
}

export default SongShow