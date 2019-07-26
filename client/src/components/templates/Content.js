import React from "react";
import { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import "./Templates.css";


class Content extends Component {
    render() {
        return (
            <div className="content">
                <div className="column"></div>
                { this.props.children }    
                <div className="column"></div>
            </div>
        );
    }
}

export default Content;