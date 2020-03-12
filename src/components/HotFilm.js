import React, { Component } from "react";
import ReactDOM from "react-dom";

class HotFilm extends Component {
  constructor() {
    super();
    this.state = { filmLists: [] };
  }

  componentDidMount() {
    fetch(`http://5e68e752d426c00016b7e858.mockapi.io/films`)
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
        {filmLists.map(film => {
          return (
            <li key={film.id} className="list-top-movie-item">
              <a className="list-top-movie-link" href="" title="">
                <div
                  className="list-top-movie-item-thumb"
                  style={{ backgroundImage: `url(${film.u_url_image})` }}
                ></div>
                <div className="list-top-movie-item-info">
                  <span className="list-top-movie-item-vn">
                    Superman Mifune
                  </span>
                  <span className="list-top-movie-item-view">View: 69,057</span>
                </div>
              </a>
            </li>
          );
        })}
      </>
    );
  }
}

export default HotFilm;
