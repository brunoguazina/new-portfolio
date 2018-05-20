import React, { Component } from 'react';

import Helmet from 'react-helmet'

import Menu from './../components/Menu';
import Footer from './../components/Footer';
import Navigation from '../components/Navigation';

import projects from './../data/projects';
import Tag from './../components/Tag';

import './pages.scss';

class ScrollToTopOnMount extends Component {
    componentDidMount() {
      window.scrollTo(0, 0)
    }
    
    render() {
      return null
    }
  }

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
            <div key={index}>
                <h4><span> {content.title} </span></h4>
                <p>{content.description}</p>
                <img src={content.img} alt={content.title} />
            </div>
        )
    }

    render() {
        console.log(this.state.data);
        return (
            <div>
                < ScrollToTopOnMount />
                <Helmet>
                    <title>Bruno Guazina - Product Designer and UX/UI Designer | {this.state.data.title}</title>
                </Helmet>

                <Menu />

                <div className="header">
                    <h1>{this.state.data.title}</h1>
                    <span>{this.state.data.description}</span>
                </div>

                <section className="main">
                    
                    <article className="content">
                        {this.state.data.content.map(this.listarProjetos)}
                    </article>

                    <aside className="sideBar">
                    <div>
                        <h4>About</h4>
                        <p>Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus suscipit tortor eget felis porttitor volutpat. Cras ultricies ligula sed magna dictum porta. Donec sollicitudin molestie malesuada. </p>
                    </div>

                    <div>
                        <h4>Role</h4>
                        <p>Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus suscipit tortor eget felis porttitor volutpat. Cras ultricies ligula sed magna dictum porta. Donec sollicitudin molestie malesuada. </p>
                    </div>

                    <Tag data={this.state.data.tags} />
                    </aside>

                </section>
                
                <Navigation currentPage={this.state.data.id} data={projects} />
                <Footer />

            </div>
        )
    }
}

export default Project;
