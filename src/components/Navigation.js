import React, { Component } from "react";
import ReactDOM from "react-dom";


/* function useQuery() {
  return new URLSearchParams(useLocation().search);
} */

class Navigation extends Component {
  render() {
    return (
      <>
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
            1
          </a>
          <a style={{ color: "#fff" }} className="currentpage">
           2
          </a>
          <a
            className="page-numbers"
            href="/category/uncensored-3/page/12/"
            title="View page 12"
          >
            3
          </a>
          <a
            className="page-numbers"
            href="/category/uncensored-3/page/13/"
            title="View page 13"
          >
            4
          </a>
          <a
            className="page-numbers"
            href="/category/uncensored-3/page/14/"
            title="View page 14"
          >
            5
          </a>
          <a
            className="page-numbers"
            href="/category/uncensored-3/page/15/"
            title="View page 15"
          >
            6
          </a>
          <a
            className="page-numbers"
            href="/category/uncensored-3/page/16/"
            title="View page 16"
          >
            7
          </a>
          <a
            className="page-numbers"
            href="/category/uncensored-3/page/12/"
            title="View next page"
          >
            →
          </a>
        </div>
      </>
    );
  }
}

export default Navigation;


