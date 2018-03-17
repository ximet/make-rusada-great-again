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
        const {match: {params: {passed, result}}} = this.props;
        return (
            <div className="App">
                <div className="content">
                    <h1>Has passed: <strong className={passed === 'false' ? "failed" : "passed"}>{passed}</strong></h1>
                    <h1>Details: {result.split(',').join('      ')}</h1>
                    <button
                        className="button buttonRedirect"
                        onClick={() => this.redirect(routesConfig.root.path)}>
                        Show other results
                    </button>
                </div>
            </div>
        );
    }
}

export default App;
