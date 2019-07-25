import React from "react";
import { Component } from "react";
import { Divider } from "semantic-ui-react";
import "./Templates.css";

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <Divider />
                <div className="content">
                    Made with ♥️ at Yelp
                </div>    
            </div>
        );
    }
}

export default Footer;