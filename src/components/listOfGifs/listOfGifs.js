import Gifs from "../../pages/show_gifs/Gifs"
import useGifs from '../../hooks/useGifs';
import Spinner from '../spinner/spinner';


export default function ListOfGifs({params}){
  const { search } = params;
  const { spinner, gifs} =useGifs({search})
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
  return spinner ? (
    <Spinner />
  ) : (
    <div className="ListOfGifs">
      {gifs.map((singleGif) => <Gifs key={singleGif.id} singleGifs={singleGif} />)}
    </div>
  );
}