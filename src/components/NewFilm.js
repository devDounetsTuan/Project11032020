import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Player from "./Player";
import Home from "./Home";

class NewFilm extends Component {
  constructor() {
    super();
    this.state = { filmLists: [], isRoutes: false };
    //this.handleRoutePage = this.handleRoutePage.bind(this);
  }

  handleRoutePage() {
    this.setState({ isRoutes: true });
  }
  
  componentDidMount() {
    if (this.state.isRoutes == false) {
      fetch(`http://5e68e752d426c00016b7e858.mockapi.io/films`)
        .then(response => response.json())
        .then(data =>
          this.setState({
            filmLists: data
          })
        );
    }
  }
  render() {
    const currentPath = window.location.pathname
  
    if(currentPath.includes('/player')){
      return null;
    } else {
      var filmLists = this.state.filmLists;
      return (
        <>
          {filmLists.map(film => {
            return (
              <>
                <li key={film.id}>
                  <a href="/player" className="movie-item m-block">
                    <Link to="/player">
                      <div className="block-wrapper">
                        <div className="movie-thumbnail ratio-box ratio-3_4">
                          <div
                            className="public-film-item-thumb ratio-content"
                            style={{
                              backgroundImage: `url(${film.u_url_image})`
                            }}
                          >
                            {" "}
                          </div>
                        </div>
                        <div className="movie-meta">
                          <div className="movie-title-1">{film.u_film_name}</div>
                          <span className="ribbon">FHD</span>
                        </div>
                      </div>
                    </Link>
                  </a>
                </li>
              </>
            );
          })}
        </>
      );
    }
   
  }
}

export default NewFilm;
