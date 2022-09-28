import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./Homepage"
import Register from "./Register";
import SignIn from "./SignIn";
export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/users/sign_up" component={Register} />
      <Route path="/users/sign_in" component={SignIn} />
    </Switch>
  </Router>
);