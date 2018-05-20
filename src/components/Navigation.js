import React, { Component } from 'react';

import './Navigation.scss';


class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            currentPage: props.currentPage,
        };
    }

    prev() {
        let sizeArray = this.state.data.length;
        let prevID = this.state.currentPage - 1;

        if (this.state.currentPage <= 1) {
            prevID = sizeArray;
        }

        for (var value of this.state.data) {

            if (value.id === prevID) {
                console.log(value.url);
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
                return  (
                    <a href={value.url} >
						<span className="post-title">{value.title}</span>
                        <span className="meta-nav">Next project<span className="icon-arrow-right2"></span> </span>
				    </a>
                )
            };
        }
    }


    render() {
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
