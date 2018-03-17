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
        this.handleGetAccounts = this.handleGetAccounts.bind(this);
    }

    setWeb3() {
        this.web3 = new Web3();
        this.web3.setProvider(new Web3.providers.HttpProvider("http://10.10.104.37:8545"));

        const myContract = this.web3.eth.contract(json);
        this.contractInstance = myContract.at('0x7f42f88091b56fe13cc7a0c17cab7997208dc859');

    }

    handleGetAccounts(accounts) {
        debugger;
        console.log(accounts);
    }

    handleSubmit() {
        this.setState({submitting: true});
        const {name, stenobolon, etilestirol, metribolon} = this.state;
        this.contractInstance.saveResults(
            parseInt(name),
            parseInt(stenobolon),
            parseInt(etilestirol),
            parseInt(metribolon),
            {
                from: '0x71174fe05F7d03E65e2C894Baa36c09f80F3c02C',
                to: '0x7f42f88091b56fe13cc7a0c17cab7997208dc859'
            }).then(() => {
            this.setState({submitting: false});
        });
        this.setState({values: {}});
    }

    handleChange({target}) {
        this.setState(({values}) => ({values: {...values, [target.name]: target.value}}));
    }

    redirect(path) {
        console.log(this.contractInstance.passed(3).toString());
        console.log(this.contractInstance.getResultDetails(3).toString());
        //this.web3.eth.getAccounts(this.handleGetAccounts);

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
                                <Input placeholder="Имя" onChange={this.handleChange} name="name"/>
                                <Input placeholder="Cтенболон" onChange={this.handleChange} name="stenobolon"/>
                                <Input placeholder="Этилэстренол" onChange={this.handleChange} name="etilestirol"/>
                                <Input placeholder="Метриболон" onChange={this.handleChange} name="metribolon"/>
                            </Col>
                        </Row>
                        <button className="button buttonSave" size="large" type="danger" onClick={this.handleSubmit}>
                            Save...
                        </button>
                    </div>
                    <button className="button buttonRedirect"
                            onClick={() => this.redirect(routesConfig.sportsmen.path)}>Go to Results
                    </button>
                </div>
            </div>
        );
    }
}

export default App;
