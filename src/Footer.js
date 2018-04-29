import React, { Component } from 'react';

import './Footer.scss';

class Footer extends Component {

    render() {
        return (
            <footer id="contact">
                <div className="wrap">
                    <h4>Like what you see?</h4>
                    <p className="footer-bold">Learn more <a href="/resume/">about me</a>, follow me or contact me below</p>
                    <ul className="clear">
                        <li><a href="https://twitter.com/andrewcouldwell" className="icon-medium"> </a></li>
                        <li><a href="http://www.behance.net/andrewcouldwell" className="icon-github"> </a></li>
                        <li><a href="http://www.behance.net/andrewcouldwell" className="icon-linkedin"> </a></li>
                        <li><a href="http://www.behance.net/andrewcouldwell" className="icon-youtube"> </a></li>
                        <li><a href="http://www.behance.net/andrewcouldwell" className="icon-instagram"> </a></li>
                        <li><a href="http://www.behance.net/andrewcouldwell" className="icon-facebook"> </a></li>
                    </ul>
                    <p className="email clear"><span className="maily"><a href="mailto:bruno@guazina.com">bruno@guazina.com</a></span></p>
                </div>
            </footer>
        )
    }
}

export default Footer;
