import React from 'react'
import SongFormItem from '../song_form/song_form_item'
import SongFormNav from '../song_form/song_form_nav'

class UserProfile extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchSongs({ byArtistId: this.props.match.params.userId })
    }


    render() {
        // console.log(this.state)]
        // debugger
        const songList = Object.values(this.props.songs).map((song) => {
            return <SongFormItem song={song} artist={this.props.match.params.userId} />
        })

        return(
            <div className="user-page">   
                <ul className="user-songs">{songList}</ul>
            </div>
        )

    }

}

export default UserProfile