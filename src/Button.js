import React from "react";

class Button extends React.Component {

    render() {
        // let str = ''
        // let buttonClass = ''
        // if (this.props.variant === undefined) {
        let buttonClass = 'main-button'
        let str = '<Button />'
        // }
        if (this.props.variant === 'outline') {
          buttonClass = 'main-button-outline'
          str = '<Button variant="outline"/>'
        }
        if ( this.props.variant === 'text') {
          buttonClass = 'main-button-text'
          str = '<Button variant="text"/>'
        }
        return (
            <div>
                <p className = "main-p"> {str} </p>
                <button  className = {`id-button ${buttonClass}`}> Default </button>
            </div>
           
        )
    
    }
}

export default Button;