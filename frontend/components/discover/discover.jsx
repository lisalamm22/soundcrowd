import React from 'react';
import ReactLoading from "react-loading";
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
// import SongIndexContainer from '../song_index/song_index_container'
import SongIndex from '../song_index/song_index'
import ListeningHistoryContainer from '../listening_history/listening_history_container';
// import LoadingLogo from '../../../public/Ripple-1s-200px.svg';


class Discover extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isLoading: true
        }
    }

    componentDidMount(){
        this.props.fetchSongs()
            .then(() => {
                setTimeout(() => this.setState({isLoading: false}), 500)
            });
    }

    render(){
        const { songs } = this.props
        if(!songs){
            return null;
        }
        return(
        this.state.isLoading ? 
        <div className="loading">
            <Loader type="Bars" color="#00BFFF" height={80} width={80} />
        </div> :
            <div className="discover">
                <div className="discover-main">
                    <div>
                        <h2>Poppin'</h2>
                        <p>The greatest hits, updated all the time</p>
                        {/* <SongIndexContainer byGenre='Pop' /> */}
                        <SongIndex byGenre='Pop'songs={songs}/>
                    </div>
                    <div>
                        <h2>SoundCrowd Feels</h2>
                        <p>The most mood tracks on SoundCrowd this week</p>
                        {/* <SongIndexContainer byGenre='RBSoul' /> */}
                        <SongIndex byGenre='RBSoul' songs={songs} />
                    </div>
                    <div>
                        <h2>Dancing on Your Own</h2>
                        <p>The biggest sounds on SoundCrowd</p>
                        {/* <SongIndexContainer byGenre='DanceEDM'/> */}
                        <SongIndex byGenre='DanceEDM'songs={songs}/>
                    </div>
                    <div>
                        <h2>Summer Vibes</h2>
                        <p>Bringing the beach to your living room</p>
                        {/* <SongIndexContainer byGenre='House'/> */}
                        <SongIndex byGenre='House'songs={songs}/>
                    </div>
                    <div>
                        <h2>Fresh Beats</h2>
                        <p>Sit back and turn up the bass</p>
                        {/* <SongIndexContainer byGenre='Electronic'/> */}
                        <SongIndex byGenre='Electronic'songs={songs}/>
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