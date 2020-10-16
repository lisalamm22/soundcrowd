import React from 'react'

class SongForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title: '',
            artist_id: this.props.currentUserId,
            genre: 'none',
            description: 'Describe your track',
            imageFile: null,
            audioFile: null,
        }
        this.handlefile = this.handlefile.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.resetState = this.resetState.bind(this)
    }

    handlefile(fileType){
        // debugger
        return(e) => {
            // set title to e.currentTarget.files[0].name
            this.setState({ [fileType]: e.currentTarget.files[0]})};
    };

    handleChange(field){
        return(e) => {
            this.setState({ [field]: e.target.value})
        };
    };

    resetState(){
        this.setState({
            title: '',
            artist_id: this.props.currentUserId,
            genre: 'none',
            description: 'Describe your track',
            imageFile: null,
            audioFile: null,
        // }, ()=>{
        //     console.log('hi')
        //     console.log(this.state)
    })}

    handleSubmit(e){
        e.preventDefault();
        const songFormData = new FormData();
        songFormData.append('song[title]', this.state.title);
        songFormData.append('song[artist_id]', this.state.artist_id);
        songFormData.append('song[genre]', this.state.genre);
        songFormData.append('song[description]', this.state.description);
        songFormData.append('song[imageURL]', this.state.imageFile);
        songFormData.append('song[audioURL]', this.state.audioFile);
        this.props.createSong(songFormData)
            // .then(()=>{
            //     debugger
            //     this.resetState});
    }

    render(){
        // console.log(this.state)
        if(this.state.audioFile === null){
            return(
                <div>
                    {`Drag and drop your tracks & albums here`}
                    <input type="file" onChange={this.handlefile('audioFile')}/>
                </div>
        )}
        else{
            return(
                <form className="song-form" onSubmit={this.handleSubmit}>
                    <input type="file" onChange={this.handlefile('imageFile')}/>
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
                            onChange={this.handleChange('description')}>
                        </textarea>
                    </label>
                    <button>Save</button>
                </form>
            )
        }
    }

}

export default SongForm