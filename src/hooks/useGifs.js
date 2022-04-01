import { useContext,useEffect, useState } from "react";
import getGifs from "../services/getGifs";
import Context from "../context/GifContext";


export default function useGifs({search} = {search : null}){
  const {gifs, setGifs} = useContext(Context);
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
  }, [search, setGifs]);
  return { spinner, gifs };
}