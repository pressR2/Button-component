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
        // let disableHover = '';
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

        return (
            <button  className = {`button ${buttonVariant} ${buttonSize} ${disableShadow} ${buttonWithIconLeft} ${buttonWithIconRight} ${buttonDisable}`}> Default 
            {iconInButton}
            </button>
        )
    
    }
}

export default Button;