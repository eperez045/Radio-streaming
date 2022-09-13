import axios from "axios";
import React, { useState } from "react";
import "./App.css";
// import NavBar from "./components/NavBar";

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
      <section className="search-section">
      <input
        role="search"
        type="text"
        placeholder="Escribe aquí la emisora..."
        className="search-bar"
        value={search}
        onChange={handleChange}
      />
      <button name="search" onClick={getStations} className="search-button">
        Buscar
      </button>
      </section>
      
      <div className="stationList">
        
        {list.map((station, i) => (
          <div className="card" key={i}>
            <p className="text-station">{station.name}</p>
            <div className="audio-box">
              <audio controls className="audio" style={{border: "solid 3px black", background: "#FCFCFC"}}>
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
