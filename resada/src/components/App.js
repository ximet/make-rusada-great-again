import React, { Component } from 'react';
import './App.css';
import logo from '../assets/rings.gif';
import Button from 'antd/lib/button';
import 'antd/lib/button/style/index.css';
import Input from 'antd/lib/input';
import 'antd/lib/input/style/index.css';

import Form from 'antd/lib/form';
import 'antd/lib/form/style/index.css';

import Grid from 'antd/lib/grid';
import 'antd/lib/grid/style/index.css';

import Col from 'antd/lib/col';


import Row from 'antd/lib/row';



import routesConfig from '../routesConfig';

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

                <div className="form">
                  <Row gutter={16} align="middle" justify="center">
                  <Col span={10} offset="7">
                    <Input placeholder="Имя" />
                    <Input placeholder="Cтенболон" />
                    <Input placeholder="Этилэстренол" />
                    <Input placeholder="Метриболон" />
                  </Col>
                  </Row>
                  <Button className="buttonSave" size="large" type="danger">Save...</Button>
                </div>
               
                <Button type="primary" className="goToButton" onClick={() => this.redirect(routesConfig.sportsmen.path)}>Go to Results</Button>

            </div>
        </div>


    );
  }
}

export default App;
