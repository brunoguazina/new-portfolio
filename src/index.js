import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from './pages/App';
import Resume from './pages/Resume';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/resume" component={Resume} />
        </Switch>
    </ BrowserRouter>,
    document.getElementById('root')
);
