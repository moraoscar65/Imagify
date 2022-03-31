import React,{useContext} from "react";
import Context from "../../context/GifContext";

export default function UniqueGif({params}){
    const gifsContext= useContext(Context)
    console.log(gifsContext)
    const {gif}= params;
    return (
        
        <div>
            <label>{gif}</label>
        </div>
    )
}