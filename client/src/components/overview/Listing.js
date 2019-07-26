import React from "react";
import { Component } from "react";
import { Card, Image, Icon } from "semantic-ui-react";


class Listing extends Component {
    constructor(props) {
        super(props);
        this.data = this.props.data;
        this.url = "/view/" + this.data.id;
    }


    render() {

        return (
            <Card>
                <Image src={ this.data.imageURL } wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{ this.data.title }</Card.Header>
                    <Card.Meta>${ this.data.price }</Card.Meta>
                    <Card.Description>
                        { this.data.description }
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a href={ this.url }>
                        <Icon name="external alternate" />
                        View Post
                    </a>
                </Card.Content>
            </Card>
        )
    }
}

export default Listing;