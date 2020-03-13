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
import Player from "./Player.js";
import RandomFilm from "./RandomFilm.js";


/* function useQuery() {
  return new URLSearchParams(useLocation().search);
} */

class SideBar extends Component {
  render() {
    return (
      <>
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
      </>
    );
  }
}

export default SideBar;
