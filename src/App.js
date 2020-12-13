import React, { Component } from "react";
import './App.css';
import Button from "./Button"

class App extends Component {
  render () {
    return (
      <div className="App">
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
      </div>
    );
  }
}

export default App;
