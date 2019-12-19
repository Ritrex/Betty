import React, { Component } from "react";
import "./App.css";
import Router from "./Router";
import axios from "axios";
import "uikit/dist/css/uikit.min.css";
import { Redirect } from "react-router-dom";
class App extends Component {
  constructor() {
    super();
    console.log(localStorage);
    let user = JSON.parse(localStorage.getItem("user"));
    //let token = JSON.parse(localStorage.getItem("token"));
    this.state = { user, isFetching: false };
    if (user !== undefined) console.log("user found: ", user);
    // if (user !== undefined && user !== null) {
    //   let tasks = axios.post(
    //     "https://bettymanager.herokuapp.com/api/user/tasks",
    //     { user }
    //   );
    // }
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
    console.log("Login\n", email.value, password.value, "E", state);
    axios
      .post("https://bettymanager.herokuapp.com/api/user/login", {
        email: email.value,
        password: password.value
        // token: state.token
      })
      .then(res => {
        let { user, token } = res.data;
        console.log(res.data);
        console.log("!");
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        console.log("Uno", state, state.setState({ user, token }));

        console.log("logged in", state);
        return <Redirect to="/"></Redirect>;
      })
      .catch(error => {
        console.log("There was an error trying to log in:", error);
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
      .post("https://bettymanager.herokuapp.com/api/user/signup", {
        email: email.value,
        password: password.value,
        confpassword: confpassword.value,
        name: name.value
      })
      .then(res => {
        let { user, token } = res.data;
        console.log(user, token);
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

  handleLogout = e => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    //state.setState({ user: null });
    //state.setState({ user: null });
    return <Redirect to="/"></Redirect>;
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
    axios.post(
      `https://bettymanager.herokuapp.com/api/user/update/${state.state.user._id}`,
      {
        email: email.value,
        password: password.value,
        confpassword: confpassword.value,
        name: name.value
      }
    );
  };

  getUser = (e, state) => {
    let { user } = this.state.state.user;
    axios
      .post(`https://bettymanager.herokuapp.com/api/user${user}`)
      .then(user => {
        console.log("User retrieved & found:", user);
      });
  };

  getUserTasks = (e, state) => {
    let { user } = this.state.state;
    axios
      .post(`https://bettymanager.herokuapp.com/api/task/`)
      .then()
      .catch();
  };

  createTask = (e, state, userid) => {};

  deleteTask = (e, state, userid, taskid) => {};

  updateTask = (e, state, userid, taskid) => {};

  createProcess = (e, state, userid, taskid) => {};

  deleteProcess = (e, state, userid, taskid, processid) => {};

  updateProcess = (e, state, userid, taskid, processid) => {};
}

export default App;
