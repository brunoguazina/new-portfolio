import React, { Component } from 'react';

import './Navigation.scss';


class Navigation extends Component {

    teste(page, projects) {

        for (let value of projects) {

            if (value.url === page) {
                console.log(value);                
                return value;
            };

        }
    }

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
