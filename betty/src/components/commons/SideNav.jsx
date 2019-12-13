import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SideNavContainer = styled.div`
  height: 100%;
  width: 20%;
`;

export default class SideNav extends Component {
  render = props => {
    let { state, handlers } = props;
    return (
      <SideNavContainer>
        <ul>
          User
          <li>
            {state.state.user ? (
              ""
            ) : (
              <li>
                <NavLink to="/user/login">Login</NavLink>
              </li>
            )}
            {state.state.user ? (
              ""
            ) : (
              <li>
                <NavLink to="/user/signup">Signup</NavLink>
              </li>
            )}
            {state.state.user ? (
              <NavLink onClick={handlers.handleLogout}>Logout</NavLink>
            ) : (
              ""
            )}
          </li>
          <li></li>
          <li></li>
        </ul>
        <ul>
          Procesos
          <li>
            <NavLink>Nuevo Proceso</NavLink>
          </li>
        </ul>
        <ul>
          Tareas
          <li>
            <NavLink>Nueva Tarea</NavLink>
          </li>
        </ul>
      </SideNavContainer>
    );
  };
}
