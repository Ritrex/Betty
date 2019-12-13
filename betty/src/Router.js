import React from "react";
import { Switch, Route } from "react-router-dom";
import Form from "./components/Form";
import { NavLink } from "react-router-dom";
import { sign } from "crypto";
import NavBar from "./components/commons/NavBar";
import SideNav from "./components/commons/SideNav";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import "uikit/dist/css/uikit.min.css";  
const Router = props => {
  let { state, handlers } = props;
  console.log("Router ", state.state.user ? "a" : "b");
  return (
    <Switch>
      <NavBar handlers={handlers}></NavBar>
      <SideNav></SideNav>
      <Route exact path="/">
        <h1>
          {state.state.user ? `Bienvenido ${state.state.user.name}` : "Home"}
        </h1>
        {state.state.user ? "" : <NavLink to="/user/login">Login</NavLink>}
        {state.state.user ? "" : <NavLink to="/user/signup">Signup</NavLink>}
        {state.state.user ? (
          <button onClick={handlers.handleLogout}>Logout</button>
        ) : (
          ""
        )}
      </Route>
      <Route exact path="/user/update">
        <Form update handler={handlers.handleUpdate}></Form>
      </Route>
      <Route exact path="/user/signup">
        <Form signup handler={handlers.handleSignup} state={state}></Form>
        <NavLink to="/">Home</NavLink>
      </Route>
      <Route exact path="/user/login">
        <Form handler={handlers.handleLogin} state={state}></Form>
        <NavLink to="/">Home</NavLink>
      </Route>
      <Route path="/">
        <h1>404</h1>

        <NavLink to="/">
          <button className="">Home</button>
        </NavLink>
      </Route>
    </Switch>
  );
};

export default Router;
