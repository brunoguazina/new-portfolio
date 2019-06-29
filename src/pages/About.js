import React, { Component } from 'react';

import Helmet from 'react-helmet'

import Menu from './../components/Menu';
import Footer from './../components/Footer';

import Api from './../service/Service';

import './pages.scss';


class About extends Component {

        constructor(props) {
            super(props)
            this.state = {
                data: [],
            }
        }
    
        componentDidMount() {     
            let url = `https://brunoguazina-api.azurewebsites.net/about`;
              
            Api.get(url, (data) => {
                this.setState({
                    data: data,
                    title: data.title,
                });  
            });
        }

    render() {

        const {data} = this.state;
        console.log(data);
        return (
            <div>
                <Helmet>
                    <title>Bruno Guazina - Product Designer and UX/UI Designer</title>
                    <meta name="theme-color" content="#FF0000" />
                </Helmet>
                <Menu />

                <section className="main">

                    <article className="content">
                        <div>
                            <h4><span>Hey there!</span></h4>
                            <p>
                                I’m Bruno Guazina a Product Designer and UX/UI Designer from Brazil currently working at Claro Brasil.
                            
                                I've more than 10 years of experience, creating digital products for digital agencies, e-commerce,
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
                        
                    </article>

                    <aside className="sideBar">
                        <div>
                            <h4>Get in touch</h4>
                            <p>
                                <span className="icon-mobile"></span>
                                +55 67 999 366 393 (Brazil)<br />
                                <span className="icon-mobile"></span>
                                +351 925 058 007 (Portugal)
                                <br /><br />
                                <span className="icon-mail"></span>
                                bruno@guazina.com<br />
                                <span className="icon-bubbles"></span>
                                bruno_guazina (Skype ID)
                            </p>
                        </div>
                        <div>
                            <h4>Resume</h4>
                            <p>
                                <span className="icon-file-text"></span>
                                <a href="/" >Get my cv</a>
                            </p>
                        </div>
                    </aside>

                </section>

                <Footer />

            </div>
        )
    }
}

export default About;
