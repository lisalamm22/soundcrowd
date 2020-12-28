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
        const { songs, likes, prevSongs, currentUserId } = this.props
        if (!songs) {
            return null;
        }
        return (
            <div>
                <div className="library-recents">
                    <h3>Recently Played</h3>
                    <SongIndex songs={songs} likes={likes} prevSongs={prevSongs} currentUserId={currentUserId} filter='Recents'/>
                </div>
                <div className="library-liked">
                    <h3>Likes</h3>
                    <SongIndex songs={songs} likes={likes} prevSongs={prevSongs} currentUserId={currentUserId} filter='Likes'/>
                </div>
            </div>
        )
    }
}

export default Library