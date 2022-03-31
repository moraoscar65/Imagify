import { useEffect, useState } from "react";
import getGifs from "../services/getGifs";


export default function UseGifs({search="Avengers"}){
    const [gifs, setGifs] = useState([]);
    const [spinner, setSpinner] = useState(false);
  
    useEffect(() => {
      setSpinner(true);
      getGifs({ keyword: search }).then((gifs) => {
        setGifs(gifs);
        setSpinner(false);
      });
    }, [search]);
    console.log(gifs)
    return {spinner, gifs}
}