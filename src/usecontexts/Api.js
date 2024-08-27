import { useState,useEffect,createContext } from "react";

export const Apicontext = createContext([]);

export default function Api({ children }){
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch('https://api.restful-api.dev/objects')
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => {
          console.error('Error fetching data:', error)});
          setData([]);
  
    }, []);

    return(
        <Apicontext.Provider value={data}>
        { children }
        </Apicontext.Provider>
    )
}