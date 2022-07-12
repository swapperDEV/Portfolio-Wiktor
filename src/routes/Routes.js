import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Portfolio } from "../views/portfolio/Portfolio";
import { Admin } from "../views/admin/Admin";

export const RoutesComponent = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Portfolio} />
        <Route exact path="/admin" component={Admin} />
      </Switch>
    </Router>
  );
};
