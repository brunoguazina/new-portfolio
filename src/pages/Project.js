import React, { Component } from 'react';

import Helmet from 'react-helmet'

import Menu from './../components/Menu';
import Footer from './../components/Footer';
import Navigation from '../components/Navigation';
import Content from '../components/Content';
import Sidebar from '../components/Sidebar';

import Api from './../service/Service';

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

    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
    }

    componentWillMount() {
        let id = this.props.match.params.Id;
        let url = `http://localhost:3001/project/${id}`;

        Api.get(url, (data) => {
            this.setState({
                data: data
            });
        });
    }

    teste(value) {
        if (value.length !== 0) {
            return value.id;
        };
    }

    teste2(value) {
        if (value.length !== 0) {
            return value;
        };
    }

    render() {
        
        const { data } = this.state;
        
        return (
            <div>
                <ScrollToTopOnMount />
                
                <Helmet>
                    <title>Bruno Guazina - Product Designer and UX/UI Designer</title>
                </Helmet>

                <Menu />

                <div className="header">
                    <h1> <span> {data.title} </span> </h1>
                    <span> {data.subtitle} </span>
                </div>

                <section className="main">
                    <Content data={data} />
                    <Sidebar data={data} />
                </section>

                <Navigation currentPage={this.teste(data)} data={this.teste2(data)} />
                
                <Footer />

            </div>
        )
    }
}


export default Project;
