import React, { Component } from 'react';
import Api from './../service/Service';

import './Navigation.scss';


class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            currentPage: props.currentPage,
        };
    }

    componentDidMount() {
        let url = `http://api.brunoguazina.com/projects`;

        Api.get(url, (data) => {
            this.setState({
                data: data,
            });
        });
    }

    prev() {
        let sizeArray = this.state.data.length;
        let prevID = this.state.currentPage - 1;

        if (this.state.currentPage <= 1) {
            prevID = sizeArray;
        }

        for (var value of this.state.data) {

            if (value.id === prevID) {
                return (
                    
                    <a href={value.url} >
                        <span className="post-title">{value.title}</span>
                        <span className="meta-nav"><span className="icon-arrow-left"></span>Previous project</span>
                    </a>
                )
            };
        }
    }


    next() {
        let sizeArray = this.state.data.length;
        let nextID = this.state.currentPage + 1;

        if (this.state.currentPage >= sizeArray) {
            nextID = 1;
        }

        for (var value of this.state.data) {

            if (value.id === nextID) {
                return (
                    <a href={value.url} >
                        <span className="post-title">{value.title}</span>
                        <span className="meta-nav">Next project<span className="icon-arrow-right2"></span> </span>
                    </a>
                )
            };
        }
    }


    render() {

        const { currentPage } = this.state;
        console.log(currentPage);

        return (
            <section id="navigation">

                <div className="nav-previous">
                    {this.prev()}
                </div>

                <div className="nav-next">
                    {this.next()}
                </div>

            </section>
        )
    }
}

export default Navigation;
