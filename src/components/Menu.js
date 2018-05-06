import React, { Component } from 'react';

import { NavLink } from 'react-router-dom'

import './Menu.scss';

class Menu extends Component {

    apresentarBotaoVoltar() {

        if (window.location.pathname !== "/") return <NavLink to="/" className="logoMenu">BRUNO A. GUAZINA</NavLink>
    }

    render() {

        return (
            <header>
                <nav>
                    {this.apresentarBotaoVoltar()}
                    <NavLink to="/#projects" activeClassName="selected">Projects</NavLink>
                    <NavLink to="/about" activeClassName="selected">About</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                    <NavLink to="/contact" activeClassName="selected">Contact</NavLink>
                </nav>
            </header>
        );
    }
}

export default Menu;


