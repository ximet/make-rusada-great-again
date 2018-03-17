import React, {Component} from 'react';
import './App.css';
import Button from 'antd/lib/button';
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
                <div className="content">
                    <Button type="primary" onClick={() => this.redirect(routesConfig.root.path)}>Enter new results</Button>
                </div>
            </div>
        );
    }
}

export default App;
