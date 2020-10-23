import React from 'react'
import SongForm from './edit_song_det'

class EditSongForm extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = this.props.song
    }

    componentDidMount() {
        this.props.fetchSong(this.props.match.params.songId)
    }


    render() {
            const {song} = this.props;
            if(!song) return null;
            return (
                <div className="song-edit">
                    <div className="song-details-edit">
                        <SongForm song={this.props.song} initialSong={this.props.song}
                            formType={this.props.formType} processForm={this.props.processForm} 
                            history={this.props.history}/>
                    </div>
                </div>
            )

        }
    }

// }

export default EditSongForm