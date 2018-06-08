import React, { Component } from 'react';

class Tag extends Component {

    listar(name, index) {
        return <span key={index} className="tag"> {name}  </span>
    }

    render() {
        const { data } = this.props;
        
        return data.map(this.listar)
    }
}

export default Tag;
