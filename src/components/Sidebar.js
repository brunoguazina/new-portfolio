import React, { Component } from 'react';
import Tag from './../components/Tag';

class Sidebar extends Component {

    handleScroll() {
        let navbar = document.getElementById("sideBar");
        let sticky = navbar.offsetTop;
        
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

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
            <aside id="sideBar" className="sideBar">
                {this.listarDescription(data)}
                {this.listarTags(data)}
            </aside>
        )
    }

}

export default Sidebar;
