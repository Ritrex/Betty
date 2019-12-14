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
import styled from "styled-components";

const Router = props => {
  let { state, handlers } = props;
  console.log("Router ", state.state.user ? "a" : "b");
  return (
    <ContentContainer>
      <NavBar></NavBar>
      <BottomContainer>
        <SideNav state={state}></SideNav>
        <Switch>
          <Route exact path="/">
            {console.log("hey")}
            <h1>
              {state.state.user
                ? `Bienvenido ${state.state.user.name}`
                : "Home"}
            </h1>
            {state.state.user ? "" : <NavLink to="/user/login">Login</NavLink>}
            {state.state.user ? (
              ""
            ) : (
              <NavLink to="/user/signup">Signup</NavLink>
            )}
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
      </BottomContainer>
    </ContentContainer>
  );
};

const BottomContainer = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  flex-flow: row;
`;

const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export default Router;
