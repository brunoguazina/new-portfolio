import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './Menu';
import Cover from './Cover';
import Projects from './Projects';
import Brands from './Brands';
import Footer from './Footer';

import projects from './data/projects';
import brands from './data/brands';

import './index.scss';

import registerServiceWorker from './registerServiceWorker';




ReactDOM.render(
    <div className="teste">
        <Menu />
        <Cover />
        <Projects data={projects} />
        <Brands data={brands}/>
        <Footer />
    </div>,
    document.getElementById('root'));

registerServiceWorker();
