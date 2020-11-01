import React, { Component } from 'react';

class VolumeButton extends Component {
    // state = {  }
    componentDidMount = () => {
        this.interval = null;
    }
    componentWillUnmount = () => {
        clearInterval(this.interval);
    }
    handleMouseDown = () => {
        this.interval = setInterval(this.props.handleHold, 50)
    }
    handleMouseUp = () => {
        clearInterval(this.interval);
    }
    handleMouseOut = () => {
        clearInterval(this.interval);
    }
    render() {
        return (
            <div className="button"
                onMouseDown={this.handleMouseDown}
                onMouseUp={this.handleMouseUp}
                onMouseOut={this.handleMouseOut}
                onTouchStart={this.handleMouseDown}
                onTouchEnd={this.handleMouseUp}
            >
                <i className={this.props.className}></i>
            </div>);
    }
}

export default VolumeButton;