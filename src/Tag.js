import React, { Component } from 'react';

class Tag extends Component {

    listarTag() {
        
        var tag = "";
        const { data } = this.props;

        for (const position in data) {
            console.log(data[position]);
            
            tag = data[position];
        }

        return tag;
    }


    render() {
        
        return (
            <span className="tag">{this.listarTag()}</span>
        );
    }
}

export default Tag;
