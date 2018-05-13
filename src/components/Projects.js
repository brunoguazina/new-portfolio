import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import { Link } from 'react-router-dom'

import Tag from './Tag';

import './Projects.scss';

class Projects extends Component {

    listarProjetos({ title, id, url, tags, index }) {
        return (
            <li key={id}>
                <Link to={`${'project/' + url}`} >
                    <h3>{title}</h3>
                    <Tag data={tags} />
                </Link>
            </li>
        )
    }

    render() {
        const { data } = this.props;
        //console.log(data);
        return (
            <ScrollableAnchor id="projects">
                <ul>{data.map(this.listarProjetos)}</ul>
            </ScrollableAnchor>
        );
    }
}

export default Projects;
