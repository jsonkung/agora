import React from "react";
import { Component } from "react";
import Footer from "./components/templates/Footer";
import Header from "./components/templates/Header";
import "./App.css";


import Router from "./Routes";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Router />
                <Footer />
            </div>
        )
    }
}

export default App;