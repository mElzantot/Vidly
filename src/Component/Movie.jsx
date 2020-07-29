import React, { Component } from "react";
import { getMovies } from "../FakeMovies/fakeMovieService.js";

import Pagination from "./Pagination.jsx";
import Genres from "./Genres.jsx";
import MoviesTable from "./MoviesTable";

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
          <MoviesTable
            movies={movies}
            onLikeChange={this.handleLike}
            onDelete={this.handleDelete}
          />
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
