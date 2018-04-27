import React, { Component } from 'react';
import './Menu.scss';

class Menu extends Component {
    render() {
        return (
            <header>
                <nav>
                    <a href="/html">Projects</a>·
                    <a href="/css">Resume</a>·
                    <a href="/blog">Blog</a>·
                    <a href="/js">Contact</a>
                </nav>
            </header>
        );
    }
}

export default Menu;


