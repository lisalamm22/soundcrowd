import React from 'react'
import SongForm from './song_form'
import SongFormItem from './song_form_item'
import SongFormNav from './song_form_nav'

class CreateSongForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.song

        this.handleAudio = this.handleAudio.bind(this)
    }

    componentDidMount() {
        this.props.fetchSongs({ byArtistId: this.props.currentUserId })
    }

    handleAudio(e) {
        // debugger
            const file = e.currentTarget.files[0]
            const fileReader = new FileReader();
                fileReader.onloadend = () => {
                    this.setState({
                        audioURL: file,
                        title: file.name
                    })
                }
            if (file) {
                fileReader.readAsDataURL(file);
            }
        }

    render() {
        const songList = Object.values(this.props.songs).map((song) => {
            return <SongFormItem song={song} artist={this.props.currentUser} />
        })
        // debugger

        if (this.state.audioURL === '') {
            return (
                <div className="song-audio">
                    <SongFormNav />
                    <div className="song-form-audio">
                        {`Drag and drop your tracks & albums here`}
                        <label>Upload a file
                        <input type="file"
                                    onChange={this.handleAudio} />
                        </label>
                    </div>
                    {songList}
                </div>
            )
        }
        else {
            return (
                <div className="song-details">
                    <SongFormNav />
                    <SongForm song={this.state} initialSong={this.props.song} 
                    formType={this.props.formType} processForm={this.props.processForm}/>
                    {songList}
                </div>
            )

        }
    }

}

export default CreateSongForm