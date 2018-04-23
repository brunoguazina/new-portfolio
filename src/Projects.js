import React, { Component } from 'react';

class Projects extends Component {


    listarProjetos({ name, id }) {
        return (
            <li key={id}>{name} - {id}</li>
        )
    }

    render() {
        const { data } = this.props;
        return <ul>{data.map(this.listarProjetos)}</ul>
    }
}

export default Projects;
