import React, { Component } from 'react';
import Buttons from './buttons';


class RightComponents extends Component {
    // state = {  }
    render() {
        return (
            <React.Fragment>
                <div id="display">
                    {this.props.diplay}
                </div>
                <Buttons>
                    {this.props.children}
                </Buttons>
            </React.Fragment>
        );
    }
}

export default RightComponents;