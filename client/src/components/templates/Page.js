import React from "react";
import { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import "./Templates.css";

class Page extends Component {
    render() {
        return (
            <div className="page">
                <Header />
                <Content>
                    { this.props.children }
                </Content>
                <Footer />
            </div>
        );
    }
}

export default Page;