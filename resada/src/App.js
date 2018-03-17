import React, { Component } from 'react';
import './App.css';
import logo from './assets/circles.gif';

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
