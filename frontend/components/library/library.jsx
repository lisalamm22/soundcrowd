import React from 'react';
import SongIndex from '../song_index/song_index'
// import StreamItem from './stream_item';
// import ListeningHistoryContainer from '../listening_history/listening_history_container';

class Library extends React.Component {
    constructor(props) {
        super(props)
    }

    // fetch songs by different filters
    componentDidMount() {
        this.props.fetchSongs();
        window.scrollTo(0,0);
    }

    render() {
        const { songs, likes, currentUserId } = this.props
        // if (!songs) {
        //     return null;
        // }
        return (
            <div className="library">
                <SongIndex songs={songs} likes={likes} currentUserId={currentUserId} filter='Likes'/>
            </div>
        )
    }
}

export default Library