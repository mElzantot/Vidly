import React from "react";
import { getGenres } from "../FakeMovies/fakeGenreService";

const Genres = (props) => {
  const moviesGenres = [{ name: "All Genres", _id: " " }, ...getGenres()];
  const { valueProperty, TextProperty } = props;
  return (
    <div className="list-group col-2">
      {moviesGenres.map((mG) => (
        <button
          type="button"
          key={mG[valueProperty]}
          className="list-group-item list-group-item-action "
          onClick={() => props.onGenreChange(mG)}
        >
          {mG[TextProperty]}
        </button>
      ))}
    </div>
  );
};

//-------Implement Default Props
Genres.defaultProps = {
  valueProperty: "_id",
  TextProperty: "name",
};

export default Genres;
