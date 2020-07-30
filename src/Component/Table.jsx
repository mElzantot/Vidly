import React, { Component } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

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
    );
  }
}

export default Table;
