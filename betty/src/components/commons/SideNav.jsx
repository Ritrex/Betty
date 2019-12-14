import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "uikit/dist/css/uikit.min.css";
const SideNavContainer = styled.div`
  height: 100%;
  width: 20%;
  background-color: #ffffff;
`;
// background-color: #cec4a2;
const SideList = styled.ul`
  list-style: none;
  color: black;
`;

class SideListElement extends Component {
  render = () => {
    let { link, content } = this.props;

    return (
      <li>
        <Link style={{ textDecoration: "none", color: "#BB5500" }} to={link}>
          {content}
        </Link>
      </li>
    );
  };
}
// = styled.li`
//   text-decoration: none;
//   color: black;
// `;

export default class SideNav extends Component {
  render = () => {
    let { state, handlers, exceptions } = this.props;
    let { user } = state;
    return (
      <SideNavContainer>
        <SideList>
          User
          {state.user ? (
            ""
          ) : (
            <SideListElement link="/user/login" content="Log in" />
          )}
          {state.user ? (
            ""
          ) : (
            <SideListElement link="/user/signup" content="Sign up" />
          )}
          {state.user ? (
            <SideListElement
              onClick={handlers.handleLogout}
              content="Log out"
            />
          ) : (
            ""
          )}
        </SideList>
        <SideList>
          Procesos
          <SideListElement link="/" content="Nuevo Proceso" />
        </SideList>
        <SideList>
          Tareas
          <SideListElement link="/" content="Nueva Tarea"></SideListElement>
        </SideList>
      </SideNavContainer>
    );
  };
}
