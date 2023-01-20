import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useHistory  } from 'react-router-dom';
import Search from "./pages/Search";
import Filter from "./pages/Filter";
import NavTabs from "./utils/NavTabs";




function App() {
  const [currentPage, setCurrentPage] = React.useState('Search');
  const renderPage = () => {
    if (currentPage === 'Search') {
      return <Search />;
    }
    if (currentPage === 'Filter') {
    return <Filter />;
  }
  };

  const handlePageChange = (page) => setCurrentPage(page);
  
  return (
    <div className="App">
        <div>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>

        {renderPage()}
      </div>
    );
  
}

export default App;
