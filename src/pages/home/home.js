import React from "react";
import { Link } from "wouter";
import { useState } from "react";



export default function Home (){
    const [search, setSearch]=useState('')

    return (
    <>
        <label>Gifs a buscar:
            <input type="text" value={search} onChange={ (e)=>{setSearch(e.target.value)
            }}
            />
            <Link to={`/gif/${search}`}><button>Click</button></Link>
        </label>
    </>
    )
}