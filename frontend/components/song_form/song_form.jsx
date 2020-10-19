import React from 'react'

class SongForm extends React.Component{
    constructor(props){
        super(props)
        // debugger
        this.state = props.song

        this.handleImage = this.handleImage.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.resetState = this.resetState.bind(this)
    }

    handleImage(e){
            const file = e.currentTarget.files[0]
            const fileReader = new FileReader();
  
            fileReader.onloadend = () => {
                this.setState({ 
                    imageURL: file,
                    imagePrev: fileReader.result,
                })
            }
            if(file){
                fileReader.readAsDataURL(file);
            }
        }

    handleChange(field){
        return(e) => {
            this.setState({ [field]: e.target.value})
        };
    };

    resetState(){
        // debugger
        this.setState(this.props.initialSong)
    }

    handleSubmit(e){
        e.preventDefault();
        const songFormData = new FormData();
        songFormData.append('song[title]', this.state.title);
        songFormData.append('song[artist_id]', this.state.artist_id);
        songFormData.append('song[genre]', this.state.genre);
        songFormData.append('song[description]', this.state.description);
        songFormData.append('song[audioURL]', this.state.audioURL);
            if(this.state.imageURL){
                songFormData.append('song[imageURL]', this.state.imageURL);
            }
        this.props.processForm(songFormData)
        this.resetState();
    }

    render(){
        console.log(this.state)
        // debugger
        const {formType, song} = this.props
        if(!song){return null}
        let preview;
        if(formType === 'Create Song'){
        preview = this.state.imagePrev === '' ? <div className="song-img-placeholder"></div> :  
            <img src={this.state.imagePrev} className='song-img-prev'/>
        }

        return(
            <form className="song-form-details">
                <div><div className="song-form-img">
                <label >{`📷 Upload image` }
                <input type="file" onChange={this.handleImage}/>
                </label>
                {formType === 'Create Song' ? preview : <div className="song-img-placeholder"></div>}</div>
                <div className="song-form-txt">
                <label>Title
                    <input type="text" 
                        placeholder={this.state.audioURL.name}
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
        )
   
    }

}

export default SongForm