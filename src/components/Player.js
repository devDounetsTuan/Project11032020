import React, { Component } from "react";
import ReactDOM from "react-dom";
import NewFilm from "./NewFilm.js";
import HotFilm from "./HotFilm.js";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
class Player extends Component {
  render() {
    return (
      <>
        <h1>Hello Player</h1>
        <Link to="/">Home</Link>
      </>
    );
  }
}

export default Player;
