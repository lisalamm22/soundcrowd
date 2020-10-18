import React from 'react'
import SongForm from './song_form'

class EditSongForm extends React.Component {
    constructor(props) {
        debugger
        super(props)

        this.state = this.props.song
    }

    componentDidMount() {
        debugger
        this.props.fetchSong(this.props.match.params.songId)
    }


    render() {
            debugger
            const {song} = this.props;
            if(!song) return null;
            return (
                <div className="song-details">
                    <SongForm props={this.props} />
                </div>
            )

        }
    }

// }

export default EditSongForm