import React from "react";
import './Gif.css'
import { Link } from "wouter";

export default function Gifs({singleGifs}){
  return (
      <div className="gif">
        <Link to={`/search/${singleGifs.id}`} className="gif-link">
          <p>Title: {singleGifs.title}</p>
          <img src={singleGifs.url} alt={singleGifs.url}/>
        </Link>
      </div>
  );
}