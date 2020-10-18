import React from 'react';
import { Link } from 'react-router-dom'

class SongFormNav extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <nav className="song-form-nav">
                <ul>
                    <li><Link to='/upload'>Upload</Link></li>
                    <li><Link to='/you/tracks'>Your Tracks</Link></li>
                </ul>
            </nav>
        )
    }
}

export default SongFormNav