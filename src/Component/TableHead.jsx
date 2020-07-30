import React, { Component } from "react";

class TableHead extends Component {
  raiseSort = (path) => {
    let currentSort = { ...this.props.currentSort };
    if (currentSort.path === path)
      currentSort.order = currentSort.order === "asc" ? "desc" : "asc";
    else {
      currentSort.path = path;
      currentSort.order = "asc";
    }
    this.props.onSort(currentSort);
  };

  renderSortIcon = (col) => {
    const { currentSort } = this.props;
    if (col.path !== currentSort.path) return null;
    else if (currentSort.order === "asc")
      return <i className="fa fa-sort-asc" aria-hidden="true"></i>;
    else return <i className="fa fa-sort-desc" aria-hidden="true"></i>;
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((col) => (
            <th
              key={col.path || col.key}
              style={{ cursor: "pointer" }}
              onClick={() => this.raiseSort(col.path)}
            >
              {col.label} {this.renderSortIcon(col)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHead;
