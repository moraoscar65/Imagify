import React from "react";
import ListOfGifs from "../../components/listOfGifs/listOfGifs";
import useGifs from "../../hooks/useGifs";
import Spinner from "../../components/spinner/spinner";

export default function SearchGifs({params}){
  const {search} =params;
    const {spinner, gifs}= useGifs({search})
    //-----Esto se movio a un customHook para usarlo en otro componente
  //   const [gifs, setGifs] = useState([]);
  //   const [spinner, setSpinner] = useState(false);
  
  //   useEffect(() => {
  //     setSpinner(true);
  //     getGifs({ keyword: search }).then((gifs) => {
  //       setGifs(gifs);
  //       setSpinner(false);
  //     });
  //   }, [search]);
    return(
      <>{
        spinner ? <Spinner/> :
        <>
          <h3>Gifs a buscar: {decodeURI(search)}</h3>
          <ListOfGifs gifs={gifs} key={gifs[0].id}/>
        </>
        }
      </>
    ) 
}