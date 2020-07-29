import React, { Component } from "react";
import Like from "./Like";

class MoviesTable extends Component {
  state = {};
  render() {
    return (
      <table className="table table-sm">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {this.props.movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like movie={movie} onLike={this.props.onLikeChange} />
              </td>
              <td>
                <button
                  className="btn btn-sm btn-danger m-2"
                  onClick={() => this.props.onDelete(movie)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
