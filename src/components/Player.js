import React, { Component } from "react";
import ReactDOM from "react-dom";
import NewFilm from "./NewFilm.js";
import HotFilm from "./HotFilm.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import Video from "./Video.js";
import RandomFilm from "./RandomFilm.js";
import SideBar from "./SideBar.js";
import Navigation from "./Navigation.js";

/* function useQuery() {
  return new URLSearchParams(useLocation().search);
} */

class Player extends Component {
  constructor() {
    super();
    this.state = { filmLists: [] };
    //this.handleRoutePage = this.handleRoutePage.bind(this);
  }

  componentDidMount() {
    const match = this.props.match;
    if (match) {
      fetch(
        `http://5e68e752d426c00016b7e858.mockapi.io/films/${match.params.id}`
      )
        .then(response => response.json())
        .then(data =>
          this.setState({
            player: data
          })
        );
      console.log("Test 02");
    }
    console.log("Test 022");
  }

  render() {
    const currentPath = window.location.pathname;
    if (!currentPath.includes("/player")) {
      return null;
    } else {
      return (
        <>
          <header id="header">
            <div className="wrap cf">
              <span className="header-icon-new" id="header-icon">
                <span className="header-icon-new-top">
                  <span className="line line-top "></span>
                </span>
                <span className="header-icon-new-bottom">
                  <span className="line line-bottom "></span>
                </span>
              </span>
              <div id="branding" className="text-branding" role="banner">
                <div id="site-title">
                  <a
                    rel="home"
                    href=""
                    className="title"
                    title="Xem Phim Sex Online Chất Lượng HD"
                  >
                    <img src="" alt="" />
                    Logo
                  </a>
                </div>
              </div>
              <span className="search-icon" id="search-icon"></span>
              <div className="menu-search">
                <div className="searchform-div">
                  <form
                    method="get"
                    id="form-search"
                    className="searchform"
                    action=""
                  >
                    <div className="search-text-div">
                      <input
                        type="text"
                        name="keyword"
                        className="search-text"
                        value=""
                        placeholder="Search"
                        required=""
                      />
                      <input type="button" className="clean-button" />
                      <input
                        id="searchsubmit"
                        type="submit"
                        className="search-submit"
                        value="Search"
                      />
                    </div>
                  </form>
                </div>
              </div>
              <nav className="menu">
                <ul>
                  <li>
                    <a href="">Login</a>
                  </li>
                  <li>
                    <a href="">Logout</a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <div id="main">
            <div className="container">
              <div id="main-content">
                <Video player={this.state.player} />
                <div className="movie-list-index home-v2">
                  <RandomFilm />
                </div>
              </div>
              <SideBar />
              <div style={{ clear: "both" }}></div>
            </div>
          </div>
          <footer className="wrap">
            <div className="copyright">
              <div className="foot"></div>
            </div>
          </footer>
        </>
      );
    }
  }
}

export default Player;
