import React from 'react';
import SongIndexItem from './song_index_item';

class SongIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    // fetch songs by different filters
    componentDidMount() {
        this.props.fetchSongs();
    }

    render() {
        const { songs } = this.props
        return (
            <div>
                {/* SongIndex */}
                <ul>
                    {Object.values(songs).map((song, idx) => {
                        return <SongIndexItem key={idx} song={song} />
                    })}
                </ul>
            </div>
        )
    }
}

export default SongIndex