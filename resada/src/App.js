import React, { Component } from 'react';
import './App.css';
import logo from './assets/rings.gif';

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
