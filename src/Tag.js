import React, { Component } from 'react';

class Tag extends Component {

    listarTag() {
        
        var tag = "";
        const { data } = this.props;

        for (const prop in data) {
            console.log(`data.${prop} = ${data[prop]}`);
            
            tag = `${data[prop]}`;
        }

        return tag;
    }


    render() {

        //const {data} = this.props.data;
        
        return (
            <span className="tag">{this.listarTag()}</span>
        );
    }
}

export default Tag;
