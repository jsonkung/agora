import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Overview from "./components/overview/Overview";
import Post from "./components/post/Post";
import View from "./components/view/View";
import Page404 from "./components/404/404";


const AppRouter = function() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={ Overview } public={true} />
                <Route path="/post" exact component={ Post } public={true} />
                <Route path="/view/:post_id" component={ View } public={true} />
                <Route component={ Page404 } />
            </Switch>
        </Router>
        
    )
}

export default AppRouter;