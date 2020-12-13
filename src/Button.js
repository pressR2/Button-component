import React from "react";

class Button extends React.Component {

    render() {
        let buttonClass = 'main-button'
    
        if (this.props.variant === 'outline') {
          buttonClass = 'main-button-outline'
        }
        if ( this.props.variant === 'text') {
          buttonClass = 'main-button-text' 
        }

        return (
            <button  className = {`id-button ${buttonClass}`}> Default </button>
        )
    
    }
}

export default Button;