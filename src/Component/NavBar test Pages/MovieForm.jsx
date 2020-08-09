import React, { Component } from "react";
import Form from "../Form Components/Form";
import Joi from "joi-browser";
import { getGenres } from "../../FakeMovies/fakeGenreService";
import { saveMovie, getMovie } from "../../FakeMovies/fakeMovieService";

class NewMovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    errors: {},
  };

  Genres = getGenres();

  componentDidMount = () => {
    const { match } = this.props;
    const movieId = match.params.id;
    if (match.params.id) {
      let movie = getMovie(match.params.id);
      let data = {};
      data.genreId = movie.genre._id;
      data.numberInStock = movie.numberInStock;
      data.title = movie.title;
      data._id = movie._id;
      data.dailyRentalRate = movie.dailyRentalRate;
      this.setState({ data });
    }
  };

  schema = {
    title: Joi.string().required().label("Title"),
    numberInStock: Joi.number()
      .required()
      .min(1)
      .max(100)
      .label("Number in Stock"),
    dailyRentalRate: Joi.number().required().min(0).max(10).label("Rate"),
    genreId: Joi.string().required(),
    _id: Joi.string(),
  };

  doSubmit = () => {
    const movie = { ...this.state.data };
    const newMovie = saveMovie(movie);
    this.props.history.replace("/movies");
  };

  render() {
    return (
      <React.Fragment>
        <div className="my-3">
          <h3>Movie Form</h3>
        </div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderDropDown(this.Genres, "genreId", "Genre")}
          {this.renderInput("numberInStock", "Numbers in stock", "number")}
          {this.renderInput("dailyRentalRate", "Rate", "number")}
          {this.renderBtn("Save")}
        </form>
      </React.Fragment>
    );
  }
}

export default NewMovieForm;
