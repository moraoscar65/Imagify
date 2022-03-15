
const apiKey='SRCBDJBH9kOh6y9BqwvCX2m4itS3wCj6'


export default function getGifs({keyword='Jaguar'}){
const apiURL=`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}
                &limit=2&offset=0&rating=g&lang=es`
    return fetch(apiURL)
    .then(res=>res.json())
    .then(response=>{
        const { data=[] }=response
        if(Array.isArray(data)){
            console.log(data)
            const gifs=data.map(image=>{
                
                const {url,id}=image.images.downsized_medium
                const {title}=image
                return {url,title,id}
                })

            return gifs;
        }
    });
}