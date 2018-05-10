import React, { Component } from 'react';

import './Cover.scss';

class Cover extends Component {

    tratarElemento() {
        return (window.addEventListener("scroll", function () {
            
            let elemento = document.getElementById("learnMore");

            if (window.scrollY < "50") elemento.style.visibility = "visible"; 
            else elemento.style.visibility = "hidden";

            })
        )
    }

    render() {

        return (
            <section id="cover">

                <div id="intro">
                    <h2> Bruno A. Guazina </h2>
                    <h1> User Experience Designer currently working at Magazine Luiza</h1>
                </div>

                <div id="learnMore" className={this.tratarElemento()}>
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


