import React from 'react';

class UserHeader extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const {user} = this.props
        return (
            <div className="user-header">
                <img src={user.photoURL} className="user-photo"/>
                <h2>{user.username}</h2>
            </div>
        )

    }

}

export default UserHeader