// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends React.Component {
    state = {  }
    
    render() { 
        console.log(this.props)
        const onReceiveCoordinates = this.props.onReceiveCoordinates
        return ( 
            <button onClick={(e) => onReceiveCoordinates([e.clientX, e.clientY])}>Coord Button</button>
         );
    }
}
 
export default CoordinatesButton;