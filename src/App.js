import axios from "axios";
import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const getStations = () => {
    const url = `http://95.179.139.106/json/stations/search?name=${search}`;
    axios
      .get(url)
      .then((result) => {
        console.log(result.data);
        setList(result.data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="App">
      {/* <NavBar /> */}
      <h1>Radio Factoria!</h1>
      <input
        type="text"
        placeholder="Busca la radio"
        value={search}
        onChange={handleChange}
      />
      <button name="search" onClick={getStations}>
        Buscar
      </button>
      <div className="stationList">
        {list.map((station, i) => (
          <div className="card" key={i}>
            <p className="textStation">{station.name}</p>
            <div className="audio-box">
              <audio controls className="audio">
                <source src={station.url} type="audio/mpeg"></source>
              </audio>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
