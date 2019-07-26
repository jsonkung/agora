import React from "react";
import { Component } from "react";
import "./Post.css";
import PostBody from "./PostBody";
import { Header } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';

class CreatePostForm extends Component {
    handleSubmit() {
        
    }
    render() {
        return (
            <div>
                <Header size="huge">Create New Post</Header>
                <PostBody />
            </div>
        );
    }

}

export default CreatePostForm;