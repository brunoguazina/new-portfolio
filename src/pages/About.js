import React, { Component } from 'react';

import Helmet from 'react-helmet'

import Menu from './../components/Menu';
import Footer from './../components/Footer';

import './pages.scss';
import thumb from './../images/bruno-guazina.jpg';

class About extends Component {

    render() {

        return (
            <div>
                <Helmet>
                    <title>Bruno Guazina - Product Designer and UX/UI Designer | About</title>
                    <meta name="theme-color" content="#FF0000" />
                </Helmet>
                <Menu />

                <section className="main">

                    <img className="coverAbout" src={thumb} alt="Bruno Guazina - Product Designer and UX/UI Designer" />

                    <h1> Hi, I'm Bruno Guazina! </h1>

                    <div className="content"> 
                        <p>
                            I’m Product Designer and UX/UI Designer from Brazil currently working at Magazine Luiza.
                        </p>
                        <p>    
                            I have more than 10 years of experience, creating digital products for digital agencies, e-commerce,
                            software house, and helping startups from around the world turn ideas into innovative digital products.
                        </p>
                        <p>
                            I believe that access to information and technology creates a more just and inclusive world.
                            That is why my goal is to identify people's problems and needs and to solve them by designing and
                            implementing simple, creative, and objective solutions.
                        </p>
                        <p>
                            In addition, I live to travel and photograph.
                            I like to know new places, cultures, music and those responsible for all this ... people! ;)
                        </p>
                    </div>
                    <a href="/" className="btnResume">Get my resume</a>
                </section>

                <Footer />
            </div>
        )
    }
}

export default About;
