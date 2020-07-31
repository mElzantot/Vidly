import React, { Component } from "react";
import "./App.css";

import Movie from "./Component/Movie";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./Component/NavBar";
import Customers from "./Component/NavBar test Pages/Customers";
import Rentals from "./Component/NavBar test Pages/Rentals";
import NotFound from "./Component/NavBar test Pages/NotFound";
import MovieForm from "./Component/NavBar test Pages/MovieForm";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/movies" exact component={Movie} />
            <Route path="/movies/:id" component={MovieForm} />

            <Route path="/rentals" component={Rentals} />
            <Route path="/customers" component={Customers} />

            <Route path="/" exact component={Movie} />
            <Route path="/notFound" component={NotFound} />
            <Redirect to="/Notfound" />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
