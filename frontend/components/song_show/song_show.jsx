import React from 'react';

class SongShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        debugger
        this.props.fetchSong(this.props.match.params.songId);
    }

    render() {

        let checkSong;
        (this.props.song) ? checkSong = this.props.song : checkSong = null

        return (
            (!checkSong) ? <div>no song</div> : (
                <p>{checkSong.id}</p>
            )
        )
        // const { song } = this.props
        // return (
        //     <div>
        //         {song.id}
        //     </div>
        // )
    }
}

export default SongShow