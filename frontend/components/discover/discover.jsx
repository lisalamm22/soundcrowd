import React from 'react';
import SongIndexContainer from '../song_index/song_index_container'

class Discover extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="discover">
                <SongIndexContainer />
                <div className="discover-right">User Stuff</div>
            </div>
        )
    }
}

export default Discover