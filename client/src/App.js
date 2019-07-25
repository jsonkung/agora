import React from "react";
import { Component } from "react";
import Page from "./components/templates/Page";
import "./App.css";


import Router from "./Routes";

class App extends Component {
    render() {
        return (
            <Page>
                <Router />
            </Page>
        );
    }
}

export default App;