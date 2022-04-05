import React,{useContext} from "react";
import Context from "../../context/GifContext";
import Gifs from "../show_gifs/Gifs";

export default function UniqueGif({params}){
    const {gifs}= useContext(Context)
    const {gif}= params;
    const gifSelected = gifs.find(singleGif => singleGif.id === gif)
    if(gifs.length !==0) localStorage.setItem("gifContext", JSON.stringify(gifSelected))
    const gifToUse= gifSelected || JSON.parse(localStorage.getItem("gifContext"))
    return (
        <>
            <h4>Title: {gifToUse.title}</h4>
            <Gifs singleGifs={gifToUse} />
        </>
    )
}