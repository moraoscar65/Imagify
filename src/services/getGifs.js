import { _apiKey, _URL } from "./settings";
export default function getGifs({keyword='morty'}){
  console.log(keyword);
  const apiURL = `${_URL}/gifs/search?api_key=${_apiKey}&q=${keyword}
                &limit=25&offset=0&rating=g&lang=es`;
  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data = [] } = response;
      if (Array.isArray(data)) {
        const gifs = data.map((image) => {
          const { url } = image.images.downsized_medium;
          const { id, title } = image;
          return { id, url, title };
        });
        return gifs;
      }
    });
}