import React, { Component } from 'react';
import Drumpad from './drumpad'
import drums from '../data/drums'
import RightComponents from './rightComponents'
import VolumeButtons from './volumeButtons';


class MainComponent extends Component {
    state = {
        audioClip: '',
        volume: 100,
        display: ''
    }
    changeAudioClip = audioClip => {
        this.setState({
            audioClip
        })
        this.updateDisplay(audioClip)
    }

    handleVolumeUp = () => {
        if (this.state.volume < 100) {
            this.setState({ volume: this.state.volume + 1 })
        }
        this.updateVolume();
    }

    handleVolumeDown = () => {
        if (this.state.volume > 0) {
            this.setState({ volume: this.state.volume - 1 })
        }
        this.updateVolume();
    }

    updateVolume = () => {
        const audios = document.querySelectorAll('audio');
        audios.forEach(audio => {
            audio.volume = this.state.volume / 100;
        })
        this.updateDisplay(`Volume: ${this.state.volume}`)
    }

    // to update display keys on state object
    updateDisplay = display => {
        this.setState({
            display
        })
    }
    render() {
        return (
            <div id="drum-machine">
                <div className="left">
                    {drums.map((e, index) => <Drumpad key={index} obj={e} diplayAudioClip={this.changeAudioClip} />)}
                </div>
                <div className="right">
                    <RightComponents diplay={this.state.display}>
                        <VolumeButtons handleVolumeUp={this.handleVolumeUp} handleVolumeDown={this.handleVolumeDown} />
                    </RightComponents>
                </div>
                <div className="box">
                    <div>
                        Made by <a href="https://github.com/Aldhanekaa">Aldhanekaa</a>
                    </div>
                    &copy; 2020, All rights reserved
                </div>
            </div>
        );
    }
}

export default MainComponent;