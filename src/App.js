import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Olivia Barfield Embroidery
          </p>
          <a
            className="App-link"
            href="https://www.instagram.com/obembroidery/"
            target="_blank"
            rel="noopener noreferrer"
          >
            See More
          </a>
        </header>
      </div>
    );
  }
}

export default App;
