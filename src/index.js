import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './Menu';
import Cover from './Cover';
import Projects from './Projects';

import projects from './data/projects';

import './index.scss';

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <div className="teste">
        <Menu />
        <Cover />
        <Projects data={projects} />
        
    </div>,
    document.getElementById('root'));

registerServiceWorker();
