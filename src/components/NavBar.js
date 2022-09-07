import axios from "axios";
import React, { useState } from "react";
import "../App.css";

function NavBar() {
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
    <>
      <div>
        <input
          type="text"
          placeholder="Busca la radio"
          value={search}
          onChange={handleChange}
        />
        <button name="search" onClick={getStations}>
          Buscar
        </button>
      </div>
    </>
  );
}

export default NavBar;
