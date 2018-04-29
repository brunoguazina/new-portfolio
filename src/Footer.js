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
                        <li><a href="https://twitter.com/andrewcouldwell" className="icon-twitter">Twitter</a></li>
                        <li><a href="https://dribbble.com/andrewcouldwell" className="icon-dribbble">Dribbble</a></li>
                        <li><a href="https://medium.com/@andrewcouldwell" className="icon-medium">Medium</a></li>
                        <li><a href="http://uk.linkedin.com/in/roomfive" className="icon-linkedin">LinkedIn</a></li>
                        <li><a href="http://www.behance.net/andrewcouldwell" className="icon-behance">Behance</a></li>
                    </ul>
                    <p className="email clear"><span className="maily"><a href="mailto:bruno@guazina.com">bruno@guazina.com</a></span></p>
                </div>
            </footer>
        )
    }
}

export default Footer;
