import React, { Component } from "react";
import { Button, Form, Label, FormGroup, Input } from "reactstrap"; // use button component
import "bootstrap/dist/css/bootstrap.min.css";
import "./LoginForm.css";

export default class LoginForm extends Component {
  render() {
    return (
      <Form className="login-form">
        <h1 className="text-center">STYEL</h1>
        <h4 className="text-center">Forever Young</h4>
        <FormGroup>
          <Label>email</Label>
          <Input
            type="email"
            placeholder="email"
            name="email"
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
            autocomplete="current-password"
            required
          />
          <small id="passwordHelpBlock" class="form-text text-muted">
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji
          </small>
        </FormGroup>
        <Button className="btn btn-lg btn-dark btn-block">LOGIN</Button>
        <div className="text-center">
          <a href="/sign-up">Sign Up</a>
          <span> | </span>
          <a href="/forgotPassword">Forgot Password</a>
        </div>
      </Form>
    );
  }
}
