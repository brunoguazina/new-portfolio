import React, { Component } from 'react';

class Content extends Component {

    listarContent(value) {
        if (value.length !== 0) {
            const content = value.content.map((content, index) =>
                <div key={index}>
                    <h4><span> {content.title} </span></h4>
                    <p>{content.description}</p>
                    <img src={content.img} alt={content.title} />
                </div>
            )
            return content;
        };
    }

    render() {

        const { data } = this.props;

        return (
            <article className="content">
                {this.listarContent(data)}
            </article>
        )
    }

}

export default Content;
