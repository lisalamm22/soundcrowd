import React from 'react';
import SongIndexContainer from '../songs/song_index_container'

class Discover extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                Discover
                <SongIndexContainer />
            </div>
        )
    }
}

export default Discover