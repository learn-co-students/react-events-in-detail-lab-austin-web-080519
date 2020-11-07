// Code CoordinatesButton Component Here
import React, {Component} from 'react';

export default class CoordinatesButton extends Component {
    render() {
        return (
            <button onClick={this.handleClick} />
        )
    }
    receive = (coordinates) => {return this.props.onReceiveCoordinates(coordinates)};
    handleClick = (event) => {
        let coordinates = [event.clientX, event.clientY]
        this.receive(coordinates);
    }

}