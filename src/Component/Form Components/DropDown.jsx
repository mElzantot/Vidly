import React, { Component } from "react";

class DropDown extends Component {
  state = {};
  render() {
    const { data, value, name, label, error, onChange } = this.props;
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <select
          className="form-control col-5"
          name={name}
          value={value}
          onChange={onChange}
        >
          <option key="0"></option>
          {data.map((g) => (
            <option key={g._id} value={g._id}>
              {g.name}
            </option>
          ))}
        </select>
        <span className="form-text  alert alert-danger badge badge-sm">
          {error}
        </span>
      </div>
    );
  }
}

export default DropDown;
