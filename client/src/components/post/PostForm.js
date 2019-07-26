import React from "react";
import { Component } from "react";
import { Form, Button, Divider, Image, Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
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
            location: "",
            category: "",
            startDate: 0,
            endDate: 0,
            selectedImage: null,
            selectedImageURL: "",
            images: []
        }

        this.error = {
            title: false,
            description: false,
            price: false,
            contactEmail: false,
            location: false,
            category: false
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

        if (name in this.error) {
            if (value) {
                this.error[name] = false;
            } else {
                this.error[name] = true;
            }
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

        let parameters = {
            method: "POST",
            endpoint: "",
            data: this.state
        }
        let containsError = false;
        for (let key in this.state) {
            if (key in this.error) {
                if (this.state[key]) {
                    this.error[key] = false;
                } else {
                    containsError = true;
                    this.error[key] = true;
                }
            }
        }

        if (this.state.price) {
            let priceFormat = /^[0-9]+(\.\d{2})?$/;
            if (!priceFormat.test(this.state.price)) {
                this.error.price = true;
                containsError = true;
            }
        }

        if (containsError) {
            this.forceUpdate();
            return;
        }

        console.log(this.state);

        // new Request(parameters)
        //     .then();
    }

    render() {
        const { title, description, price, contactEmail } = this.state;
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

        const locationOptions = [
            {
                key: "sfo",
                value: "sfo",
                text: "SFO"
            },
            {
                key: "ny",
                value: "ny",
                text: "NY"
            }
        ];

        const categoryOptions = [
            {
                key: "tickets",
                value: "tickets",
                text: "Tickets"
            },
            {
                key: "home",
                value: "home",
                text: "Home"
            },
            {
                key: "electronic",
                value: "electronic",
                text: "Electronic"
            },
            {
                key: "appliances",
                value: "appliances",
                text: "Appliances"
            }
        ];
        
        return (
            <Form>
                <Header as="h2" floated="left">
                    Post Details
                </Header>
                <Divider clearing />
                <Form.Group widths="equal">
                    <Form.Input
                        placeholder="Title"
                        name="title"
                        label="Title *"
                        value={ title }
                        onChange={ this.handleChange }
                        error={ this.error.title }
                    />
                </Form.Group>

                <Form.Group widths="equal">
                    <Form.TextArea
                        placeholder="Description"
                        name="description"
                        label="Description *"
                        value={ description }
                        onChange={ this.handleChange }
                        error={ this.error.description }
                    />
                </Form.Group>

                <Header as="h2" floated="left">
                    Item Details
                </Header>
                <Divider clearing />
                <Form.Group widths="equal">
                    <Form.Dropdown
                        search
                        selection
                        options={ categoryOptions }
                        placeholder="Category"
                        label="Category *"
                        name="category"
                        onChange={ this.handleChange }
                        error={ this.error.category }
                    />

                    <Form.Input
                        name="price"
                        label="Price *"
                        value={ price }
                        iconPosition="left"
                        icon="dollar sign"
                        placeholder="0.00"
                        onChange={ this.handleChange }
                        error={ this.error.price }
                    />
                </Form.Group>

                <Header as="h2" floated="left">
                    Contact Details
                </Header>
                <Divider clearing />
                <Form.Group widths="equal">
                    <Form.Input
                        name="contactEmail"
                        label="Contact Email *"
                        value={ contactEmail }
                        placeholder="Contact Email"
                        onChange={ this.handleChange }
                        error={ this.error.contactEmail }
                    />

                    <Form.Dropdown
                        search
                        selection
                        options={ locationOptions }
                        placeholder="Location"
                        label="Location *"
                        name="location"
                        onChange={ this.handleChange }
                        error={ this.error.location }
                    />
                    
                </Form.Group>

                <Header as="h2" floated="left">
                    Images
                </Header>
                <Divider clearing />

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