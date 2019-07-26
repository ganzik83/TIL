import React, { Component } from "react";
import { Button, Form, Label, FormGroup, Input } from "reactstrap"; // use button component
import "bootstrap/dist/css/bootstrap.min.css";
import "./Signup.scss";
import axios from "axios";
import serialize from "form-serialize";

export default class Signup extends Component {
  postSignup = () => {
    let formData = document.querySelector("#signupForm");
    axios
      .post(
        "http://localhost:5000/api/user/signup",
        serialize(formData, { hash: true })
      )
      .then(response => {
        console.log("success: ", response);
        window.location.replace("http://localhost:3000/login");
      })
      .catch(error => {
        console.log("failure: ", error);
      });
  };

  render() {
    return (
      <Form className="signup-form" id="signupForm">
        <h1 className="text-center">STYEL</h1>
        <h4 className="text-center">Forever Young</h4>
        <FormGroup>
          <Label>ID</Label>
          <Input
            type="text"
            id="inputUserid"
            placeholder="User ID"
            name="userid"
            autoComplete="username"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            id="inputEmail"
            placeholder="Email"
            name="email"
            autoComplete="email"
            required
            autoFocus
          />
        </FormGroup>
        <FormGroup>
          <Label>Name</Label>
          <Input type="text" id="inputName" placeholder="Name" name="name" />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            type="password"
            id="inputPassword"
            name="password"
            placeholder="Password"
            autoComplete="new-password"
            required
          />
        </FormGroup>
        <Button
          className="btn btn-lg btn-dark btn-block"
          onClick={this.postSignup}
        >
          Sign Up
        </Button>
        <div className="text-center">
          <a href="/login">Login</a>
        </div>
      </Form>
    );
  }
}
