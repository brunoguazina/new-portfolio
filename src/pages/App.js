import React, { Component } from 'react';

import Helmet from 'react-helmet'

import Menu from './../components/Menu';
import Cover from './../components/Cover';
import Projects from './../components/Projects';
import Brands from './../components/Brands';
import Footer from './../components/Footer';

import './../components/index.scss';

import Api from './../service/Service';


class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        let url = `https://brunoguazina-api.azurewebsites.net/projects`;

        Api.get(url, (data) => {
            this.setState({
                data: data || []
            });
        });
    }

    

    render() {
        const { data } = this.state;

        return (
            <div>
                <Helmet>
                    <title>Bruno Guazina - Product Designer and UX/UI Designer</title>
                    <meta name="theme-color" content="#FF0000" />
                </Helmet>
                
                <Menu />
                <Cover />
                <Projects data={data} />
                <Brands />
                <Footer />
            </div>
        )
    }
}

export default App;