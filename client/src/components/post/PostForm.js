import React from "react";
import { Component } from "react";
import { Form, Button, Checkbox } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import "./Post.css";

class PostForm extends Component {
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
            <Form onSubmit={ this.handleSubmit }>
                <div className="column"></div>
                <div className="content">
                    <Form.Group>
                        <Form.Input placeholder="Title" name="title" value={ this.state.title } />
                        <Form.Input placeholder="Description" name="description" value={ this.state.description } />
                        <Form.Input placeholder="Price" name="price" value={ this.state.price } />
                        <Form.Input placeholder="Contact Email" name="contactEmail" value={ this.state.contactEmail } />
                        <Form.Input placeholder="Title" name="title" value={ this.state.title } />
                    </Form.Group>
                    <Button type='submit'>Submit</Button>

                </div>
                <div className="column"></div>
                
            </Form>
        );
    }
}

export default PostForm;