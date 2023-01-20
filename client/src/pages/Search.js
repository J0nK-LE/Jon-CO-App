import React, { useState, useEffect, useCallback } from "react";
import "../App.css";

const Search = () => {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchedData, setSearchedData] = useState(allData);
  const keys = ["Name", "WMI", "Country", "CreatedOn", "VehicleType"];

  useEffect(() => {
    fetch(`http://localhost:3001/wmi`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setAllData(data);
        setSearchedData(data);
        setError(null);
        console.log("API data", data);
      })
      .catch((error) => {
        setError(error.message);
        setAllData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    let value = e.target.value.toUpperCase();
    let result = [];
    // console.log(value);
    result = allData.filter((data) => {
      return data.WMI.search(value) !== -1;
    });
    setSearchedData(result);
  };

  const getRowsJsx = () => {
    return searchedData.map((d) => {
      const wmi = d.WMI;
      return (
        <tr key={wmi}>
          {keys.map((k) => (
            <td key={`${wmi}-${k}`}>{d[k]}</td>
          ))}
        </tr>
      );
    });
  };

  if (error) {
    return <>{error.message}</>;
  } else if (loading) {
    return <>loading...</>;
  } else {
    return (
      <div className="App">
        <header>WMI Data - Honda | Total:{searchedData.length}</header>

        <label>Search for WMI:</label>
        <input type="text" onChange={(e) => handleSearch(e)} />
        <table>
          <thead>
            <tr>
              {keys.map((k) => (
                <th key={k}>{k}</th>
              ))}
            </tr>
          </thead>
          <tbody>{getRowsJsx()}</tbody>
        </table>
      </div>
    );
  }
};

export default Search;
