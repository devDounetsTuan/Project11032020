import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";

class Player extends Component {
  render() {
    const currentPath = window.location.pathname;

    if (!currentPath.includes("/player")) {
      return null;
    } else {
     
      return (
        <>
          <div class="header-play">
          <h1 className="header-title">
            <a
              title="Địt cô em họ lẳng lơ Nene Kinoshita"
              href="http://javhd.pro/dit-co-em-ho-lang-lo-nene-kinoshita-1796.html"
            >
              Địt cô em họ lẳng lơ Nene Kinoshita
            </a>
          </h1>
          <div id="video-entry">
            <div id="video" data-id="1796" data-sv="1">
              <video
                poster="/path/to/poster.jpg"
                id="player"
                playsinline
                controls
                style={{width: "100%"}}
              >
                <source
                  src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <div className="user-action">
            <a
              className="server active"
              id="server1"
              rel="nofollow"
              href="javascript:void(0)"
              onclick="if (!window.__cfRLUnblockHandlers) return false; server(1796,1)"
            >
              #1
            </a>
            <a
              className="server"
              id="server2"
              rel="nofollow"
              href="javascript:void(0)"
              onclick="if (!window.__cfRLUnblockHandlers) return false; server(1796,2)"
            >
              #2
            </a>
            <a
              className="server"
              id="server3"
              rel="nofollow"
              href="javascript:void(0)"
              onclick="if (!window.__cfRLUnblockHandlers) return false; server(1796,3)"
            >
              #3
            </a>
            <span className="icon-zoom">Zoom+</span>
            <a
              className="icon-dl"
              rel="nofollow"
              href="javascript:void(0)"
              onclick="if (!window.__cfRLUnblockHandlers) return false; dlvideo(1796)"
            >
              Download
            </a>
            <span className="icon-view active">Views: 52,502</span>
            <div id="show-dl"></div>         
          </div>
          </div>
        </>
      );
    }
  }
}

export default Player;
