import React from "react";
import '../../css/Gif.css'
import { Link } from "wouter";

export default function Gifs({singleGifs}={singleGifs:null}){
  console.log(singleGifs)
  return (
      <div className="">
        <Link to={`/search/${singleGifs.id}`} className="gif">
          <h4>Title: {singleGifs.title}</h4>
          <img src={singleGifs.url} alt={singleGifs.url} />
        </Link>
      </div>
  );
}