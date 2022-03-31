import Gifs from "../pages/show_gifs/Gifs"
import UseGifs from '../hooks/useGifs';
import Spinner from './spinner/spinner';

export default function ListOfGifs({params}){
  const { search } = params;
  const { spinner, gifs} =UseGifs(search)
  return spinner ? (
    <Spinner />
  ) : (
    gifs.map((singleGif) => <Gifs key={singleGif.id} singleGifs={singleGif} />)
  );
}