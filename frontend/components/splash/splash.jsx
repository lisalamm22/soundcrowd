import React from 'react';

class Splash extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div>
                <h1>Splash</h1>
                {/* images */}
                {/* searchbarcontainer */}
                {/* songindexcontainer */}
                {/* images */}
                <div>
                    <h3>Thanks for listening. Now join the party.</h3>
                    <h4>Save tracks, follow artists and build playlists. All for free.</h4>
                    <button onClick={() => this.props.openModal('signup')}>Create account</button>
                    <br/>
                    <span>Already have an account?</span>
                    <button onClick={() => this.props.openModal('login')}>Login</button>
                </div>
            </div>
        )
    }
}

export default Splash