import React from 'react';

class DelayedButton extends React.Component {

    buttonClick = (event) => {
        event.persist()

        setTimeout(this.props.onDelayedClick, this.props.delay, event)
    }

    render() {
        return (
            <button onClick={this.buttonClick}>Delayed Button</button>
        )
    };

};

export default DelayedButton;