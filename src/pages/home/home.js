import React from "react";
import { Link } from "wouter";
import { useState } from "react";

export default function Home (){
    const [search, setSearch]=useState('')
    const handleSubmit= e=> {
        e.preventDefault()
        
    }

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
        
      </>
    );
}