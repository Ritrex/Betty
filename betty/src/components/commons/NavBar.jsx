import React, { Component } from "react";
import styled from "styled-components";

const StyledNavElement = styled.div`
  width: 10%;
  height: 10vh;
`;

const StyledNav = styled.nav`
  background-color: #cec4a2;
  display: flex;
  justify-content: space-evenly;
  height: 10vh;
  width: 100%;
`;

export default class NavBar extends Component {
  render() {
    let { title, linklist } = this.props;
    return (
      <nav>
        <a href="#my-id" uk-toggle>
          <StyledNavElement>C</StyledNavElement>
        </a>
      </nav>
    );
  }
}
