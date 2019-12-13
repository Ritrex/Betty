import React, { Component } from "react";

export default class FormDocumento extends Component {
  render() {
    let { setState, state } = this.props.state;
    let { action } = this.props;
    return (
      <div className="FormDocumento">
        <form
          action={action}
          method="post"
          type={
            inputFile
              ? "multipart/form-data"
              : "application/x-www-form-urlencoded"
          }
        ></form>
      </div>
    );
  }
}
