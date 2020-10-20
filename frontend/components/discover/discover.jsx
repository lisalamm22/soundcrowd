import React from 'react';
import SongIndexContainer from '../song_index/song_index_container'

class Discover extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="discover">
                <div className="discover-main">
                    <div>
                        <h2>New Music Now</h2>
                        <p>The latest hits, updated all the time</p>
                        <SongIndexContainer />
                    </div>
                    {/* <div>
                        <h2>SoundCrowd Charts</h2>
                        <p>The most played tracks on SoundCrowd this week</p>
                        <SongIndexContainer />
                    </div>
                    <div>
                        <h2>Top Crowds</h2>
                        <p>The biggest sounds on SoundCrowd</p>
                        <SongIndexContainer />
                    </div> */}
                </div>
                <div className="discover-right">User Stuff</div>
            </div>
        )
    }
}

export default Discover