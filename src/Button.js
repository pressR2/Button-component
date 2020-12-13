import React from "react";

class Button extends React.Component {

    render() {
        let buttonClass = ''
        let buttonSizeClass = ''
        let disableShadow = ''

        if (this.props.variant === undefined) {
            buttonClass = 'main-button'
            if (this.props.disableShadow === "off") {
                disableShadow = "off"
            }
        }
        if (this.props.variant === 'outline') {
          buttonClass = 'main-button-outline'
        }
        if ( this.props.variant === 'text') {
          buttonClass = 'main-button-text' 
        }

        if (this.props.size === 'sm') {
            buttonSizeClass = 'sm'
        }
        if (this.props.size === 'md') {
            buttonSizeClass = 'md'
        }
        if (this.props.size === 'lg') {
            buttonSizeClass = 'lg'
        }

      
        return (
            <button  className = {`id-button ${buttonClass} ${buttonSizeClass} ${disableShadow}`}> Default </button>
        )
    
    }
}

export default Button;