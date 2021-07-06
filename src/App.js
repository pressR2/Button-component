import React, { Component } from "react";
import './App.css';
import Button from "./Button"

class App extends Component {
  render () {
    return (
      <div className="App">
        {/* Variant button */}
        <p className = "button-description"> {'<Button />'} </p>
        <Button />
        <p className = "button-description"> {'<Button variant="outline"/>'} </p>
        <Button 
          variant = "outline"
           color="secondary"
          // //  size="lg"
          // disabledButton = "on"
        />
        <p className = "button-description"> {'<Button variant="text"/>'} </p>
        <Button 
          variant = "text"
        />

        {/* Disable Shadow */}
        <p className = "button-description"> {'<Button disableShadow />'} </p>
        <Button disableShadow ="on"/>

        {/* Disable button */}
        <p className = "button-description"> {'<Button disabled />'} </p>
        <Button disabledButton = "on"/>

        {/* Variant with Icon */}
        <div className = "button-with-icon-wrapper">
          <div>
            <p className = "button-description"> {'<Button startIcon="local_grocery_store" />'} </p>
            <Button startIcon = "local_grocery_store"/>
          </div>
          <div>
            <p className = "button-description"> {'<Button endIcon="local_grocery_store" />'} </p>
            <Button endIcon="local_grocery_store" />
          </div>
        </div>

        {/* Variant Size */}
        <div className = "size-wrapper">
          <div>
            <p className = "button-description"> {'<Button size="sm" />'} </p>
            <Button size="sm" />
          </div>
          <div>
            <p className = "button-description"> {'<Button size="md" />'} </p>
            <Button size="md" />
          </div>
          <div>
            <p className = "button-description"> {'<Button size="lg" />'} </p>
            <Button size="lg" />
          </div>
        </div>

        {/* Variant color */}
        <div className = "color-wrapper">
          <div>
            <p className = "button-description"> {'<Button color="default" />'} </p>
            <Button color="default" />
          </div>
          <div>
            <p className = "button-description"> {'<Button color="primary" />'} </p>
            <Button color="primary" />
          </div>
          <div>
            <p className = "button-description"> {'<Button color="secondary" text="Secondary" />'} </p>
            <Button color="secondary"
            text="Secondary" />
          </div>
          <div>
            <p className = "button-description"> {'<Button color="danger" text="Danger" />'} </p>
            <Button color="danger"
            text="Danger" />
          </div>
        </div>

        {/*Focus hover variant*/}
        <div className = "color-wrapper">
          <div>
            <p className = "button-description">{`&:hover, &:focus`}</p>
            <Button color="default"
            hoverAndFocus ="hover-focus-defult"/>
          </div>
          <div className = "focus-hover-wrapper">
            <div>
              <p className = "button-description"></p>
              <Button color="primary" 
              hoverAndFocus ="hover-focus-primary" />
            </div>
            <div className = "button-hover-focus-secondary">
              <p className = "button-description"></p>
              <Button color="secondary"
              text="Secondary"
              hoverAndFocus ="hover-focus-secondary" />
            </div>
            <div className = "button-hover-focus-red">
              <p className = "button-description"></p>
              <Button color="danger"
              text="Danger"
              hoverAndFocus ="hover-focus-dragon" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
