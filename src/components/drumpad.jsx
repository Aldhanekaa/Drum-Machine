import React, { Component } from 'react';
import * as drumStyle from '../styles/drumpad'

const { D, audioStyle, active } = drumStyle

class Drumpad extends Component {
    state = {
        click: false,
        style: D,
        audioClip: ''
    }
    playSound = () => {
        const { keyTrigger, id } = this.props.obj;
        const coolSound = document.getElementById(keyTrigger)
        this.setState({
            audioClip: id
        })
        coolSound.currentTime = 0;
        coolSound.play();
        this.clickOrNot()
        setTimeout(this.clickOrNot, 100);
    }
    clickOrNot = () => {
        const { click, audioClip } = this.state;
        if (click) {
            this.props.diplayAudioClip(audioClip)
            this.setState({
                click: false,
                style: D
            })

        } else if (!click) {

            this.setState({
                click: true,
                style: active
            })
        }
    }
    componentDidMount() {
        document.addEventListener("keypress", this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener("keypress", this.handleKeyPress);
    }

    handleKeyPress = (e) => {
        const { keyTrigger } = this.props.obj;
        let { key } = e;
        key = key.toUpperCase();
        if (key === keyTrigger) {
            this.playSound()
        }
    }
    render() {
        const { id: clip, keyTrigger, url: source } = this.props.obj;
        return (
            <div
                id={clip} className={'drum-pad'} onClick={this.playSound} style={this.state.style}>
                <audio
                    id={keyTrigger}
                    controls
                    src={source} style={audioStyle} className="clip"
                >
                </audio>
                {keyTrigger}
            </div>
        );
    }
}

export default Drumpad;