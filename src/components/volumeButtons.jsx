import React, { Component } from 'react';
import VolumeButton from './volumeButton';

class VolumeButtons extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <VolumeButton handleHold={this.props.handleVolumeUp} className="fas fa-plus" />

                <VolumeButton handleHold={this.props.handleVolumeDown} className="fas fa-minus" />

            </React.Fragment>
        );
    }
}

export default VolumeButtons;