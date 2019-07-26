import React from "react";
import { Component } from "react";
import Navigator from "./Navigator";
import Listings from "./Listings";
import { Header } from "semantic-ui-react";


class Overview extends Component {
    constructor(props) {
        super(props);


        let listings = this.getListings();

        this.state = {
            listings: [...listings],
            results: [...listings]
        }
    }

    getListings = () => {
        let parameters = {
            method: "GET",
            endpoint: "",
            params: {

            }
        }
        // let request = new Request(parameters)
        // request.then(response => {
        //     this.listings = response.data;
        // })

        let response = [
            {
                imageURL: "https://i.imgur.com/LmGWmCy.png",
                title: "Memes",
                price: "100",
                description: "Wow",
                id: 200
            },
            {
                imageURL: "https://i.imgur.com/OdKoaBP.jpg",
                title: "Pizza",
                price: "0",
                description: "Yummy",
                id: 1
            },
            {
                imageURL: "https://i.imgur.com/OdKoaBP.jpg",
                title: "Pizza",
                price: "0",
                description: "Yums",
                id: 12
            },
            {
                imageURL: "https://i.imgur.com/OdKoaBP.jpg",
                title: "Pizza",
                price: "0",
                description: "Yum :)",
                id: 13
            }
        ];

        return response;
    }

    filterListings = (value) => {
        value = value.toLowerCase().trim();
        let results = [];
        for (let i = 0; i < this.state.listings.length; i++) {
            let listing = this.state.listings[i];
            for (let key in listing) {
                if (typeof listing[key] === "string") {
                    if (listing[key].toLowerCase().indexOf(value) >= 0) {
                        results.push(listing);
                        break;
                    }
                }
            }
        }
        this.setState({
            results: results
        })
        
        this.forceUpdate();
    }

    render() {
        return (
            <div className="overview">
                <Header size="huge">Welcome!</Header>
                <Navigator handleFilter={ this.filterListings } />
                <Listings rows="3" listings={ this.state.results } />
            </div>
        )
    }
}

export default Overview;