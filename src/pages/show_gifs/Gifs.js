import React from "react";
import '../../css/Gif.css'
import { Link } from "wouter";

export default function Gifs({singleGifs}){
    //console.log(singleGifs)
    return(
      <div>
         <div>
            <Link to={`/search/${singleGifs.id}`} className="gif">
              <img src={singleGifs.url} alt={singleGifs.url}/>
              <h4>Title: {singleGifs.title}</h4>
            </Link>
          </div>
          
      </div>   
    )
}