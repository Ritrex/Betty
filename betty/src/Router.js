import React from "react";
import { Switch, Route } from "react-router-dom";
import Form from "./components/Form";
import { NavLink, Redirect } from "react-router-dom";
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
      {/* <NavBar></NavBar> */}
      <BottomContainer>
        <SideNav state={state} handlers={handlers}></SideNav>
        <Switch>
          <Route exact path="/">
            <SheetContainer>
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center"
                }}
              >
                <h1 style={{ color: "white" }}>
                  {state.state.user ? "Tareas recientes" : `Bienvenido`}
                </h1>
                {state.state.user ? (
                  ""
                ) : (
                  <div>
                    <div></div>
                    <div></div>
                  </div>
                )}

                {state.state.user ? (
                  <button
                    style={{ width: "40%" }}
                    onClick={handlers.handleLogout}
                  >
                    Logout
                  </button>
                ) : (
                  ""
                )}
              </div>
            </SheetContainer>
          </Route>
          <Route exact path="/user/update">
            <SheetContainer style={{ height: "80%", width: "80%" }}>
              <Form update handler={handlers.handleUpdate}></Form>
            </SheetContainer>
          </Route>
          <Route
            exact
            path="/user/signup"
            style={{ height: "100%", width: "80%" }}
          >
            ><Form signup handler={handlers.handleSignup} state={state}></Form>
          </Route>
          <Route exact path="/user/login">
            {state.state.user ? (
              <Redirect to="/"></Redirect>
            ) : (
              <SheetContainer style={{ height: "100%", width: "80%" }}>
                <Form handler={handlers.handleLogin} state={state}></Form>
              </SheetContainer>
            )}
          </Route>
          <Route exact path="/user/:userid/task/new">
            {state.state.user ? (
              <Redirect to="/"></Redirect>
            ) : (
              <SheetContainer>
                <form></form>
              </SheetContainer>
            )}
          </Route>
          <Route exact path="/task/all">
            {/* All tasks shown here */}
          </Route>
          <Route exact path="/task/:taskid">
            {/* Task shown here */}
          </Route>
          <Route exact path="/task/:taskid/documents">
            {/* Task associated processes here */}
          </Route>
          <Route exact path="/tak/:taskid/document/:documentid">
            {/* Document info here */}
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
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: row;
`;

const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const SheetContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  // background-image: url("/sheet.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  width:80%
  height:80%
`;

export default Router;
