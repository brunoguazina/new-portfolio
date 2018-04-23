import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './Menu';
import Cover from './Cover';
import Projects from './Projects';

import './index.scss';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div className="teste">
        <Menu />
        <Cover />
        <Projects />
    </div>,
    document.getElementById('root'));

registerServiceWorker();
