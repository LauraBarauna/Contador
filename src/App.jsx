import './Styles/style.css';
import React, { useState } from "react";

class App extends React.Component{
  constructor(){
    super();
    this.state = { contador: 0, style: "dark"};
  }

  componentDidMount() {
    document.body.className = this.state.style;
  }

  changeStyle = () => {
    const { style } = this.state;
    const newStyle = style === "light" ? "dark" : "light";
    this.setState({ style: newStyle }, () => {
      document.body.className = newStyle;
    });
  }

  render(){
    const { style } = this.state;
    const buttonText = style === "light" ? "🌙" : "☀️";
    return (
      <div className={`app ${style}`}>
        <header>
          <div className="theme">
          <button className="button" onClick={this.changeStyle}>
          {buttonText}
          </button>
          </div>
          <main>
            <div className={`box ${style}`}>  
              <h1>{this.state.contador}</h1>
              <div className="buttons">
                <button onClick={() => this.setState({ contador: this.state.contador + 1 })}>
                  Aumentar
                </button>
                <button onClick={() => this.setState({ contador: this.state.contador - 1 })}>
                  Diminuir
                </button>
              </div>
            </div>
          </main>
        </header>
      </div>
    );
  }
}

export default App;
