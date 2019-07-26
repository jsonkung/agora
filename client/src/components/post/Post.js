import React from "react";
import { Component } from "react";
import "./Post.css";
import PostForm from "./PostForm";
import { Header } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';

class CreatePostForm extends Component {
    render() {
        return (
            <div>
                <Header size="huge">Create New Post</Header>
                <PostForm />
            </div>
        );
    }

}

export default CreatePostForm;