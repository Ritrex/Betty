import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Router from "./Router";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    console.log(localStorage)
    let user = JSON.parse(localStorage.getItem("user"));
    //let token = JSON.parse(localStorage.getItem("token"));
    this.state = { user, isFetching: false };
    if (user !== undefined) console.log("user found: ", user);
  }

  render() {
    return (
      <div className="App">
        <Router
          state={{ state: this.state, setState: this.setState }}
          handlers={{
            handleLogin: this.handleLogin,
            handleSignup: this.handleSignup,
            handleLogout: this.handleLogout
          }}
        />
      </div>
    );
  }

  handleLogin = (e, state) => {
    e.preventDefault();
    let { email, password } = e.target;
    console.log("Login\n", email.value, password.value, state);
    axios
      .post("http://localhost:3005/user/login", {
        email: email.value,
        password: password.value
      })
      .then(res => {
        let { user, token } = res.data;
        console.log(res.data);
        console.log("!");
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        console.log("Uno", state, state.setState({ user, token }));

        console.log("logged in", state);
      })
      .catch(error => {
        console.log("uh..", error);
        //push("/");
      });
  };

  handleSignup = (e, state) => {
    e.preventDefault();
    let { email, password, name, confpassword } = e.target;
    console.log(
      "Signup\n",
      email.value,
      name.value,
      password.value,
      confpassword.value
    );
    axios
      .post("http://localhost:3005/user/signup", {
        email: email.value,
        password: password.value,
        confpassword: confpassword.value,
        name: name.value
      })
      .then(res => {
        let { user, token } = res.data;
        console.log(user, token);
        console.log("!");
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        state.setState({ user });
        console.log("logged in", state);
      })
      .catch(error => {
        console.log(error);
        //push("/");
      });
  };

  handleLogout = (e, state) => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    //state.setState({ user: null });
  };

  handleUpdate = (e, state) => {
    e.preventDefault();
    let { email, password, name, confpassword } = e.target;
    console.log(
      "Update\n",
      email.value,
      name.value,
      password.value,
      confpassword.value
    );
    axios.post(`http://localhost:3005/user/update/${state.state.user._id}`, {
      email: email.value,
      password: password.value,
      confpassword: confpassword.value,
      name: name.value
    });
  };
}

export default App;
