import React from 'react';
import SplashSongItem from './splash_song_item'

class SplashSongIndex extends React.Component{
    constructor(props){
        super(props)
        this.getDisplaySongs = this.getDisplaySongs.bind(this)
    }

    componentDidMount(){
        this.props.fetchSongs();
    }

    getDisplaySongs(){
        debugger
        const songArr = Object.values(this.props.songs)
        let displayIdx = []
        while (songArr.length > 12 && displayIdx.length < 12) {
            let randIdx = Math.floor(Math.random() * songArr.length)
            if (!displayIdx.includes(randIdx)){ displayIdx.push(randIdx) }
        }
        if(songArr.length <= 12){
            return [...Array(songArr.length).keys()];
        }
        return displayIdx;
    }

    render(){
        const {songs} = this.props
        if(!songs){return null}
        const display = this.getDisplaySongs().map( (idx) => {
            return <SplashSongItem song={Object.values(songs)[idx]} />
        })
        debugger

        return(
            <div className="splash-songs">
                <ul>{display}</ul>
           </div>
        )
    }
}

export default SplashSongIndex