import React, { Component } from 'react';

class Buttons extends Component {
    // state = {  }
    render() {
        return (
            <div className="buttons">
                <div className="button power">
                    <i className="fas fa-power-off"></i>
                    Power
                </div>
                <div className="volume">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Buttons;