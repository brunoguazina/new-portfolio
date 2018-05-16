import React, { Component } from 'react';

import Helmet from 'react-helmet'

import Menu from './../components/Menu';
import Footer from './../components/Footer';
import Navigation from '../components/Navigation';

import projects from './../data/projects';

import './pages.scss';


class Project extends Component {

    constructor() {
        super();
        this.state = { data: []};
    }

    componentWillMount() {

        let params = this.props.match.params.Id;

        for (var value of projects) {

            if (value.url === params) {
                return (
                    this.setState({ data: value })
                )
            };
        }
    }

    listarProjetos(content, index) {
        return (
            <div key={index} className="content">
                <h4>{content.title}</h4>
                <p>{content.description}</p>
                <img src={content.img} alt={content.title} />
            </div>
        )
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
                    
                    <header>
                        <h1>{this.state.data.title}</h1>
                        <span>{this.state.data.description}</span>
                    </header>

                    {this.state.data.content.map(this.listarProjetos)}

                </section>
                
                <Navigation currentPage={this.state.data.id} data={projects} />
                <Footer />

            </div>
        )
    }
}

export default Project;
