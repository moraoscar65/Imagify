import React from "react";
import '../../css/Gif.css'
import { Link } from "wouter";

export default function Gifs({singleGifs}={singleGifs:null}){
  console.log(singleGifs)
  return (
      <div className="gif">
        <Link to={`/search/${singleGifs.id}`} className="gif-link">
          <h6>Title: {singleGifs.title}</h6>
          <img src={singleGifs.url} alt={singleGifs.url} />
        </Link>
      </div>
  );
}