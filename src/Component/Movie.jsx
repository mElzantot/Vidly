import React, { Component } from "react";
import { getMovies } from "../FakeMovies/fakeMovieService.js";

import Like from "./Like.jsx";
import Pagination from "./Pagination.jsx";
import Genres from "./Genres.jsx";

class Movie extends Component {
  state = {
    movies: [],
    currentPage: 1,
    currentGenre: { name: "All Genres" },
    pageSize: 3,
  };

  //-------Component Mount
  componentDidMount() {
    this.setState({ movies: getMovies() });
  }

  handleDelete = (Delmovie) => {
    //-------Clone
    let Movies = [...this.state.movies];
    //-----Edit
    Movies = Movies.filter((movie) => movie._id !== Delmovie._id);
    //------Update
    this.setState({ movies: Movies });
  };

  handleLike = (movie) => {
    //--Clone
    let movies = [...this.state.movies];
    let index = this.state.movies.findIndex((m) => m._id === movie._id);
    //----Edit
    movie.liked = !movie.liked;
    movies[index] = movie;
    //---Update
    this.setState({ movies });

    //---
  };

  handlePagination = (pageNum) => {
    this.setState({ currentPage: pageNum });
  };

  handlGenre = (genre) => {
    console.log(genre);
    this.setState({ currentGenre: genre, currentPage: 1 });
    console.log(this.state.movies);
  };

  render() {
    let { movies: allMovies, pageSize, currentPage, currentGenre } = this.state;
    allMovies = currentGenre._id
      ? allMovies.filter((m) => m.genre._id === currentGenre._id)
      : allMovies;

    if (allMovies.length === 0)
      return <p>There are NO movies in the DataBase</p>;
    let start = pageSize * (currentPage - 1);
    let movies = allMovies.slice(start, start + pageSize);
    return (
      <div className="row">
        <Genres onGenreChange={this.handlGenre} />
        <div className="col">
          <div className="m-2">
            Showing {allMovies.length} movies in the DataBase
          </div>
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
              {movies.map((movie) => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like movie={movie} onLike={this.handleLike} />
                  </td>
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
          <Pagination
            moviesCount={allMovies.length}
            pageSize={pageSize}
            currentPage={currentPage}
            OnPageChange={this.handlePagination}
          />
        </div>
      </div>
    );
  }
}

export default Movie;
