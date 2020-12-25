import React from 'react';
import StreamItem from './stream_item';
import ListeningHistoryContainer from '../listening_history/listening_history_container';

class Stream extends React.Component {
    constructor(props) {
        super(props)
    }

    // fetch songs by different filters
    componentDidMount() {
        this.props.fetchSongs();
        window.scrollTo(0,0);
    }

    render() {
        const { songs, currentUserId } = this.props
        if (!songs) {
            return null;
        }
        return (
            <div className="stream">
                <ul className='stream-left'>
                    <span>Hear the latest posts from the crowds</span>
                    {Object.values(songs).map((song, idx) => {
                        return <StreamItem key={idx} song={song} currentUserId={currentUserId}/>
                    })}
                </ul>
                <div className='stream-right'>
                    <ListeningHistoryContainer />
                </div>
            </div>
        )
    }
}

export default Stream