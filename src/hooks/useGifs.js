import { useEffect, useState } from "react";
import getGifs from "../services/getGifs";


export default function useGifs({search} = {search : null}){
  const [gifs, setGifs] = useState([]);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    setSpinner(true);
    const searchToUse =
      search || localStorage.getItem("lastSearch") || "random";
    getGifs({ keyword: searchToUse }).then((gifs) => {
      setGifs(gifs);
      setSpinner(false);
      localStorage.setItem("lastSearch", searchToUse);
    });
  }, [search]);
  return { spinner, gifs };
}