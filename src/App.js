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
        <div className="button-with-icon-wrapper">
          <div>
            <p className = "button-description"> {'<Button startIcon="local_grocery_store" />'} </p>
            <Button startIcon="local_grocery_store"/>
          </div>
          <div>
            <p className = "button-description"> {'<Button endIcon="local_grocery_store" />'} </p>
            <Button endIcon="local_grocery_store" />
          </div>
        </div>

        {/* Variant Size */}
        <div className="size-wrapper">
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
      </div>
    );
  }
}

export default App;
