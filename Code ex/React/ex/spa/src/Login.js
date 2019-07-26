import React, { Component } from "react";
import { Button, Form, Label, FormGroup, Input } from "reactstrap"; // use button component
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.scss";
import axios from "axios";
import serialize from "form-serialize";

export default class Login extends Component {
  postLogin = () => {
    let formData = document.querySelector("#loginForm");

    axios
      .post(
        "http://localhost:5000/api/auth/login",
        serialize(formData, { hash: true })
      )
      .then(response => {
        console.log("success: ", response);
        window.location.replace("http://localhost:3000/me");
      })
      .catch(error => {
        console.log("failure: ", error);
      });
    document.getElementById("userId").value = "";
    document.getElementById("password").value = "";
  };

  render() {
    return (
      <Form className="login-form" id="loginForm">
        <h1 className="text-center">STYEL</h1>
        <h4 className="text-center">Forever Young</h4>
        <FormGroup>
          <Label>ID</Label>
          <Input
            type="text"
            placeholder="User ID"
            name="userid"
            id="userId"
            autocomplete="username"
            required
            autofocus
          />
        </FormGroup>
        <FormGroup>
          <Label>password</Label>
          <Input
            type="password"
            placeholder="password"
            aria-describedby="passwordHelpBlock"
            name="password"
            id="password"
            autocomplete="current-password"
            required
          />
          <small id="passwordHelpBlock" class="form-text text-muted">
            Your password must be 6 characters long
          </small>
        </FormGroup>
        <Button
          className="btn btn-lg btn-dark btn-block"
          onClick={this.postLogin}
        >
          LOGIN
        </Button>
        <div className="text-center">
          <hr />
          <a href="/sign-up">Sign Up</a>
          <span> | </span>
          <a href="/forgotPassword">Forgot Password</a>
        </div>
      </Form>
    );
  }
}
