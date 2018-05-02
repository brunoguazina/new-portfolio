import React, { Component } from 'react';
import './Cover.scss';

class Cover extends Component {
    render() {
        return (
            <section>
                <div id="intro">
                    <h2> Bruno A. Guazina </h2>
                    <h1> User Experience Designer currently working at Magazine Luiza</h1>
                </div>
                <span className="icon-arrow_down icon"></span>    
            </section>
        );
    }
}

export default Cover;


