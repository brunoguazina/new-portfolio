import React, { Component } from 'react';

import './Menu.scss';

class Menu extends Component {

    apresentarBotaoVoltar() {

        if (window.location.pathname !== "/") return <a href='/' className="prev"> <span className="icon-arrow-left"></span> Home</a>
    }

    tratarComportamentoDoBotao() {

        if (window.location.pathname !== "/") return <a href='/#projects'>Projects</a>
        else return <a href='#projects' className="projects" id="linkProjects">Projects</a>
    }

    render() {

        return (
            <header>
                <nav>
                    {this.apresentarBotaoVoltar()}
                    {this.tratarComportamentoDoBotao()}·
                    <a href="/about">About</a>·
                    <a href="/blog">Blog</a>·
                    <a href="/contact">Contact</a>
                </nav>
            </header>
        );
    }
}

export default Menu;


