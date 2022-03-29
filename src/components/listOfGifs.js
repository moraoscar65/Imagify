import React, {useEffect, useState} from 'react';
import Gifs from "../pages/show_gifs/Gifs"
import getGifs from '../services/getGifs';

export default function ListOfGifs({params}){
  
    const [gifs,setGifs]=useState([])
   
    console.log(params)
    const {search} =params
    
    useEffect(()=>{
        getGifs({keyword:search}).then(gifs=>setGifs(gifs))
    },[search])

    return(
        
            gifs.map(singleGif => 
              <Gifs
                key={singleGif.id} 
                singleGifs={singleGif}
              />
            )
          
    )
}