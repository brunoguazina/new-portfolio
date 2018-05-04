import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from './pages/App';
import Resume from './pages/Resume';
import ComponenteDePagina404 from './pages/ComponenteDePagina404';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/resume" component={Resume} />
            <Route path='*' component={ComponenteDePagina404} />
        </Switch>
    </ BrowserRouter>,
    document.getElementById('root')
);
