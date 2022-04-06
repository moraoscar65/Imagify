import { _apiKey,_URL } from "./settings";

export default function getTrendingGifs(){
  const apiURL = `${_URL}/trending/searches?api_key=${_apiKey}`;
  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      return data;
    });
}