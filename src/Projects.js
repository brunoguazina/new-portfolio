import React, { Component } from 'react';
import Tag from './Tag';

import './Projects.scss';

class Projects extends Component {


    listarProjetos({ name, id, tags }) {
        return (
            <li key={id}>
                <h3>{name}</h3>
                <Tag data={tags} />
            </li>
        )
    }

    render() {
        const { data } = this.props;
        return <ul>{data.map(this.listarProjetos)}</ul>
    }
}

export default Projects;
