import React, { Component } from "react";
import { getMovies, getMovie } from "../FakeMovies/fakeMovieService.js";

class Movie extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (Delmovie) => {
    //-------Clone
    let Movies = [...this.state.movies];
    //-----Edit
    Movies = Movies.filter((movie) => movie._id != Delmovie._id);
    //------Update
    this.setState({ movies: Movies });
  };

  render() {
    let { movies } = this.state;
    if (movies.length === 0) return <p>There are NO movies in the DataBase</p>;
    return (
      <React.Fragment>
        <div className="m-2">
          Showing {movies.length} movies in the DataBase
        </div>
        <table className="table table-sm">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    className="btn btn-sm btn-danger m-2"
                    onClick={() => this.handleDelete(movie)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movie;
