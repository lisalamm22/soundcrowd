import React from 'react';

class Splash extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div>
                <div className="splash-welcome"></div>
                {/* searchbarcontainer */}
                {/* songindexcontainer */}

                <div className="splash-app">
                    <div className="splash-app-pic">
                    <div className="splash-app-txt">
                        <h2>Never stop listening</h2>
                        <div className="line"></div>
                        <h4>SoundCrowd is available on Web. Coming soon to iOS, Android, Sonos, Chromecast, and Xbox One.</h4>
                    </div></div>
                </div>

                <div className="splash-creators">
                    <div className="splash-creators-txt">
                        <h2>Calling all creators</h2>
                        <h4>Get on SoundCrowd to connect with fans, share your sounds, and grow your crowd. What are you waiting for?</h4>
                    </div>
                </div>

                <div className="footer-session">
                    <h2>Thanks for listening. Now join the party.</h2>
                    <h4>Save tracks, follow artists and build playlists. All for free.</h4>
                    <button 
                        onClick={() => this.props.openModal('signup')}
                        className='signup'>
                        Create account
                    </button>
                    {/* <br/> */}
                    <div>
                        <span>Already have an account?</span>
                        <button 
                            onClick={() => this.props.openModal('login')}
                            className='signin'>
                            Sign in
                        </button>
                    </div>
                </div>

                <div className="footer">
                    <span>Language: English (US) </span>
                </div>
            </div>
        )
    }
}

export default Splash