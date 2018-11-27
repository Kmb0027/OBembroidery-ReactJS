import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import picture1 from './pic1.jpg';
import picture2 from './pic2.jpg';


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
          <figure>
          <img src={picture1} alt="Onesie Flower Embroidery" width="200" height="200"></img>
          <img src={picture2} alt="Wedding Bouquet" width="200" height="200"></img>
          </figure>
        </header>
      </div>
    );
  }
}

export default App;
