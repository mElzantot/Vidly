import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  state = {};

  renderCell = (movie, col) => {
    if (col.content) return col.content(movie);
    else return _.get(movie, col.path);
  };

  createKey = (movie, col) => {
    return movie._id + (col.path || col.key);
  };

  render() {
    const { movies, columns } = this.props;
    return (
      <tbody>
        {movies.map((movie) => (
          <tr key={movie._id}>
            {columns.map((col) => (
              <td key={this.createKey(movie, col)}>
                {this.renderCell(movie, col)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
