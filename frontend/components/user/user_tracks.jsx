import React from 'react';
import UserTrackItem from '../user/user_track_item';

class UserTracks extends React.Component {
    constructor(props) {
        super(props)    //
    }


    render() {
        const {songs, user, currentUserId } = this.props
        const songList = Object.values(songs).map((song,idx) => {
            return <UserTrackItem key={idx} song={song} user={user} currentUserId={currentUserId}/>
        })
        return (
            <ul className="user-tracks">
                {songList}
            </ul>
        )

    }

}

export default UserTracks