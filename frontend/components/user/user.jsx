import React from 'react';
import { Link } from 'react-router-dom';
import UserHeader from './user_header';
import UserTracks from './user_tracks';

class UserProfile extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId)
    }


    render() {
        // debugger
        const { currentUserId, songs, user } = this.props
        if(!user){return null}
        let component = <UserTracks songs={songs} artist={user.id}/>
        return(
            <div className="user-page">   
                <UserHeader user = {user} currentUserId={currentUserId}/>
                <div className="user-main">
                    <nav className='user-nav'>
                        <li>All</li>
                        <li>Popular Tracks</li>
                        <li>Tracks</li>
                        <li>Playlists</li>
                    </nav>
                    {component}
                    <div>
                        <span>More uploads means more crowds.</span> 
                        <Link to="/upload">Upload more</Link>
                    </div>
                </div>
            </div>
        )

    }

}

export default UserProfile