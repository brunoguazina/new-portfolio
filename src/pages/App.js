import React, { Component } from 'react';

import Helmet from 'react-helmet'

import Menu from './../components/Menu';
import Cover from './../components/Cover';
import Projects from './../components/Projects';
import Brands from './../components/Brands';
import Footer from './../components/Footer';

import './../components/index.scss';

import brands from './../data/brands';
import projects from './../data/projects';


class App extends Component {

    render() {

        return (
            <div>
                <Helmet>
                    <title>Bruno Guazina - Product Designer and UX/UI Designer</title>
                    <meta name="theme-color" content="#FF0000" />
                </Helmet>
                <Menu />
                <Cover />
                <Projects data={projects} />
                <Brands data={brands} />
                <Footer />
            </div>
        )
    }
}

export default App;