import React, {Component} from 'react';
import './App.css';
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
                <h1 onClick={() => this.redirect(routesConfig.root.path)}>Sportsmen</h1>
            </div>
        );
    }
}

export default App;
