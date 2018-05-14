import React, { Component } from 'react';

import Helmet from 'react-helmet'

import Menu from './../components/Menu';
import Footer from './../components/Footer';
import Navigation from '../components/Navigation';

import projects from './../data/projects';

import './about.scss';


class Project extends Component {

    teste(page, projects) {
        for (let value of projects) {

            if (value.url === page) {
                console.log(value);                
                return value.title;
            };

        }
    }
    
    render() {
        
        const { match } = this.props;
        var params = match.params.Id;
        
        return (
            <div>
        
                <Helmet>
                    <title>Bruno Guazina - Product Designer and UX/UI Designer | {params}</title>
                </Helmet>
                
                <Menu />

                <section className="main">
                    <h1> {this.teste(params, projects)} </h1>
                </section>

                <Navigation page={params} />
                <Footer />

            </div>
        )
    }
}

export default Project;
