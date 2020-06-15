import React, { Component } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Header from "../header/Header";
import Home from "../home/Home";

class Principal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: this.props.menus,
      show: false,
    };
  }

  componentDidMount() {}

  render() {
    return (
      <Router>
        <div>
          <Header endSession={this.props.endSession} global={this.state} />
          <Switch>
            <Route
              path="/"
              render={(props) => <Home {...props} global={this.state} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Principal;