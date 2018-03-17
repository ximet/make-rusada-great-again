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

        this.coinbase = this.web3.eth.coinbase;
        this.balance = this.web3.eth.getBalance(this.coinbase);

    }

    handleSubmit() {
        this.setState({submitting: true});
        // Send data
        console.log(this.state.values);
        this.setState({values: {}});
    }

    handleChange({target}) {
        this.setState(({values}) => ({values: {...values, [target.name]: target.value}}));
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
                                <Input placeholder="Имя" onChange={this.handleChange} name="name"/>
                                <Input placeholder="Cтенболон" onChange={this.handleChange} name="stenobolon"/>
                                <Input placeholder="Этилэстренол" onChange={this.handleChange} name="Etilestirol"/>
                                <Input placeholder="Метриболон" onChange={this.handleChange} name="Metribolon"/>
                            </Col>
                        </Row>
                        <button className="button buttonSave" size="large" type="danger" onClick={this.handleSubmit}>Save...</button>
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
