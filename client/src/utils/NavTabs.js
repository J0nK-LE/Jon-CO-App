import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav>
      <div>
        <div>
          <ul>
            <ul>
              <a
                href="#search"
                onClick={() => handlePageChange("Search")}
                className={
                  currentPage === "Search" ? "nav-link active" : "nav-link"
                }
              >
                <span>Click here for search</span>
              </a>
            </ul>
            <ul>
              <a
                href="#filter"
                onClick={() => handlePageChange("Filter")}
                className={
                  currentPage === "Filter" ? "nav-link active" : "nav-link"
                }
              >
                <span>Click here for filter</span>
              </a>
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavTabs;
