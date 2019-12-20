import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const FolderContainer = styled.div`
  //border: solid 1px #000;
  width: ${props => (props.width ? props.width : "100%")};
  height: ${props => (props.height ? props.height : "100%")};
  padding: 5px;
  align-content: left;
  //text-align: center;
`;

const FolderTab = styled.div`
  margin: 0 auto;
  background-color: #e1c699;
  margin-right: 80%;
  border-radius: 5px 15px 0 0;
  width: ${props => (props.width ? props.width : "20%")};
  height: ${props => (props.height ? props.height : "10%")};
  align-self: left;
`;

const FolderBody = styled.div`
  width: ${props => (props.width ? props.width : "100%")};
  height: ${props => (props.height ? props.height : "80%")};
  border-radius: 0 5px 5px 5px;
  box-shadow: 1px 1px 0 1px #cccccc;
  margin: 0 auto;
  background-color: #e1c699;
`;

class Folder extends Component {
  render() {
    let { tabheight, tabwidth, bodyheight, bodywidth } = this.props;

    return (
      <FolderContainer>
        <FolderTab width={tabwidth} height={tabheight}></FolderTab>
        <FolderBody width={bodywidth} height={bodyheight}>
          <table style={{ color: "black", width: "100%", height: "100%" }}>
            <thead>
              <tr style={{ width: "100%" }}>
                <th>filename</th>
                <th>size</th>
                <th>last update</th>
                <th>download</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1256 SUNBEAM</td>
                <td>12.52 MB</td>
                <td>12/07/2019</td>
                <td>
                  <Link to="/task/documents">Info</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </FolderBody>
      </FolderContainer>
    );
  }
}

export default Folder;
