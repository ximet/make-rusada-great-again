/* eslint-disable react/jsx-max-props-per-line*/
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import routesConfiguration from './routesConfig';
import App from './App';
import SportsMen from './SportsMen';

const {
          root,
          sportsmen
      } = routesConfiguration;

export default (
    <Switch>
        <Route exact path={root.path} component={App}/>
        <Route exact path={sportsmen.path} component={SportsMen}/>
    </Switch>
);
