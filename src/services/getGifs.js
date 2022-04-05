
const apiKey='SRCBDJBH9kOh6y9BqwvCX2m4itS3wCj6'


export default function getGifs({keyword}){
  console.log(keyword);
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}
                &limit=20&offset=0&rating=g&lang=es`;
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