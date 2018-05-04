import React, { Component } from 'react';

import './Menu.scss';

class Menu extends Component {
    let
    apresentarBotaoVoltar() {

        if (window.location.pathname !== "/") return <a href='/' className="prev"> <span className="icon-arrow-left"></span> Voltar</a>
    }

    tratarComportamentoDoBotao() {

        if (window.location.pathname !== "/") return <a href='/#projects'>Projects</a>
            else return <a href='#projects'>Projects</a>
    }

    render() {
        
        return (
            <header>
                <nav>
                    {this.apresentarBotaoVoltar()}
                    {this.tratarComportamentoDoBotao()}·
                    <a href="/resume">Resume</a>·
                    <a href="/blog">Blog</a>·
                    <a href="/contact">Contact</a>
                </nav>
            </header>
        );
    }
}

export default Menu;


