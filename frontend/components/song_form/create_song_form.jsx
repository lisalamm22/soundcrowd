import React from 'react'
// import SongForm from './edit_song_det'
import SongFormItem from './song_form_item'
import SongFormNav from './song_form_nav'

class CreateSongForm extends React.Component {
    constructor(props) {
        super(props)

        // this.state = {
        //     song: this.props.song,
        //     audio: false
        // }
        // this.state = Object.assign({}, this.props.song, {audio: false})
        this.state = {
            title: '',
            artist_id: this.props.currentUserId,
            genre: 'none',
            description: 'Describe your track',
            imageURL: '',
            imagePrev: '',
            audioURL: '',
            audio: false,
        };

        this.handleAudio = this.handleAudio.bind(this)
        this.handleImage = this.handleImage.bind(this)
        this.resetState = this.resetState.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.fetchSongs({ byArtistId: this.props.currentUserId })
    }

    handleChange(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        };
    };

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
            this.setState({audio: true})
            e.currentTarget.value = '';
    }

    handleImage(e) {
        const file = e.currentTarget.files[0]
        const fileReader = new FileReader();

        fileReader.onloadend = () => {
            this.setState({
                imageURL: file,
                imagePrev: fileReader.result,
            })
        }
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    resetState() {
        // debugger
        this.setState({
            title: '',
            genre: 'none',
            description: 'Describe your track',
            imageURL: '',
            imagePrev: '',
            audioURL: '',
            audio: false,
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const songFormData = new FormData();
        songFormData.append('song[title]', this.state.title);
        songFormData.append('song[artist_id]', this.state.artist_id);
        songFormData.append('song[genre]', this.state.genre);
        songFormData.append('song[description]', this.state.description);
        songFormData.append('song[audioURL]', this.state.audioURL);
        if (this.state.imageURL) {
            songFormData.append('song[imageURL]', this.state.imageURL);
        }
        this.props.processForm(songFormData)
            .then(this.resetState);
    }

    render() {
        // debugger
        const songList = Object.values(this.props.songs).map((song) => {
            return <SongFormItem song={song} artist={this.props.currentUser} />
        })

        const preview = this.state.imagePrev === '' ? <img src="http://dalelyles.com/musicmp3s/no_cover.jpg" className="song-img-placeholder"></img> :
            <img src={this.state.imagePrev} className='song-img-prev' />
            
        return(
            <div>
                <SongFormNav />
                <div className="song-upload">
                <div className={`song-form-audio-${this.state.audio}`}>
                    {`Drag and drop your tracks & albums here`}
                    <label>Upload a file
                        <input type="file"
                            onChange={this.handleAudio} />
                    </label>
                </div>
                <div className={`song-details-${!this.state.audio}`}>
                    <form className="song-form-details">
                        <div>
                            <div className="song-form-img">
                                <label >{`📷 Upload image`}
                                    <input type="file" onChange={this.handleImage} />
                                </label>
                                {preview}
                            </div>
                            <div className="song-form-txt">
                                <label>Title
                                    <input type="text"
                                        placeholder={this.state.audioURL.name}
                                        value={this.state.title}
                                        onChange={this.handleChange('title')} />
                                </label>
                                <label>Genre
                                    <select name="genre"
                                        value={this.state.genre}
                                        onChange={this.handleChange('genre')}>
                                        <option value="none">None</option>
                                        <option value="ambient">Ambient</option>
                                        <option value="classical">Classical</option>
                                        <option value="country">Country</option>
                                        <option value="danceEDM">{`Dance & EDM`}</option>
                                        <option value="dancehall">Dancehall</option>
                                        <option value="deepHouse">Deep House</option>
                                        <option value="disco">Disco</option>
                                        <option value="drumBass">{`Drum & Bass`}</option>
                                        <option value="dubstep">Dubstep</option>
                                        <option value="electronic">Electronic</option>
                                        <option value="folk">Folk</option>
                                        <option value="hiphop">{`Hip-hop & Rap`} </option>
                                        <option value="house">House</option>
                                        <option value="indie">Indie</option>
                                        <option value="jazz">{`Jazz & Blues`}</option>
                                        <option value="latin">Latin</option>
                                        <option value="metal">Metal</option>
                                        <option value="piano">Piano</option>
                                        <option value="pop">Pop</option>
                                        <option value="rb">{`R&B & Soul`}</option>
                                        <option value="reggae">Reggae</option>
                                        <option value="reggaeton">Reggaeton</option>
                                        <option value="rock">Rock</option>
                                        <option value="soundtrack">Soundtrack</option>
                                        <option value="techno">Techno</option>
                                        <option value="trance">Trance</option>
                                        <option value="trap">Trap</option>
                                        <option value="triphop">Triphop</option>
                                        <option value="world">World</option>
                                    </select>
                                </label>
                                <label>Description
                                    <textarea cols="30" rows="10"
                                        placeholder='Describe your track'
                                        onChange={this.handleChange('description')}>
                                    </textarea>
                                </label>
                            </div>
                        </div>
                        <div className='song-form-submit'>
                            <button className="song-form-cancel" onClick={this.resetState}>Cancel</button>
                            <button className="song-form-save" onClick={this.handleSubmit}>Save</button>
                        </div>
                    </form>
                </div>
                {songList}
                </div>
            </div>
        )
    }
    
}

export default CreateSongForm

                                            // debugger

                                            // if (this.state.audioURL === '') {
                                            //     return (
                                            //         <div className="song-audio">
                                            //             <SongFormNav />
                                            //             <div className="song-form-audio">
                                            //                 {`Drag and drop your tracks & albums here`}
                                            //                 <label>Upload a file
                                            //                     <input type="file"
                                            //                         onChange={this.handleAudio} />
                                            //                 </label>
                                            //             </div>
                                            //             {songList}
                                            //         </div>
                                            //     )
                                            // }
                                            // else {
                                            //     return (
                                            //         <div className="song-details">
                                            //             <SongFormNav />
                                            //             <SongForm song={this.state} initialSong={this.props.song} 
                                            //             formType={this.props.formType} processForm={this.props.processForm}/>
                                            //             {songList}
                                            //         </div>
                                            //     )

                                            // }

                                            // this.state.audioURL === '' ? 
{/* <SongForm song={this.state.song} 
    initialSong={this.props.song} 
    formType={this.props.formType} 
    processForm={this.props.processForm}
    audio={this.state.audio}/> */}