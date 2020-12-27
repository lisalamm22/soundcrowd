import React from 'react';
import SongIndexItem from './song_index_item';

class SongIndex extends React.Component {
    constructor(props) {
        super(props)

        this.filterByGenre = this.filterByGenre.bind(this)
        this.filterByLikes = this.filterByLikes.bind(this)
    }

    // fetch songs by different filters
    // componentDidMount() {
    //     if(this.props.byGenre){
    //         this.props.fetchSongs({ byGenre: this.props.byGenre} )
    //     }
    //     else{
    //         this.props.fetchSongs();
    //     }
    // }

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

    filterByLikes(){
        let filteredSongs = []
        Object.values(this.props.likes).forEach((like) => {
            if(like.liker_id === this.props.currentUserId){
                let likedSong = this.props.songs[like.song_id-1]
                filteredSongs.push(likedSong)
            }
        })
        return filteredSongs
    }

    render() {
        let songList;
        if(this.props.filter === 'Genre'){
            songList = <ul className='song-index'>
                    {this.filterByGenre().map((song, idx) => {
                        return <SongIndexItem key={idx} song={song} />
                    })}
                </ul>
        }
        else if( this.props.filter === 'Likes'){
            songList = <ul className='song-index'>
                    {this.filterByLikes().map((song, idx) => {
                        return <SongIndexItem key={idx} song={song} />
                    })}
                </ul>
        }
        return (
            <div>
                {songList}
            </div>
        )
    }
}

export default SongIndex