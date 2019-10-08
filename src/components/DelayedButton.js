// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends React.Component {
    state = {  }
    render() { 
        const onDelayedClick = this.props.onDelayedClick
        return ( 
            <button onClick={(e) => {
                e.persist()
                setTimeout( () => {
                    onDelayedClick(e)
                }, this.props.delay)
            }}>Delayed Button</button>
         );
    }
}
 
export default DelayedButton;