import React from "react";
import icon from "./add_shopping_cart-24px.svg"

class Button extends React.Component {

    render() {
        let buttonClass = ''
        let buttonSizeClass = ''
        let disableShadow = ''
        let buttonWithIconLeft = ''
        let buttonWithIconRight = ''
        let iconInButton = (<div></div>)



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

        if (this.props.startIcon === "local_grocery_store") {
            buttonWithIconLeft = "icon-btn-left";
            iconInButton = (
                <img className = "icon-left" src={icon}></img>
            )
        }
        if (this.props.endIcon === "local_grocery_store") {
            buttonWithIconRight = "icon-btn-right";
            iconInButton = (
                <img className = "icon-right" src={icon}></img>
            )
        }

        return (
            <button  className = {`id-button ${buttonClass} ${buttonSizeClass} ${disableShadow} ${buttonWithIconLeft} ${buttonWithIconRight}`}> Default 
            {iconInButton}
            </button>
        )
    
    }
}

export default Button;