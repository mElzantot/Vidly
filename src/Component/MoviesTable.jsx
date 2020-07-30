import React, { Component } from "react";
import Like from "./Like";
import Table from "./Table";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "In Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like movie={movie} onLike={this.props.onLikeChange} />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          className="btn btn-sm btn-danger m-2"
          onClick={() => this.props.onDelete(movie)}
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { movies, onLikeChange, onDelete, currentSort, onSort } = this.props;
    return (
      <Table
        columns={this.columns}
        movies={movies}
        currentSort={currentSort}
        onSort={onSort}
        onDelete={onDelete}
        onLikeChange={onLikeChange}
      />
    );
  }
}

export default MoviesTable;
