import React, { Component } from "react";
import './App.css';
import Button from "./Button"

class App extends Component {
  render () {
    return (
      <div className="App">
        {/* Variant button */}
        <p className = "main-p"> {'<Button />'} </p>
        <Button />
        <p className = "main-p"> {'<Button variant="outline"/>'} </p>
        <Button 
          variant = "outline"
        />
        <p className = "main-p"> {'<Button variant="text"/>'} </p>
        <Button 
          variant = "text"
        />

        {/* Disable Shadow */}
        <p className = "main-p"> {'<Button disableShadow />'} </p>
        <Button disableShadow ="off"/>

        {/* Variant with Icon */}
        <div className="buttonWithIconWrapper">
          <div>
            <p className = "main-p"> {'<Button startIcon="local_grocery_store" />'} </p>
            <Button startIcon="local_grocery_store"/>
          </div>
          <div>
            <p className = "main-p"> {'<Button endIcon="local_grocery_store" />'} </p>
            <Button endIcon="local_grocery_store" />
          </div>
        </div>

        {/* Variant Size */}
        <div className="sizeClassesWrapper">
          <div>
            <p className = "main-p"> {'<Button size="sm" />'} </p>
            <Button size="sm" />
          </div>
          <div>
            <p className = "main-p"> {'<Button size="md" />'} </p>
            <Button size="md" />
          </div>
          <div>
            <p className = "main-p"> {'<Button size="lg" />'} </p>
            <Button size="lg" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
