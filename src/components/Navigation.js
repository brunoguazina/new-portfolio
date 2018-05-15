import React, { Component } from 'react';

import './Navigation.scss';


class Navigation extends Component {

    render() {

        return (
            <section id="navigation">
                <div className="left"> prev </div>
                <div className="rigth"> next </div>
            </section>
        )
    }
}

export default Navigation;
