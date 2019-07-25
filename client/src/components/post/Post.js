import React from "react";
import { Component } from "react";
import { Form, Button, Checkbox } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import "./Post.css";
import Request from "../../utils/Request";

class CreatePostForm extends Component {
    handleSubmit() {
        
    }
    render() {
        return (
            <Form>
                <div className="row"></div>
                <div className="column"></div>
                <div className="content">
                    <Form.Field>
                        <label>First Name</label>
                        <input placeholder='First Name' />
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name</label>
                        <input placeholder='Last Name' />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label='I agree to the Terms and Conditions' />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </div>
                <div className="column"></div>
                
            </Form>
            
        )
    }

}

export default CreatePostForm;