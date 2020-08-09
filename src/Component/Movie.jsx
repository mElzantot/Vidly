import React, { Component } from "react";
import { getMovies } from "../FakeMovies/fakeMovieService.js";

import Pagination from "./Pagination.jsx";
import Genres from "./Genres.jsx";
import MoviesTable from "./MoviesTable";

import _ from "lodash";
import { Link } from "react-router-dom";

class Movie extends Component {
  state = {
    movies: [],
    currentPage: 1,
    currentGenre: { name: "All Genres", _id: " " },
    pageSize: 3,
    currentSort: { path: "title", order: "asc" },
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
    this.setState({ currentGenre: genre, currentPage: 1 });
  };

  handleSort = (currentSort) => {
    this.setState({ currentSort });
  };

  getPageDate = () => {
    let {
      movies: allMovies,
      pageSize,
      currentPage,
      currentGenre,
      currentSort,
    } = this.state;
    //----------Filtered by Genres
    allMovies =
      currentGenre._id !== " "
        ? allMovies.filter((m) => m.genre._id === currentGenre._id)
        : allMovies;

    //----------Sorting
    allMovies = _.orderBy(allMovies, [currentSort.path], [currentSort.order]);

    //----Pagination
    let start = pageSize * (currentPage - 1);
    let movies = allMovies.slice(start, start + pageSize);

    return { movies, moviesCount: allMovies.length };
  };

  render() {
    let { movies: allMovies, pageSize, currentPage, currentSort } = this.state;

    //--------Check if there is Movies to display
    if (allMovies.length === 0)
      return <p>There are NO movies in the DataBase</p>;

    const { movies, moviesCount } = this.getPageDate();

    return (
      <div className="row mt-5">
        <Genres onGenreChange={this.handlGenre} />
        <div className="col">
          <div className="m-2">
            <div>
              <Link to="/movieform" className="btn btn-primary btn-sm m-2">
                New Movie
              </Link>
            </div>
            Showing {moviesCount} movies in the DataBase
          </div>
          <MoviesTable
            movies={movies}
            onLikeChange={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
            currentSort={currentSort}
          />
          <Pagination
            moviesCount={moviesCount}
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
