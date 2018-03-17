import React, { Component } from 'react';
import './App.css';
import logo from './assets/rings.gif';
import Button from 'antd/lib/button';
import 'antd/lib/button/style/index.css'; 

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />

          <div className="content">
          <Button type="primary">Hello world!</Button>
          </div>
      </div>
    );
  }
}

export default App;
