import React, { Component } from "react";
import ReactDOM from "react-dom";

class Film extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    var that = this;
    fetch(`http://5e68e752d426c00016b7e858.mockapi.io/films`)
      .then(response => response.json())
      .then(data =>
        that.setState({
          data: data
        })
      );
    
  }
  render() {
    var arr = this.state.data;
  
    if(arr.length > 0){
      console.log("Test" + arr[2].u_film_name);
    }
    return (
      <React.Fragment>
        {arr.map(obj => {
          <li>
            <a
              class="movie-item m-block"
              title=""
              href=""
            >
              <div class="block-wrapper">
                <div class="movie-thumbnail ratio-box ratio-3_4">
                  <div
                    class="public-film-item-thumb ratio-content"
                    style="background-image:url()"
                  ></div>
                </div>
                <div class="movie-meta">
                  <div class="movie-title-1">{obj.u_film_name}</div>
                  <span class="ribbon">FHD</span>
                </div>
              </div>
            </a>
          </li>;
        })}
      </React.Fragment>
    );
  }
}

export default Film;
const wrapper = document.getElementById("movie-first-movie");
wrapper ? ReactDOM.render(<Film/>, wrapper) : false;
