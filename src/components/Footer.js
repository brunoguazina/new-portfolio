import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './Footer.scss';

class Footer extends Component {

    render() {
        return (
            <footer id="contact">
                <div className="wrap">
                    <h4>Like what you see?</h4>
                    <p className="footer-bold">Learn more <Link to="/about">about me</Link>, follow me or contact me below</p>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/bguazina/" className="icon-linkedin"> </a></li>
                        <li><a href="https://medium.com/@brunoguazina" className="icon-medium"> </a></li>
                        <li><a href="https://github.com/brunoguazina" className="icon-github"> </a></li>
                        <li><a href="https://www.youtube.com/channel/UCT35R6tsgcFTs_k_D9hzU-Q" className="icon-youtube"> </a></li>
                        <li><a href="https://www.instagram.com/brunoguazina/" className="icon-instagram"> </a></li>
                    </ul>
                    
                    <p className="email clear">
                        <span className="maily">
                            <a href="mailto:bruno@guazina.com">bruno@guazina.com</a>
                        </span>
                    </p>
                </div>
            </footer>
        )
    }
}

export default Footer;
