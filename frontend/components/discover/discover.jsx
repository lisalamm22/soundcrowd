import React from 'react';
import SongIndexContainer from '../song_index/song_index_container'
import ListeningHistoryContainer from '../listening_history/listening_history_container'

class Discover extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="discover">
                <div className="discover-main">
                    <div>
                        <h2>Poppin'</h2>
                        <p>The greatest hits, updated all the time</p>
                        <SongIndexContainer byGenre='Pop' />
                    </div>
                    <div>
                        <h2>SoundCrowd Feels</h2>
                        <p>The most mood tracks on SoundCrowd this week</p>
                        <SongIndexContainer byGenre='RBSoul' />
                    </div>
                    <div>
                        <h2>Dancing on Your Own</h2>
                        <p>The biggest sounds on SoundCrowd</p>
                        <SongIndexContainer byGenre='DanceEDM'/>
                    </div>
                    <div>
                        <h2>Summer Vibes</h2>
                        <p>Bringing the beach to your living room</p>
                        <SongIndexContainer byGenre='House'/>
                    </div>
                    <div>
                        <h2>Fresh Beats</h2>
                        <p>Sit back and turn up the bass</p>
                        <SongIndexContainer byGenre='Electronic'/>
                    </div>
                </div>
                <div className="discover-right">
                    <ListeningHistoryContainer />
                </div>
            </div>
        )
    }
}

export default Discover