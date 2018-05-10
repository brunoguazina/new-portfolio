import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import { NavLink } from 'react-router-dom'

import Tag from './Tag';

import './Projects.scss';

class Projects extends Component {


    listarProjetos({ name, id, src, tags }) {
        return (
            <li key={id}>
                <NavLink to={src}>
                    <h3>{name}</h3>
                    <Tag data={tags} />
                </NavLink>
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
