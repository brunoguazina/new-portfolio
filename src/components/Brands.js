import React, { Component } from 'react';

import './Brands.scss';

class Brands extends Component {

    listarMarcas({ id, name, src }) {
        console.log(src);
        return (
            <span key={id}> {name} </ span>
            
            // TODO: to review the use require
            //<span key={id} src={require('./../images/brands/BebeStore.jpg')} alt={name} width="115" />
            //
        )
    }

    render() {
        const { data } = this.props;
        return <div className="brands">{data.map(this.listarMarcas)}</div>
    }
}

export default Brands;
