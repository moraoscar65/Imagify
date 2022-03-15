import React from "react";

export default function Gifs({singleGifs}){
    return(
         <div>
            <img src={singleGifs.url} alt={singleGifs.url}/>
            <h4>Title: {singleGifs.title}</h4>
          </div>      
          
    )

    
}