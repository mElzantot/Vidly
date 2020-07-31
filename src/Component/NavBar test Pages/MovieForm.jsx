import React, { Component } from "react";

class MovieForm extends Component {
  state = {};

  handleSave = () => {
    this.props.history.replace("/movies");
  };

  render() {
    const { id } = this.props.match.params;
    return (
      <div>
        <h4 className="m-4">Movie Form {id}</h4>
        <button
          className="btn btn-sm m-2 btn-primary"
          onClick={this.handleSave}
        >
          Save
        </button>
      </div>
    );
  }
}

export default MovieForm;
