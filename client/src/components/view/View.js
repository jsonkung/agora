import React from "react";
import { Component } from "react";

class View extends Component {
    constructor(props) {
        super(props);
        this.post_id = props.match.params.post_id;
    }

    render() {
        return (
            <h2> View { this.post_id } </h2>
        )
    }
}

export default View;