import React, { Component } from 'react';


class Tag extends Component {
    
    render() {

        

        console.log(this.props.data);
        
        return (
            <span className="tag">{this.props.data.primeira}</span>
        );
    }
}

export default Tag;
