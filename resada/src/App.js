import React, { Component } from 'react';
import './App.css';
import logo from './assets/rings.gif';
import Button from 'antd/lib/button';
import 'antd/lib/button/style/index.css';
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
            <img src={logo} className="App-logo" alt="logo" />

            <div className="content">
                <Button type="primary" onClick={() => this.redirect(routesConfig.sportsmen.path)}>Hello world!</Button>
            </div>
        </div>


    );
  }
}

export default App;
