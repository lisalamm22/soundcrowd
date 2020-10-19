import React from 'react'
import SongForm from './song_form'

class EditSongForm extends React.Component {
    constructor(props) {
        // debugger
        super(props)

        this.state = this.props.song
    }

    componentDidMount() {
        // debugger
        this.props.fetchSong(this.props.match.params.songId)
    }


    render() {
            // debugger
            const {song} = this.props;
            if(!song) return null;
            return (
                <div className="song-edit">
                    <div className="song-details-edit">
                        <SongForm song={this.props.song} initialSong={this.props.song}
                            formType={this.props.formType} processForm={this.props.processForm} />
                    </div>
                </div>
            )

        }
    }

// }

export default EditSongForm