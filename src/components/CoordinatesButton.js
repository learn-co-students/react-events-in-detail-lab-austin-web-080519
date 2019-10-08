import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

    handleClick = (event) => {
        const x = event.clientX;
        const y = event.clientY;
        const coordinates = [x, y];

        this.props.onReceiveCoordinates(coordinates);

    }

    render() {
        return (
            <button onClick={this.handleClick}></button>
        )
    }
}