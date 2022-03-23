import React, {useEffect, useState} from 'react';
import Gifs from "./Gifs"
import getGifs from '../services/getGifs';

export default function ListOfGifs({keyword='panda'}){
    const [gifs,setGifs]=useState([])

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