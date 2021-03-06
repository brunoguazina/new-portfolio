import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

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
                    <a href="http://blog.brunoguazina.com" >Blog</a>
                    <NavLink to="/about" activeClassName="selected">About me</NavLink>
                </nav>
            </header>
        );
    }
}

export default Menu;


