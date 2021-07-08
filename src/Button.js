import React from "react";
import iconShoppingCart from "./icons/add_shopping_cart-24px.svg";
import iconBeenhere from "./icons/beenhere_black_24dp.svg";
import iconEmail from "./icons/email_black_24dp.svg";
import iconLink from "./icons/link_black_24dp.svg";
import iconTask from "./icons/task_black_24dp.svg";

class Button extends React.Component {
  render() {
    let defaultButton = "";
    let buttonVariant = "";
    let buttonSize = "";
    let disableShadow = "";
    let buttonWithIconLeft = "";
    let buttonWithIconRight = "";
    let buttonDisable = "";
    let buttonColor = "";
    let iconInButton = <div></div>;
    let buttonText = this.props.text;
    let buttonSizeWithColor = "";
    let buttonHoverFocus = "";

    if (this.props.text === "Secondary") {
      buttonSizeWithColor = "secondary-color-w";
    }

    if (this.props.text === undefined) {
      buttonText = "Default";
    }

    if (Object.keys(this.props).length === 0) {
      defaultButton = "default-button";
    }

    if (this.props.variant === undefined) {
      buttonVariant = "main-button";
      if (this.props.disableShadow === "on") {
        disableShadow = "shadow-off";
      }
      if (this.props.disabledButton === "on") {
        buttonDisable = "disable-button";
      }
    }
    if (this.props.variant === "outline") {
      buttonVariant = "main-button-outline";
      if (this.props.disabledButton === "on") {
        buttonDisable = "disable-button";
      }
    }
    if (this.props.variant === "text") {
      buttonVariant = "main-button-text";
      if (this.props.disabledButton === "on") {
        buttonDisable = "disable-button";
      }
    }

    /* Varian Size */
    if (this.props.size === "sm") {
      buttonSize = "size-sm";
    }
    if (this.props.size === "md") {
      buttonSize = "size-md";
    }
    if (this.props.size === "lg") {
      buttonSize = "size-lg";
    }

    /* Varian Icon */
    if (this.props.startIcon  !== undefined) {
        buttonWithIconLeft = "icon-btn-left";
    }
    if (this.props.endIcon !== undefined) {
        buttonWithIconRight = "icon-btn-right";
    }

    if (this.props.startIcon === "local_grocery_store") {
      iconInButton = <img className = "icon-left" src = {iconShoppingCart}></img>;
    }
    if (this.props.endIcon === "local_grocery_store") {
      iconInButton = <img className = "icon-right" src = {iconShoppingCart}></img>;
    }
    if (this.props.startIcon === "email") {
      iconInButton = <img className = "icon-left" src = {iconEmail}></img>;
    }
    if (this.props.endIcon === "email") {
      iconInButton = <img className = "icon-right" src = {iconEmail}></img>;
    }
    if (this.props.startIcon === "link") {
      iconInButton = <img className = "icon-left" src = {iconLink}></img>;
    }
    if (this.props.endIcon === "link") {
      iconInButton = <img className = "icon-right" src = {iconLink}></img>;
    }
    if (this.props.startIcon === "task") {
      iconInButton = <img className = "icon-left" src = {iconTask}></img>;
    }
    if (this.props.endIcon === "task") {
      iconInButton = <img className = "icon-right" src = {iconTask}></img>;
    }
    if (this.props.startIcon === "beenhere") {
      iconInButton = <img className = "icon-left" src = {iconBeenhere}></img>;
    }
    if (this.props.endIcon === "beenhere") {
      iconInButton = <img className = "icon-right" src = {iconBeenhere}></img>;
    }

    if (this.props.color === "default") {
      buttonColor = "main-button";
    }
    if (this.props.color === "primary") {
      buttonColor = "primary-color";
    }
    if (this.props.color === "secondary") {
      buttonColor = "secondary-color";
    }
    if (this.props.color === "danger") {
      buttonColor = "dragon-color";
    }

    if (this.props.hoverAndFocus === "hover-focus-defult") {
      buttonHoverFocus = "hover-focus-default";
    }
    if (this.props.hoverAndFocus === "hover-focus-outline-text") {
      buttonHoverFocus = "hover-focus-outline-text";
    }
    if (this.props.hoverAndFocus === "hover-focus-primary") {
      buttonHoverFocus = "hover-focus-primary";
    }
    if (this.props.hoverAndFocus === "hover-focus-secondary") {
      buttonHoverFocus = "hover-focus-secondary";
    }
    if (this.props.hoverAndFocus === "hover-focus-dragon") {
      buttonHoverFocus = "hover-focus-dragon";
    }
    return (
      <button
        className={`button ${defaultButton} ${buttonVariant} ${buttonSize} ${disableShadow}
                                 ${buttonWithIconLeft} ${buttonWithIconRight} ${buttonDisable} 
                                 ${buttonColor} ${buttonSizeWithColor} ${buttonHoverFocus}`}
      >
        {buttonText}
        {iconInButton}
      </button>
    );
  }
}

export default Button;