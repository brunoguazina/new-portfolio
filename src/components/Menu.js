import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import './Menu.scss';

class Menu extends Component {

    apresentarBotaoVoltar() {

        if (window.location.pathname !== "/") return <NavLink to="/" className="logoMenu">Bruno A. Guazina</NavLink>
    }
    apresentarProjects() {

        if (window.location.pathname !== "/") return <NavLink to="/#projects">Projects</NavLink>
            else return <a href="/#projects"> Projects </a>
    }
    render() {

        return (
            <header>
                <nav>
                    {this.apresentarBotaoVoltar()}
                    {this.apresentarProjects()}
                    <NavLink to="/about" activeClassName="selected">About</NavLink>
                    <NavLink to="/contact" activeClassName="selected">Contact</NavLink>
                </nav>
            </header>
        );
    }
}

export default Menu;


