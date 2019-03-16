import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import { Link } from 'react-router-dom'

import Tag from './Tag';

import './Projects.scss';

class Projects extends Component {

    listarProjetos({ status, title, id, url, tags }) {
        
        let urlActive = "";

        if (status === "inactive") urlActive = "#";
            else urlActive = `project/${url}`;
        
        return (
            <li class="active" key={id}>
                
                <h3>{title}</h3>
                <Tag data={tags} />

                <Link to={urlActive} >
                    Discover the project >
                </Link>
            </li>
        )
    }

    render() {
        const { data } = this.props;
        
        return (
            <ScrollableAnchor id="projects">
                <ul>{data.map(this.listarProjetos)}</ul>
            </ScrollableAnchor>
        );
    }
}

export default Projects;
