import React, { useState, useEffect, useCallback } from "react";
import "./App.css";




function App() {
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


  const [state, setState] = useState({
    newData: allData,
    filters: new Set(),
  })
  
  const handleFilterChange = useCallback(event => {
    setState(previousState => {
      let filters = new Set(previousState.filters)
      let newData = allData
      
      if (event.target.checked) {
        filters.add(event.target.value)
      } else {
        filters.delete(event.target.value)
      }
      
      if (filters.size) {
        newData = newData.filter(wmi => {
          return filters.has(wmi.Country)
        })
      }
      
      return {
        filters,
        newData,
      }
    })
  }, [setState])

  const COUNTRIES = [
    "UNITED STATES (USA)",
    "CANADA",
    "UNITED KINGDOM (UK)",
    "MEXICO",
    "CHINA",
    "JAPAN",
    "SPAIN",
    "HONG KONG",
    "BELGIUM"
  ]
  
  function WMIFilters(props) {
    const { 
      countries,
      onFilterChange,
    } = props
    
    return (
         
        <ul>
          {countries.map(country => (
            <ul key={country}>
              <label>
                <input 
                  onChange={onFilterChange}
                  type="checkbox"
                  value={country}
                   />
                {country}
              </label>
            </ul>
          ))}
        </ul>
    )
  }
  
  function WMI(props) {
    const { wmi } = props
    
    return (
      <li
        key={wmi.id}
    >
        <div >
          <header>{wmi.Country}</header>
          
        </div>
      </li>
    )
  }
  
  function WMIList(props) {
    const { newData } = props
    
    return (
      <ul className="newData">
        {newData.map(wmi => (
          <WMI wmi={wmi} />
        ))}
      </ul>
    )
  }

  

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
<div>

<WMIFilters 
        countries={COUNTRIES}
        onFilterChange={handleFilterChange}/>


</div>
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
}

export default App;
