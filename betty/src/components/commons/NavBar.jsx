import React, { Component } from "react";
import styled from "styled-components";
import "uikit/dist/css/uikit.min.css";
const StyledNavElement = styled.div`
  width: 5%;
  height: 100%;
  text-decoration: none;
  color: black;
`;
// background-color: #cec4a2;
const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 10%;
  width: 100%;
`;

const Img100 = styled.img`
  width: 100%;
  height: 100%;
`;

export default class NavBar extends Component {
  render() {
    return (
      <StyledNav>
        <StyledNavElement>
          <a
            id={"burger"}
            href="#my-id"
            onClick={() => {
              let sidebar = document.getElementById("my-id");
              console.log(sidebar.visibility);
              let bell = document.getElementById("bell");
            }}
          >
            <Img100 src="/hamburger.png"></Img100>
          </a>
        </StyledNavElement>

        <StyledNavElement>
          <a id={"bell"} href="#" uk-toggle="true">
            <Img100 src="/bell.png"></Img100>
          </a>
        </StyledNavElement>
      </StyledNav>
    );
  }
}
