import {useState, useEffect} from 'react';

const useFetch = (url) =>{ 
    const [data, setData] = useState(null);
    const [isPending, setPending] = useState(true);
    const [error, SetError] = useState(null);
    useEffect(()=>{
        fetch(url,)
        .then(res => {
            if(!res.ok){
                throw Error("Kunde inte hittas")
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data);
            setData(data);
            setPending(false);
            SetError(null);
        })
        .catch(err =>{
            setPending(false);
            SetError(err.message);
        })
        }, [url]);

    return{data, isPending, error}
}


export default  useFetch;