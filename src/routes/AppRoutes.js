import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";

import InstaDriverApp from "../components/InstaDriverApp";
import Divider from "../components/shared/Divider/Divider";
import Footer from "../components/shared/Footer/Footer";
import Header from "../components/shared/Header/Header";

const AppRoutes = () => (
  <Router>
    <Header />
    <Divider />
    <Switch>
      <Route path="/" component={InstaDriverApp} exact={true} />
    </Switch>
    <Footer />
  </Router>
);

export default AppRoutes;
