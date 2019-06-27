import React, { Component } from 'react';

import Api from './../service/Service';

import './Brands.scss';

class Brands extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        let url = `https://brunoguazina-api.azurewebsites.net/brands`;

        Api.get(url, (data) => {
            this.setState({
                data: data
            });
        });
    }

    listarMarcas({ id, name }) {
        
        return (
            <span key={id}> {name} </span>
        )
    }

    render() {
        
        const { data } = this.state;
        return <div className="brands">{data.map(this.listarMarcas)}</div>
    }
}

export default Brands;
