import React, { Component } from 'react';

import './Brands.scss';

class Brands extends Component {

    listarMarcas({ id, name, src }) {
        console.log(src);
        return (
            <img key={id} src={src} alt={name} width="115" />
        )
    }

    render() {
        const { data } = this.props;
        return <div className="brands">{data.map(this.listarMarcas)}</div>
    }
}

export default Brands;
