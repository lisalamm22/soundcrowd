import React from 'react';
import SongIndexContainer from '../song_show/song_index_container'

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