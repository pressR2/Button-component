import React, { Component } from "react";
import './App.css';
import Button from "./Button"

class App extends Component {
  render () {
    const buttonLabel = "&:hover, &:focus";
    const iconText = "local_grocery_store";
    return (
      <div className="App">
        <header> BUTTONS </header>

        {/* Variant button */}
        <div className = "variant-wrapper">
          <div>
            <p className = "button-description"> {'<Button />'}</p>
            <Button />
            <p className = "button-description"> {'<Button variant="outline" />'}</p>
            <Button variant = "outline" />
            <p className = "button-description"> {'<Button variant="text" />'}</p>
            <Button variant = "text" />
          </div>
          <div>
            <p className = "button-description hover-focus-label"> {buttonLabel}</p>
            <Button hoverAndFocus = "hover-focus-defult" />
            <p className = "button-description hover-focus-label"> {buttonLabel}</p>
            <Button 
              variant = "outline"
              hoverAndFocus = "hover-focus-outline-text"
            />
            <p className = "button-description hover-focus-label"> {buttonLabel}</p>
            <Button 
              variant = "text"
              hoverAndFocus = "hover-focus-outline-text"
            />
          </div>
        </div>

        {/* Disable Shadow */}
        <p className = "button-description"> {'<Button disableShadow />'}</p>
        <Button disableShadow = "on" />

        {/* Disable button */}
        <div className = "disable-button-wrapper">
          <div>
            <p className = "button-description"> {'<Button disabled />'}</p>
            <Button disabledButton = "on" />
          </div>
          <div>
            <p className = "button-description"> {'<Button variant="text" disabled />'}</p>
              <Button 
                variant = "text"
                disabledButton = "on"
              />
          </div>
        </div>

        {/* Variant with Icon */}
        {/* choose props text for different icon. Available icon name: local_grocery_store, email, link, task, beenhere */}
        <div className = "button-with-icon-wrapper">
          <div>
            <p className = "button-description"> {`<Button startIcon=${iconText} />`}</p>
            <Button startIcon = {iconText} />
          </div>
          <div>
            <p className = "button-description"> {`<Button endIcon=${iconText} />`}</p>
            <Button endIcon = {iconText} />
          </div>
        </div>

        {/* Variant Size */}
        <div className = "size-wrapper">
          <div>
            <p className = "button-description"> {'<Button size="sm" />'}</p>
            <Button size = "sm" />
          </div>
          <div>
            <p className = "button-description"> {'<Button size="md" />'}</p>
            <Button size = "md" />
          </div>
          <div>
            <p className = "button-description"> {'<Button size="lg" />'}</p>
            <Button size = "lg" />
          </div>
        </div>

        {/* Variant color */}
        <div className = "color-wrapper">
          <div>
            <p className = "button-description"> {'<Button color="default" />'}</p>
            <Button color = "default" />
          </div>
          <div>
            <p className = "button-description"> {'<Button color="primary" />'}</p>
            <Button color = "primary" />
          </div>
          <div>
            <p className = "button-description"> {'<Button color="secondary" text="Secondary" />'}</p>
            <Button 
              color = "secondary"
              text = "Secondary"
            />
          </div>
          <div>
            <p className = "button-description"> {'<Button color="danger" text="Danger" />'}</p>
            <Button 
              color = "danger"
              text = "Danger" 
            />
          </div>
        </div>

        {/*Focus hover variant*/}
        <div className = "color-wrapper">
          <div>
            <p className = "button-description hover-focus-label"> {buttonLabel}</p>
            <Button 
              color = "default"
              hoverAndFocus = "hover-focus-defult"
            />
          </div>
          <div className = "focus-hover-wrapper">
            <div>
              <p className = "button-description"></p>
              <Button 
                color = "primary" 
                hoverAndFocus = "hover-focus-primary"
              />
            </div>
            <div className = "button-hover-focus-secondary">
              <p className = "button-description"></p>
              <Button 
                color = "secondary"
                text = "Secondary"
                hoverAndFocus ="hover-focus-secondary"
              />
            </div>
            <div className = "button-hover-focus-red">
              <p className = "button-description"></p>
              <Button 
                color = "danger"
                text = "Danger"
                hoverAndFocus = "hover-focus-dragon"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
