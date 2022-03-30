import React, {useEffect, useState} from 'react';
import Gifs from "../pages/show_gifs/Gifs"
import getGifs from '../services/getGifs';
import Spinner from './spinner/spinner';

export default function ListOfGifs({params}){
  const [gifs, setGifs] = useState([]);
  const [spinner, setSpinner] = useState(false);
  console.log(params);
  const { search } = params;

  useEffect(() => {
    setSpinner(true);
    getGifs({ keyword: search }).then((gifs) => {
      setGifs(gifs);
      setSpinner(false);
    });
  }, [search]);

  return spinner ? (
    <Spinner />
  ) : (
    gifs.map((singleGif) => <Gifs key={singleGif.id} singleGifs={singleGif} />)
  );
}