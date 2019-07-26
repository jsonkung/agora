import React from "react";
import { Component } from "react";
import Listing from "./Listing";
import { Card } from "semantic-ui-react";


class Listings extends Component {

    render() {
        const listingCards = [];
        for (let i = 0; i < this.props.listings.length; i++) {
            let data = this.props.listings[i];
            listingCards.push(<Listing key={ data.id } data={ data } />)
        }

        return (
            <div className="listings">
                <Card.Group itemsPerRow={ this.props.rows }>
                    { listingCards }
                </Card.Group>
            </div>
        )
    }
}

export default Listings;