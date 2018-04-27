import React, { Component } from 'react';

import './Brands.scss';

class Brands extends Component {

    listarMarcas({ id, name, src }) {
        return (
            <img key={id} src={require(`${src}`)} alt={name} width="110" />
        )
    }

    render() {
        const { data } = this.props;
        return <div className="brands">{data.map(this.listarMarcas)}</div>
    }
}

export default Brands;
