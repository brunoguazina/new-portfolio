import React, { Component } from 'react';

import Helmet from 'react-helmet'

import Menu from './../components/Menu';
import Footer from './../components/Footer';
import Navigation from '../components/Navigation';

import projects from './../data/projects';

import './about.scss';


class Project extends Component {

    constructor() {
        super();
        this.state = {data : []};
    }

    componentWillMount() {

        let params = this.props.match.params.Id;

        for (var value of projects) {

            if (value.url === params) {
                return (
                    this.setState({data:value})
                )
            };
        }
    }

    render() {
        console.log(this.state.data);        
        return (
            <div>
                
                <Helmet>
                    <title>Bruno Guazina - Product Designer and UX/UI Designer | {this.state.data.title}</title>
                </Helmet>
                
                <Menu />

                <section className="main">
                    <h1> {this.state.data.title} </h1>
                    <span> {this.state.data.description} </span>
                </section>

                <Navigation page={this.state} />
                <Footer />

            </div>
        )
    }
}

export default Project;
