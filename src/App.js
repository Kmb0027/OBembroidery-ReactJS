import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import picture1 from './pic1.jpg';
import picture2 from './pic2.jpg';
import {Link, Route, Switch} from 'react-router-dom';

const Home = () =>(
  <div>
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
          <p>
            Olivia Barfield Embroidery
          </p>
      </header> 
  </div>
)

const Contact = () =>(
        <div>
        <header className="Contact">
          <a
              className="App-link"
              href="https://www.instagram.com/obembroidery/"
              target="_blank"
              rel="noopener noreferrer"
          >
            See More on Instagram
          </a>
        </header>
        </div>
)

const Gallery = () =>(
        <div>
          <header className="Gallery">
          <h2>These items were handcrafted by Olivia.</h2>
            <figure>
              <img src={picture1} alt="Onesie Flower Embroidery" width="200" height="200" hspace="20"></img>
              <img src={picture2} alt="Wedding Bouquet" width="200" height="200"></img>
            </figure>
          </header>
        </div>
        
)
class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Route exact={true}path="/" component={Home}/>
        <Route path="/gallery" component={Gallery}/>
        <Route path="/contact" component={Contact}/>
          
       
      </div>
    );
  }
}

export default App;
