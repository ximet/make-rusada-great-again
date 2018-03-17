import React, {Component} from 'react';
import './App.css';
import logo from '../assets/rings.gif';
import Button from 'antd/lib/button';
import 'antd/lib/button/style/index.css';
import Input from 'antd/lib/input';
import 'antd/lib/input/style/index.css';
import Col from 'antd/lib/col';
import Row from 'antd/lib/row';
import routesConfig from '../routing/routesConfig';
import Web3 from 'web3';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            submitting: false
        };

        this.setWeb3();
        this.redirect = this.redirect.bind(this);
        this.submit = this.submit.bind(this);
    }

    setWeb3() {
        this.web3 = new Web3();
        this.web3.setProvider(new Web3.providers.HttpProvider("http://10.10.104.37:8545"));

        this.coinbase = this.web3.eth.coinbase;
        this.balance = this.web3.eth.getBalance(this.coinbase);

    }

    submit() {
        this.setState({submitting: true});
    }

    redirect(path) {
        console.log('Web3', this.web3);
        console.log('Coin base', this.coinbase);
        console.log('Balance', this.balance);
        this.props.history.push(path);
    }

    render() {
        const {submitting} = this.state;
        return (
            <div className="App">
                <img src={logo} className={submitting ? "App-logo loading" : "App-logo"} alt="logo"/>

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
                  <button className="button buttonSave" size="large" type="danger">Save...</button>
                </div>                <Button type="primary" className="goToButton"onClick={() => this.redirect(routesConfig.sportsmen.path)}>Go to Results</Button><Button
                        type="primary"
                        onClick={() => this.submit()}
                    >Submit</Button>
            </div>
        </div>


        );
    }
}

export default App;
