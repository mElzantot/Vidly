import React, { Component } from "react";
import _ from "lodash";

class Pagination extends Component {
  state = {};
  render() {
    let { moviesCount, currentPage, pageSize, OnPageChange } = this.props;
    let NumberOfPages = Math.ceil(moviesCount / pageSize);
    if (NumberOfPages === 1) return null;
    const pages = _.range(1, NumberOfPages + 1);
    return (
      <nav aria-label="Page navigation example" style={{ cursor: "pointer" }}>
        <ul className="pagination">
          {pages.map((page) => (
            <li
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
              key={page}
            >
              <a className="page-link" onClick={() => OnPageChange(page)}>
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
