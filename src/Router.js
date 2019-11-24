import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import UnderProduction from './UderProduction';
import App from './App';


const Routes =() => (
    
    <BrowserRouter >
    <Switch>
        <Route exact path='/' component={App} />
        <Route component={UnderProduction} />
    </Switch>
    </BrowserRouter>
    
);


export default Routes;
