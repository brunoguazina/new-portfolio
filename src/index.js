import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './pages/App';
import About from './pages/About';
import Project from './pages/Project';
import Login from './pages/Login';

import ComponenteDePagina404 from './pages/ComponenteDePagina404';

import { AuthProvider } from "./service/Auth";
import PrivateRoute from "./service/PrivateRoute";

ReactDOM.render(
    <AuthProvider>
        <Router>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/about" exact component={About} />
                <PrivateRoute path="/project/:Id" component={Project} />
                <Route path="/login" exact component={Login} />
                <Route path='*' component={ComponenteDePagina404} />
            </Switch>
        </ Router>
    </AuthProvider>,
    document.getElementById('root')
);
