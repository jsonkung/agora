import React from "react";
import { Component } from "react";
import { Form, Button, Divider, Image } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import "./Post.css";
import Request from "../../utils/Request";


class PostForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            description: "",
            price: "",
            contactEmail: "",
            selectedImage: null,
            selectedImageURL: "",
            images: []
        }
    }


    handleChange = (event, {name, value}) => {
        if (name === "price") {
            let priceFormat = /^[0-9]*(\.\d{0,2})?$/;
            if (priceFormat.test(value)) {
                this.setState({ [name]: value });
            }
        } else {
            this.setState({ [name]: value })
        }
        
    }

    handleImageChange = (event) => {
        let file = event.target.files[0];
        if (file) {
            this.setState(
                {
                    selectedImage: file,
                    selectedImageURL: URL.createObjectURL(file)
    
                }
            );
        }
    }

    handleImageUpload = (event) => {
        console.log(event);
        let parameters = {
            method: "POST",
            endpoint: "",
            data: this.selectedImage
        }

        // new Request(parameters)
        //     .then();
    }

    handleSubmit = () => {
        console.log(this.state);
        let parameters = {
            method: "POST",
            endpoint: "",
            data: this.state
        }

        // new Request(parameters)
        //     .then();
    }

    render() {
        const { title, description, price, contactEmail, selectedImage, images } = this.state;
        const imagePreview = this.state.selectedImageURL ? (
            <Form.Group>
                <Divider hidden />

                <Image
                    src={ this.state.selectedImageURL }
                    size="big"
                    centered
                />

                <Divider hidden />
            </Form.Group>
        ) : (
            null
        );
        
        return (
            <Form>
                <Form.Group widths="equal">
                    <Form.Input
                        placeholder="Title"
                        name="title"
                        label="Title"
                        value={ title }
                        onChange={ this.handleChange }
                    />
                </Form.Group>

                <Form.Group widths="equal">
                    <Form.TextArea
                        placeholder="Description"
                        name="description"
                        label="Description"
                        value={ description }
                        onChange={ this.handleChange }
                    />
                </Form.Group>

                <Form.Group widths="equal">
                    <Form.Input
                        name="contactEmail"
                        label="Contact Email"
                        value={ contactEmail }
                        placeholder="Contact Email"
                        onChange={ this.handleChange }
                    />
                    <Form.Input
                        name="price"
                        label="Price"
                        value={ price }
                        iconPosition="left"
                        icon="dollar sign"
                        placeholder="0.00"
                        onChange={ this.handleChange }
                    />
                </Form.Group>


                { imagePreview }
                

                <Form.Group widths="equal">
                    <Form.Input
                        type="file"
                        accept=".png,.jpg,.jpeg"
                        onChange={ this.handleImageChange }
                    />


                </Form.Group>

                <Button
                    fluid
                    positive
                    type="submit"
                    content="Submit"
                    onClick={ this.handleSubmit }
                />

                
            </Form>
        );
    }
}

export default PostForm;