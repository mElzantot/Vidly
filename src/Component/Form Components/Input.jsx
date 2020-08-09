import React from "react";

const Input = ({ name, label, value, error, onChange, type = "text" }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        className="form-control col-5"
        id={name}
        value={value}
        name={name}
        type={type}
        onChange={onChange}
      />
      <span className="form-text  alert alert-danger badge badge-sm">
        {error}
      </span>
    </div>
  );
};

export default Input;
