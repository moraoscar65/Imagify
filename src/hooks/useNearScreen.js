import {useState, useEffect,useRef} from "react";

export default function useNearScreen({distance='100px'}){
    const [isNearScreen, setShow] = useState(false);
    const fromRef=useRef()
  useEffect(function () {
    const onChange = (entries, observer) => {
      const element = entries[0];
      console.log(element.isIntersecting)
      if (element.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    };
    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
    });
    observer.observe(fromRef.current);
  });
  return {isNearScreen,fromRef}
}