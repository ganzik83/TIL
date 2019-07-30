import React, { Component } from "react";
import { Button, Form, Label, FormGroup, Input } from "reactstrap"; // use button component
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignupForm.css";

export default class SignupForm extends Component {
  render() {
    return (
      <Form className="signup-form">
        <h1 className="text-center">STYEL</h1>
        <h4 className="text-center">Forever Young</h4>
        <FormGroup>
          <Label>email</Label>
          <Input
            type="email"
            id="inputEmail"
            placeholder="Email"
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
            id="inputPassword"
            name="password"
            placeholder="Password"
            autocomplete="new-password"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>password</Label>
          <Input
            type="password"
            id="inputConfirmPassword"
            placeholder="Confirm password"
            name="confirm_password"
            autocomplete="-new-password"
            required
          />
        </FormGroup>
        <Button className="btn btn-lg btn-dark btn-block">Sign Up</Button>
        <div className="text-center">
          <a href="/login">Login</a>
        </div>
      </Form>
    );
  }
}
