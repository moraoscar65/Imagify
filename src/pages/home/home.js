import React from "react";
import { Link } from "wouter";
import { useState } from "react";
import useGifs from "../../hooks/useGifs";
import Spinner from "../../components/spinner/spinner";
import '../../components/listOfGifs/listOfGifs.css'
import ListOfGifs from "../../components/listOfGifs/listOfGifs";
import Category from "../../components/category";

export default function Home (){
    const [search, setSearch]=useState('')
    const handleSubmit= e=> {
        e.preventDefault() 
    }
    const {spinner, gifs } = useGifs()
    return (
      <>
        <form onSubmit={handleSubmit}>
          <label>
            Gifs a buscar:
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <Link to={`/gif/${search}`}>
              <button>Buscar</button>
            </Link>
          </label>
        </form>
        <div className="App-main">
          <div className="App-results">
            <label>Gifs mas buscados:</label>
            {spinner ? <Spinner /> : <ListOfGifs gifs={gifs} />}
          </div>
          <div className="App-category">
            <label>Categorias Populares</label>
            <Category name="Midudev" options={["Hola", "Avengers", "Pop"]}  />
          </div>
        </div>
      </>
    );
}