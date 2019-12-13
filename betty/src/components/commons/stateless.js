import React from "react";
import styled from "styled-components";
const SideBar = styled.div`
  text-decoration: none;
`;
const BarElement = styled.a`
  text-decoration: none;
`;

render(
  <div id="offcanvas-usage" uk-offcanvas>
    <div class="uk-offcanvas-bar">
      <button class="uk-offcanvas-close" type="button" uk-close></button>

      <h3>Title</h3>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  </div>
);
