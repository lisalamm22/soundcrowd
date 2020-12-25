import React from 'react';
import UserTrackItem from '../user/user_track_item';

class UserTracks extends React.Component {
    constructor(props) {
        super(props)    //
    }


    render() {
        const {songs, user, currentUserId, deleteSong } = this.props
        const songList = Object.values(songs).map((song,idx) => {
            if(song.artist.id === user.id){
                return <UserTrackItem key={idx} song={song} user={user} currentUserId={currentUserId} deleteSong={deleteSong}/>
            }
        })
        return (
            <ul className="user-tracks">
                {songList}
            </ul>
        )

    }

}

export default UserTracks