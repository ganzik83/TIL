import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Carlist from "./Carlist";

import "./Main.scss";

export default class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="header">
            <li>
              <NavLink exact to="/">
                home
              </NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Signup</NavLink>
              <NavLink to="/carlist">Carlist</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/carlist" component={Carlist} />
          </div>
        </div>
      </HashRouter>
    );
  }
}
