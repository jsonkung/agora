import React from "react";
import { Component } from "react";
import "./Post.css";
import PostForm from "./PostForm";
import { Header } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import Request from "../../utils/Request";

class CreatePostForm extends Component {
    handleSubmit() {
        
    }
    render() {
        return (
            <div>
                <Header size="huge">Huge Header</Header>
                <PostForm />
            </div>
        );
    }

}

export default CreatePostForm;