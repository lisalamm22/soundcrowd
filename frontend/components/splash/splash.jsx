import React from 'react';

class Splash extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div>
                <div class="splash-welcome"></div>

                {/* images */}
                {/* searchbarcontainer */}
                {/* songindexcontainer */}
                {/* images */}
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
            </div>
        )
    }
}

export default Splash