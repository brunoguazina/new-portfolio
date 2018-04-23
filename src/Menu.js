import React, { Component } from 'react';
import './Menu.scss';

import logo from './image/logo.jpg';

class Menu extends Component {
    render() {
        return (
            <header>
                <img src={logo} className="logo" alt="logo" />
                <nav>
                    <a href="/html">Projects</a>·
                    <a href="/css">Resume</a>·
                    <a href="/js">Contact</a>
                </nav>
            </header>
        );
    }
}

export default Menu;


