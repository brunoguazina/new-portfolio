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
            isLoaded: false,
            data: [],
            title: "",
        }
    }

    componentDidMount() {     
        let id = this.props.match.params.Id;
        let url = `https://brunoguazina-api.azurewebsites.net/project/${id}`;
          
        Api.get(url, (data) => {
            this.setState({
                data: data,
                title: data.title,
                isLoaded: true,
            });  
        });
    }


    render() {

        const { title, isLoaded, data } = this.state;
        
        if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div>
                    <ScrollToTopOnMount />
                    
                    <Helmet>
                        <title>Bruno Guazina - {title} </title>
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
    
                    <Navigation currentPage={this.state.data.id} />
                    <Footer />
    
                </div>
            )
        }
        
    }
}


export default Project;
