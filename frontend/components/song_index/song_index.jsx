import React from 'react';
import SongIndexItem from './song_index_item';

class SongIndex extends React.Component {
    constructor(props) {
        super(props)

        this.filterByGenre = this.filterByGenre.bind(this)
    }

    // fetch songs by different filters
    componentDidMount() {
        // if(this.props.byGenre){
        //     this.props.fetchSongs({ byGenre: this.props.byGenre} )
        // }
        // else{
            this.props.fetchSongs();
        // }
    }

    filterByGenre(){
        const { byGenre } = this.props;
        let filteredSongs = [];
        Object.values(this.props.songs).forEach((song) => {
            if(song.genre === byGenre){
                filteredSongs.push(song)
            }
        })
        return filteredSongs
    }

    render() {
        const { songs } = this.props
        if(!songs){
            return null;
        }
        return (
                <ul className='song-index'>
                    {this.filterByGenre().map((song, idx) => {
                        return <SongIndexItem key={idx} song={song} />
                    })}
                </ul>
        )
    }
}

export default SongIndex