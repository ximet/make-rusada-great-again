import React, { Component } from 'react';
import './App.css';
import logo from './assets/circles.gif';
import routesConfig from './routesConfig';

class App extends Component {
  constructor(props) {
    super(props);

    this.redirect = this.redirect.bind(this);
  }

  redirect(path) {
    this.props.history.push(path);
  }


  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" onClick={() => this.redirect(routesConfig.sportsmen.path)}/>
      </div>
    );
  }
}

export default App;
