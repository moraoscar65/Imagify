import React from "react";
import { Link } from "wouter";
import { useState } from "react";
import useGifs from "../../hooks/useGifs";
import Spinner from "../../components/spinner/spinner";
import "../../components/listOfGifs/listOfGifs.css";
import ListOfGifs from "../../components/listOfGifs/listOfGifs";
import LazyTrending from "../../components/trending_Searches/lazyTrending";

export default function Home() {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    if (search === "") setSearch("morty");
    e.preventDefault();
  };
  const { spinner, gifs } = useGifs();
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Gifs a buscar:
          <input
            type="text"
            required
            size="15"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <Link to={`/gif/${search}`}>
            <button className="boton">
              <span>Buscar</span>
            </button>
          </Link>
        </label>
      </form>
      <div className="App-main">
        <div className="App-results">
          <label>Gifs mas buscados:</label>
          {spinner ? <Spinner /> : <ListOfGifs gifs={gifs} />}
        </div>
        <div className="App-category">
          <LazyTrending />
        </div>
      </div>
    </>
  );
}
