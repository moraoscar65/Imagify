import React from "react";

export default function UniqueGif({params}){
    console.log("entre unique gif");
    const {gif}= params;
    return (
        
        <div>
            <label>{gif}</label>
        </div>
    )
}