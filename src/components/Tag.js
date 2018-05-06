import React, { Component } from 'react';

class Tag extends Component {

    listarProjetos(name) {
        return <span key={name} className="tag"> {name}  </span>
    }

    render() {
        const { data } = this.props;
        return data.map(this.listarProjetos)
    }
}

export default Tag;