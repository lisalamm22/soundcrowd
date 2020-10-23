import React from 'react';
import StreamItem from './stream_item';

class Stream extends React.Component {
    constructor(props) {
        super(props)
    }

    // fetch songs by different filters
    componentDidMount() {
            this.props.fetchSongs();
    }

    render() {
        const { songs, currentUserId } = this.props
        if (!songs) {
            return null;
        }
        return (
            <ul className='stream'>
                <span>Hear the latest posts from the crowds</span>
                {Object.values(songs).map((song, idx) => {
                    return <StreamItem key={idx} song={song} currentUserId={currentUserId}/>
                })}
            </ul>
        )
    }
}

export default Stream