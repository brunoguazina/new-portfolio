import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from './pages/App';
import About from './pages/About';
import TourManager from './pages/tour-manager';

import ComponenteDePagina404 from './pages/ComponenteDePagina404';


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/about" component={About} />
            <Route path="/tour-manager" component={TourManager} />
            <Route path='*' component={ComponenteDePagina404} />
        </Switch>
    </ BrowserRouter>,
    document.getElementById('root')
);
