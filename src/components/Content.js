import React, { Component } from 'react';


class Content extends Component {

    listar({ description, img, title }) {
        return (
            <div key={title}>
                <h4>
                    <span> {title} </span>
                </h4>
                <p>{description}</p>
                <img src={img} alt={title} />
            </div>
        )
    }

    render() {

        const { data } = this.props;
        console.log(data);

        return (
            <article className="content">
                {data.map(this.listar)}
            </article>
        );
    }
}

export default Content;
