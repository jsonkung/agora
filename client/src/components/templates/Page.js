import React from "react";
import { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Templates.css";

class Page extends Component {
    render() {
        return (
            <div className="page">
                <Header />
                <div className="content">
                    { this.props.children }    
                </div>
                <Footer />
            </div>
        );
    }
}

export default Page;