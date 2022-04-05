import React from "react";
import Gifs from "../../pages/show_gifs/Gifs"
import './listOfGifs.css';

export default function ListOfGifs({gifs}){
  return (
    <div className="ListOfGifs">
      <div className="">
        {gifs.map((singleGif) => <Gifs key={singleGif.id} singleGifs={singleGif} />)}
      </div>
    </div>
  )
}