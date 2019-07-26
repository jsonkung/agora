import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { Input, Button, Icon } from "semantic-ui-react";
import "./Overview.css";

class Navigator extends Component {
    constructor(props) {
        super(props);
        this.handleFilter = this.props.handleFilter;
        this.searchQuery = "";
    }
    
    handleChange = (event, { name, value }) => {
        this.searchQuery = value;
        this.handleFilter(value);
    }

    render() {
        const searchQuery = this.searchQuery;
        return (
            <div className="navigators">
                <Input fluid placeholder="Search..." value={ searchQuery } onChange={ this.handleChange } />
                <Link to="/post">
                    <Button positive icon labelPosition="right">
                        Create Post
                        <Icon name="plus square outline" />
                    </Button>
                </Link>
                
            </div>
        )
    }
}

export default Navigator;