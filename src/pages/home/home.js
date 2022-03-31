import React from "react";
import { Link } from "wouter";
import { useState } from "react";
import Gifs from "../show_gifs/Gifs";
import useGifs from "../../hooks/useGifs";
import Spinner from "../../components/spinner/spinner";

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
        <div>
            <label>Gifs mas buscados:</label>
            { spinner ? (
                <Spinner />
              ) : (
                gifs.map((singleGif) => <Gifs key={singleGif.id} singleGifs={singleGif} />)
              )
            }
        </div>
      </>
    );
}