import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/Login';
import Register from './pages/Register';
import Main from './components/Main';
import Clients from './pages/Clients';


function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/main" component={Main}/>
                <Route path="/clients" component={Clients}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;

