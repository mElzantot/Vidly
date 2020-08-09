import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./Input";
import DropDown from "./DropDown";

class Form extends Component {
  state = { data: {}, errors: {} };

  validate = () => {
    const JoiOPtions = { abortEarly: false };
    const errors = {};
    const result = Joi.validate(this.state.data, this.schema, JoiOPtions);
    if (!result.error) return null;
    result.error.details.forEach((item) => {
      errors[item.path[0]] = item.message;
    });
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const property = { [name]: value };
    const PropSchema = { [name]: this.schema[name] };
    const { error } = Joi.validate(property, PropSchema, { abortEarly: true });
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    this.doSubmit();
  };

  handleChange = ({ currentTarget }) => {
    const data = { ...this.state.data };
    const errors = { ...this.state.errors };
    console.log(currentTarget.value);
    data[currentTarget.name] = currentTarget.value;
    const errorMsg = this.validateProperty(currentTarget);
    errors[currentTarget.name] = errorMsg;
    this.setState({ data, errors });
  };

  renderBtn = (label) => {
    return (
      <button
        disabled={this.validate()}
        className="btn btn-primary btn-sm"
        type="submit"
      >
        {label}
      </button>
    );
  };

  renderInput = (name, label, type = "text") => {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        label={label}
        value={data[name]}
        error={errors[name]}
        type={type}
        onChange={this.handleChange}
      />
    );
  };

  renderDropDown = (listData, name, label) => {
    const { data, errors } = this.state;
    return (
      <DropDown
        data={listData}
        name={name}
        label={label}
        value={data[name]}
        error={errors[name]}
        onChange={this.handleChange}
      />
    );
  };
}

export default Form;
