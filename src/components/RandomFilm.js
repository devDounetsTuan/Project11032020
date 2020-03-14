import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Player from "./Video";
import Home from "./Home";

class RandomFilm extends Component {
  constructor() {
    super();
    this.state = { filmLists: []};
    //this.handleRoutePage = this.handleRoutePage.bind(this);
  }

  handleRoutePage() {
    this.setState({ isRoutes: true });
  }

  componentDidMount() {

      fetch(`http://5e68e752d426c00016b7e858.mockapi.io/randomfilm69`)
        .then(response => response.json())
        .then(data =>
          this.setState({
            filmLists: data
          })
        );
  }
  render() {
    var filmLists = this.state.filmLists;

    return (
      <>
        <h2 className="header-list-index">
          <a className="more-list-index" href="" title="Phim sex không che">
            Phim Ngẫu nhiên
          </a>
        </h2>
        <div className="last-film-box-wrapper">
          <ul className="last-film-box" id="movie-first-movie">
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
                            <div className="movie-title-1">
                              {film.u_film_name}
                            </div>
                            <span className="ribbon">FHD</span>
                          </div>
                        </div>
                      </Link>
                    </a>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}

export default RandomFilm;
