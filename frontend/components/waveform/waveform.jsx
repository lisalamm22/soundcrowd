import React from 'react';


//ownprops pass in a single song
class WaveForm extends React.Component {
    constructor(props) {
        super(props)
        this.audio = new Audio()
        this.audio.crossOrigin = "anonymous";
        this.audio.src = this.props.song.audioURL
        this.canvas = React.createRef();
        this.state = { audioData: new Uint8Array(0) };
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        this.audioContext = new (window.AudioContext ||
        window.webkitAudioContext)();
        this.analyser = this.audioContext.createAnalyser();
        this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
        this.source = this.audioContext.createMediaElementSource(this.audio);
        this.source.connect(this.analyser);
        // this.analyser.getByteTimeDomainData(this.dataArray);
        this.rafId = requestAnimationFrame(this.tick);
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.rafId);
        this.analyser.disconnect();
        this.source.disconnect();
    }

    tick() {
        this.analyser.getByteTimeDomainData(this.dataArray);
        this.setState({ audioData: this.dataArray }, ()=>{
            console.log(this.state.audioData)
        });
        this.rafId = requestAnimationFrame(this.tick);
    }


    render() {
        return <canvas width="300" height="300" ref={this.canvas} />
    }
}

export default WaveForm