import React, { Component } from "react";
import ReactDOM from "react-dom";
import NewFilm from "./NewFilm.js";
import HotFilm from "./HotFilm.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Player from "./Player.js";
import RandomFilm from "./RandomFilm.js";
class Home extends Component {
  render() {
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
            
                <Player />

              <div className="movie-list-index home-v2">
                <NewFilm />
                <RandomFilm />
              </div>

              <div className="navigation">
                <a
                  className="page-numbers"
                  href="/category/uncensored-3/page/10/"
                  title="Prev page"
                >
                  ←
                </a>
                <a
                  className="page-numbers"
                  href="/category/uncensored-3/page/10/"
                  title="View page 10"
                >
                  10
                </a>
                <a style={{ color: "#fff;" }} className="currentpage">
                  11
                </a>
                <a
                  className="page-numbers"
                  href="/category/uncensored-3/page/12/"
                  title="View page 12"
                >
                  12
                </a>
                <a
                  className="page-numbers"
                  href="/category/uncensored-3/page/13/"
                  title="View page 13"
                >
                  13
                </a>
                <a
                  className="page-numbers"
                  href="/category/uncensored-3/page/14/"
                  title="View page 14"
                >
                  14
                </a>
                <a
                  className="page-numbers"
                  href="/category/uncensored-3/page/15/"
                  title="View page 15"
                >
                  15
                </a>
                <a
                  className="page-numbers"
                  href="/category/uncensored-3/page/16/"
                  title="View page 16"
                >
                  16
                </a>
                <a
                  className="page-numbers"
                  href="/category/uncensored-3/page/12/"
                  title="View next page"
                >
                  →
                </a>
              </div>
            </div>
            <div id="sidebar">
              <div className="right-box top-film-week">
                <h2 className="right-box-header">Top Phim Hay</h2>
                <div id="tabs-movie">
                  <div className="right-box-content">
                    <ul className="list-top-movie" id="list-top-film">
                      <HotFilm />
                    </ul>
                  </div>
                </div>
              </div>
              <div style={{ clear: "both" }}></div>
            </div>
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

export default Home;

function App() {
  return (
    <>
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </>
  );
}
const wrapper = document.getElementById("page");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
