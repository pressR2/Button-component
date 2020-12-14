import React from "react";
import icon from "./add_shopping_cart-24px.svg"

class Button extends React.Component {

    render() {
        let buttonVariant = '';
        let buttonSize = '';
        let disableShadow = '';
        let buttonWithIconLeft = '';
        let buttonWithIconRight = '';
        let buttonDisable = '';
        let buttonColor = '';
        let iconInButton = (<div></div>);



        if (this.props.variant === undefined) {
            buttonVariant = 'main-button'
            if (this.props.disableShadow === "on") {
                disableShadow = "shadow-off"
            }
            if (this.props.disabledButton === "on") {
                buttonDisable = "disable-button"
            }
        }
        if (this.props.variant === 'outline') {
            buttonVariant = 'main-button-outline'
            if (this.props.disabledButton === "on") {
                buttonDisable = "disable-button"
            }
        }
        if ( this.props.variant === 'text') {
            buttonVariant = 'main-button-text'
            if (this.props.disabledButton === "on") {
                buttonDisable = "disable-button"
            }
        }

        if (this.props.size === 'sm') {
            buttonSize = 'size-sm'
        }
        if (this.props.size === 'md') {
            buttonSize = 'size-md'
        }
        if (this.props.size === 'lg') {
            buttonSize = 'size-lg'
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

        if (this.props.color === "default") {
            buttonColor = 'main-button'
        }
        if (this.props.color === "primary") {
            buttonColor = 'primary-color'
        }
        if (this.props.color === "secondary") {
            buttonColor = 'secondary-color'
        }
        if (this.props.color === "danger") {
            buttonColor = 'dragon-color'
        };
        return (
            <button  className = {`button ${buttonVariant} ${buttonSize} ${disableShadow}
                                 ${buttonWithIconLeft} ${buttonWithIconRight} ${buttonDisable} 
                                 ${buttonColor}`}> Default 
            {iconInButton}
            </button>
        )
    
    }
}

export default Button;