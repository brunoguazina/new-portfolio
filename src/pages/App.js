import React, { Component } from 'react';

import Helmet from 'react-helmet'

import Menu from './../components/Menu';
import Cover from './../components/Cover';
import Projects from './../components/Projects';
import Brands from './../components/Brands';
import Footer from './../components/Footer';

import './../components/index.scss';

import brands from './../data/brands';

const Api = {
    get: (url, callback) => {
        fetch(url)
        .then((result) => {
            return result.json().then((response) => {
                callback(response);
            });
        },(error) => {
            console.log(error);
            return callback(null);
        });
    }
};

class App extends Component {

    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        Api.get('http://localhost:3000/projects', (data) => {
            this.setState({
                data: data || []
            });
        });
    }

    render() {
        const { data } = this.state;
        console.log(data);
        return (
            <div>
                <Helmet>
                    <title>Bruno Guazina - Product Designer and UX/UI Designer</title>
                    <meta name="theme-color" content="#FF0000" />
                </Helmet>
                
                <Menu />
                <Cover />
                <Projects data={this.state.data} />
                <Brands data={brands} />
                <Footer />
            </div>
        )
    }
}

export default App;