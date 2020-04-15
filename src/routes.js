import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './components/Dashboard';


function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/dashboard" component={Dashboard}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;

