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
            10
          </a>
          <a style={{ color: "#fff" }} className="currentpage">
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
      </>
    );
  }
}

export default Navigation;


