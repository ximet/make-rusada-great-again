import React, {Component} from 'react';
import './App.css';
import logo from '../assets/rings.gif';
import Input from 'antd/lib/input';
import 'antd/lib/input/style/index.css';
import 'antd/lib/grid/style/index.css';
import Col from 'antd/lib/col';
import Row from 'antd/lib/row';
import routesConfig from '../routing/routesConfig';
import Web3 from 'web3';
import json from '../eth.json';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            submitting: false,
            values: {}
        };

        this.setWeb3();
        this.redirect = this.redirect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    setWeb3() {
        this.web3 = new Web3();
        this.web3.setProvider(new Web3.providers.HttpProvider("http://10.10.104.37:8545"));

        const myContract = this.web3.eth.contract(json);
        this.contractInstance = myContract.at('0x681d41c00c0d921491eebe7e55449f9bb2cd04bd');

    }

    handleSubmit() {
        if(!this.state.values.name) {
            return;
        }
        this.setState({submitting: true});
        setTimeout(() => this.redirect(parseInt(this.state.values.name), routesConfig.sportsmen.path), 1500);
    }

    handleChange({target}) {
        this.setState(({values}) => ({values: {...values, [target.name]: target.value}}));
    }

    redirect(param, path) {
        const passed = this.contractInstance.passed(param).toString();
        const result = this.contractInstance.getResultDetails(param).toString();
        this.props.history.push(`${path.replace(':passed', passed).replace(':result', result)}`);
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
                                <Input placeholder="Имя" onChange={this.handleChange} name="name"/>
                                <Input placeholder="Cтенболон" onChange={this.handleChange} name="stenobolon"/>
                                <Input placeholder="Этилэстренол" onChange={this.handleChange} name="etilestirol"/>
                                <Input placeholder="Метриболон" onChange={this.handleChange} name="metribolon"/>
                            </Col>
                        </Row>
                    </div>
                    <button className="button buttonRedirect"
                            onClick={this.handleSubmit}>Go to Results
                    </button>
                </div>
            </div>
        );
    }
}

export default App;
