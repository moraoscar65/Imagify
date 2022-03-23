import React, {useEffect, useState} from 'react';
import Gifs from "./Gifs"
import getGifs from '../services/getGifs';

export default function ListOfGifs({params}){
  
    const [gifs,setGifs]=useState([])
   
    console.log(params)
    const {keyword} =params
    
    useEffect(()=>{
        getGifs({keyword:keyword}).then(gifs=>setGifs(gifs))
    },[keyword])

    return(
        
            gifs.map(singleGif => 
            <Gifs
              key={singleGif.id} 
              singleGifs={singleGif}
            />
            )
          
    )
}