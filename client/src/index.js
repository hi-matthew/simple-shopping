import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./components/App";
import Navigation from "./components/Navigation";
import "./styles/index.css";

render(
  <Router>
    <Provider store={store}>
      <div className="main">
        <Navigation />
        <hr className="line" />
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </div>
    </Provider>
  </Router>,
  document.querySelector("#root")
);
