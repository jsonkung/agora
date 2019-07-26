import React from "react";
import { Component } from "react";
import PostForm from "./PostForm";
import 'semantic-ui-css/semantic.min.css';
import "./Post.css";

class PostBody extends Component {
    state = {
        title: "",
        description: "",
        price: 0,
        contactEmail: "",
        images: []
    }

    handleSubmit() {
        alert(JSON.stringify(this.state));
    }

    render() {
        return (
            <div className="post">
                <div className="column"></div>
                <PostForm />
                <div className="column"></div>
                
            </div>
        );
    }
}

export default PostBody;