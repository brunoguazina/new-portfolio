import React, { Component } from 'react';
import Tag from './../components/Tag';

class Sidebar extends Component {

    listarDescription(value) {
        if (value.length !== 0) {
            const content = value.description.map((description, index) =>
                <div key={index}>
                    <h4><span>{description.title}</span></h4>
                    <p>{description.content}</p>
                </div>
            )
            return content;
        };
    }

    listarTags(value) {
        if (value.length !== 0) {
            return <Tag data={value.tags} />;
        };
    }

    render() {

        const { data } = this.props;
        
        return (
            <aside className="sideBar">
                {this.listarDescription(data)}
                {this.listarTags(data)}
            </aside>
        )
    }

}

export default Sidebar;
