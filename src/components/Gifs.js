import React from "react";
import '../css/Gif.css'

export default function Gifs({singleGifs}){
    //console.log(singleGifs)
    return(
         <a href={`#${singleGifs.id}`} className="gif">
            <img src={singleGifs.url} alt={singleGifs.url}/>
            <h4>Title: {singleGifs.title}</h4>
          </a>   
    )
}