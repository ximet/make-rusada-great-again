import React, {Component} from 'react';
import './App.css';
import routesConfig from '../routing/routesConfig';

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
                    <button className="button buttonRedirect" onClick={() => this.redirect(routesConfig.root.path)}>Enter new results</button>
                </div>
            </div>
        );
    }
}

export default App;
