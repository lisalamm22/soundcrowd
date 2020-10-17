import React from 'react'
import SongFormItem from './song_form_item'

class SongForm extends React.Component{
    constructor(props){
        super(props)
        
        this.initialState={
            title: '',
            artist_id: this.props.currentUserId,
            genre: 'none',
            description: 'Describe your track',
            imageFile: null,
            imageURL: null,
            audioFile: null,
        }
        this.state= this.initialState

        this.handlefile = this.handlefile.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.resetState = this.resetState.bind(this)
    }

    componentDidMount(){
        this.props.fetchSongs({byArtistId: this.props.currentUserId})
    }

    handlefile(fileType){
        return(e) => {
            const file = e.currentTarget.files[0]
            const fileReader = new FileReader();
            if(fileType === 'audioFile'){
                fileReader.onloadend = () => {
                    this.setState({
                        [fileType]: file,
                        title: file.name
                    })
                }
            }
            else{
            fileReader.onloadend = () => {
                this.setState({ 
                    [fileType]: file,
                    imageURL: fileReader.result,
                })
            }}
            if(file){
                fileReader.readAsDataURL(file);
            }
        }
    };

    handleChange(field){
        return(e) => {
            this.setState({ [field]: e.target.value})
        };
    };

    resetState(){
        this.setState(this.initialState)}

    handleSubmit(e){
        e.preventDefault();
        const songFormData = new FormData();
        songFormData.append('song[title]', this.state.title);
        songFormData.append('song[artist_id]', this.state.artist_id);
        songFormData.append('song[genre]', this.state.genre);
        songFormData.append('song[description]', this.state.description);
        songFormData.append('song[audioURL]', this.state.audioFile);
            if(this.state.imageFile){
                songFormData.append('song[imageURL]', this.state.imageFile);
            }
        this.props.createSong(songFormData)
        this.resetState();
    }

    render(){
        // console.log(this.state)]
        // debugger
        const preview = this.state.imageURL ? <img src={this.state.imageURL} className='song-img-prev'/> :  
            <div className="song-img-placeholder"></div>
        const songList = Object.values(this.props.songs).map((song) => {
                return <SongFormItem song={song} artist={this.props.currentUser} />
            })
        
        if(this.state.audioFile === null){
            return(
            <div className="song-audio">
                <div className="song-form-audio">
                    {`Drag and drop your tracks & albums here`}
                    <label>Upload a file
                    <input type="file" 
                        // className = "upload-audio-btn"
                        onChange={this.handlefile('audioFile')}/>
                    </label>
                </div>
                {songList}
            </div>
        )}
        else{
            return(
            <div className = "song-details">
                <form className="song-form-details">
                    <div><div className="song-form-img">
                    <label >{`📷 Upload image` }
                    <input type="file" onChange={this.handlefile('imageFile')}/>
                    </label>
                    {preview}</div>
                    <div className="song-form-txt">
                    <label>Title
                        <input type="text" 
                            placeholder={this.state.audioFile.name}
                            value={this.state.title}
                            onChange={this.handleChange('title')}/>
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
                            placeholder = 'Describe your track'
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
                {songList}
            </div>
            )
                
        }
    }

}

export default SongForm