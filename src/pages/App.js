import React, { Component } from 'react';
import Api from './../service/Service';

import Helmet from 'react-helmet'

import Menu from './../components/Menu';
import Cover from './../components/Cover';
import Projects from './../components/Projects';
import Footer from './../components/Footer';

import './../components/index.scss';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        let url = `http://api.brunoguazina.com/projects`;

        Api.get(url, (data) => {
            this.setState({
                data: data,
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
                <Projects data={data} />

                <Footer />
            </div>
        )
    }
}

export default App;