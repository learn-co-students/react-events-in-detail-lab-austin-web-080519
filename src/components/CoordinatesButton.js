import React from 'react';

class CoordinatesButton extends React.Component {

    buttonClick = (event) => {
        let x = event.clientX;
        let y = event.clientY;
        let mouseCoordinates = [x,y];
        
        //onReceiveCoordinates prop is a function passed down from index.js
        this.props.onReceiveCoordinates(mouseCoordinates);
    }

    render() {
        return (
            <button onClick={this.buttonClick}>Coordinates Button</button>
        )
    };

};

export default CoordinatesButton;