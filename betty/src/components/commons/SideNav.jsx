import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "uikit/dist/css/uikit.min.css";
const SideNavContainer = styled.div`
  height: 100%;
  width: 20%;
  background-color: #ffffff;
  background-image: url("/brownsheet.jpg");
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);
  h3 {
    border-bottom: 2px solid #93592b;
  }
`;
// background-color: #cec4a2;
const SideList = styled.ul`
  list-style: none;
  color: black;
  padding: 0px;
`;

class SideListElement extends Component {
  render = () => {
    let { link, content } = this.props;

    return (
      <li>
        <Link
          style={{ textDecoration: "none", color: "rgb(170, 77, 0)" }}
          to={link}
        >
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
    let { user } = state.state;
    return (
      <SideNavContainer>
        <SideList>
          <h3>Home</h3>
          <SideListElement link="/" content="Front Page"></SideListElement>
        </SideList>
        <SideList>
          <h3>User</h3>
          {user ? "" : <SideListElement link="/user/login" content="Log in" />}
          {user ? (
            ""
          ) : (
            <SideListElement link="/user/signup" content="Sign up" />
          )}
          {user ? (
            <SideListElement
              click={handlers.handleLogout}
              content="Log out"
              link=""
            />
          ) : (
            ""
          )}
        </SideList>
        <SideList>
          <h3>Procesos</h3>
          <SideListElement link="/user/:userid/tasks" content="Nuevo Proceso" />
        </SideList>
        {user ? (
          <SideList>
            <h3>Tareas</h3>
            <SideListElement
              link="/user/:userid/task/new"
              content="Nueva Tarea"
            ></SideListElement>
          </SideList>
        ) : (
          ""
        )}
      </SideNavContainer>
    );
  };
}
