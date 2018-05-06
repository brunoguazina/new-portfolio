import React, { Component } from 'react';

import { NavLink } from 'react-router-dom'

import './Menu.scss';

class Menu extends Component {

    apresentarBotaoVoltar() {

        if (window.location.pathname !== "/") return <NavLink to="/" className="prev"><span className="icon-arrow-left"></span> Home</NavLink>
    }

    tratarComportamentoDoBotao() {

        if (window.location.pathname !== "/") return <NavLink to="/#projects" activeClassName="selected">Projects</NavLink>
        else return <a href='#projects' className="projects" id="linkProjects">Projects</a>
    }

    render() {

        return (
            <header>
                <nav>
                    {this.apresentarBotaoVoltar()}
                    {this.tratarComportamentoDoBotao()}
                    <NavLink
                        to="/about"
                        activeClassName="selected"
                    >About</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                    <NavLink
                        to="/contact"
                        activeClassName="selected"
                    >Contact</NavLink>
                </nav>
            </header>
        );
    }
}

export default Menu;


