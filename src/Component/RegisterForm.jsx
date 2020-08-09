import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./Form Components/Form";

class RegisterForm extends Form {
  state = {
    data: { Email: "", password: "", Name: "" },
    errors: {},
  };

  schema = {
    Email: Joi.string().email().required().label("E-Mail"),
    password: Joi.string().required().min(5),
    Name: Joi.string().required(),
  };

  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div className="m-4 ">
        <h3>Register</h3>
        <form className="m-5" onSubmit={this.handleSubmit}>
          {this.renderInput("Email", "Email")}
          {this.renderInput("password", "password", "password")}
          {this.renderInput("Name", "Name")}
          {this.renderBtn("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
