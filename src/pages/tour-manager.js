import React, { Component } from 'react';

import Helmet from 'react-helmet'

import Menu from './../components/Menu';
import Footer from './../components/Footer';

import chart from './../images/tour-manager/organization.png';
import './about.scss';


class TourManager extends Component {

    render() {

        return (
            <div>

                <Helmet>
                    <title>Bruno Guazina - Product Designer and UX/UI Designer | Tour Manager</title>
                    <meta name="theme-color" content="#FF0000" />
                </Helmet>
                <Menu />

                <section className="main">

                    <h1> Tour Manager </h1>

                    <div className="content"> 
                        <p>
                            I’m Product Designer and UX/UI Designer from Brazil currently working at Magazine Luiza.
                            I have more than 10 years of experience, creating digital products for digital agencies, e-commerce,
                            software house, and helping startups turn ideas into innovative digital products.
                        </p>

                        <p>
                            I’m Product Designer and UX/UI Designer from Brazil currently working at Magazine Luiza.
                            I have more than 10 years of experience, creating digital products for digital agencies, e-commerce,
                            software house, and helping startups turn ideas into innovative digital products.
                        </p>

                        <img src={chart} alt="" />

                        <p>
                            I’m Product Designer and UX/UI Designer from Brazil currently working at Magazine Luiza.
                            I have more than 10 years of experience, creating digital products for digital agencies, e-commerce,
                            software house, and helping startups turn ideas into innovative digital products.
                        </p>
                    </div>
                </section>

                <Footer />

            </div>
        )
    }
}

export default TourManager;
