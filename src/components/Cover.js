import React, { Component } from 'react';

import './Cover.scss';

class Cover extends Component {
    

    render() {

        return (
            <section id="cover">

                <div id="intro">
                    <h2> Bruno A. Guazina </h2>
                    <h1> User Experience Designer currently working at Magazine Luiza</h1>
                </div>

                <div id="learnMore">
                <a href="#projects">
                    <span className="txt">learn more</span>
                    <span className="icon-arrow_down icon"></span>
                </a>
                </div>

            </section>
        );
    }
}

export default Cover;


