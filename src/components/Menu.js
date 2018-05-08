import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import './Menu.scss';

class Menu extends Component {

    apresentarBotaoVoltar() {

        if (window.location.pathname !== "/") return <NavLink to="/" className="logoMenu">Bruno A. Guazina</NavLink>
    }

    render() {

        return (
            <header>
                <nav>
                    {this.apresentarBotaoVoltar()}
                    <a href="/#projects">Projects</a>
                    <NavLink to="/about" activeClassName="selected">About</NavLink>
                    <NavLink to="/blog" activeClassName="selected">Blog</NavLink>
                    <NavLink to="/contact" activeClassName="selected">Contact</NavLink>
                </nav>
            </header>
        );
    }
}

export default Menu;


