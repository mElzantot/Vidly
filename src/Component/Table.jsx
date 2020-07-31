import React, { Component } from "react";
import { Route } from "react-router-dom";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import MovieForm from "./NavBar test Pages/MovieForm";

class Table extends Component {
  state = {};
  render() {
    const {
      movies,
      onLikeChange,
      onDelete,
      currentSort,
      onSort,
      columns,
    } = this.props;

    return (
      <div>
        <table className="table table-sm">
          <TableHead
            columns={columns}
            currentSort={currentSort}
            onSort={onSort}
          />
          <TableBody
            onDelete={onDelete}
            movies={movies}
            onLikeChange={onLikeChange}
            columns={columns}
          />
        </table>
      </div>
    );
  }
}

export default Table;
