import React from 'react';
import SongFormItem from '../song_form/song_form_item';

class UserTracks extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const songList = Object.values(this.props.songs).map((song,idx) => {
            return <SongFormItem key={idx} song={song} artist={this.props.artist} />
        })
        return (
            <ul className="user-tracks">
                {songList}
            </ul>
        )

    }

}

export default UserTracks