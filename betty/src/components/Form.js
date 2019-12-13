import React, { Component } from "react";
import styled from "styled-components";
import { sign } from "crypto";

class Form extends Component {
  handleSubmit(e, signup, handler, state) {
    e.preventDefault();
    console.log("?", signup, state);
    handler(e, state);
  }
  render() {
    let { signup } = this.props;
    let { edit } = this.props;
    let { handler } = this.props;
    let { state } = this.props;
    console.log("Form", state);
    return (
      <div
        className="Signup"
        onSubmit={e => this.handleSubmit(e, signup, handler, state)}
      >
        <form action="submit">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder={edit ? "anexample@example.com" : ""}
            defaultValue={edit ? state.state.user.email : ""}
          ></input>
          {signup || edit ? <label htmlFor="name">Name:</label> : ""}
          {signup || edit ? (
            <input
              name="name"
              type="text"
              placeholder={edit ? "Douglas J." : ""}
              defaultValue={edit ? state.state.user.name : ""}
            ></input>
          ) : (
            ""
          )}
          <label htmlFor="password">Password: </label>

          <input name="password" type="password"></input>

          {signup || edit ? (
            <label htmlFor="confpassword">"Confirmar password:" </label>
          ) : (
            ""
          )}

          {signup || edit ? (
            <input name="confpassword" type="password"></input>
          ) : (
            ""
          )}
          <button type="submit">
            {signup ? "Register" : edit ? "Update" : "Login"}
          </button>
        </form>
      </div>
    );
  }
}
export default Form;
