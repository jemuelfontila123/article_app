import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./Homepage";
import Register from "./Register";
import SignIn from "./SignIn";
import CreateArticle from "./CreateArticle";
import Profile from "./Profile";
export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/users/sign_up" component={Register} />
      <Route path="/users/sign_in" component={SignIn} />
      <Route path="/users/profile" component={Profile} />
      <Route path="/users/post" component={CreateArticle} />
    </Switch>
  </Router>
);
