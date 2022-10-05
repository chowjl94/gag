import { useEffect, useState } from "react";


const useFetch = () =>{
    const [cat, setCatGif] = useState("");
    const fetchCats = async ()=>{
        try{
            const res = await fetch('https://cataas.com/api/cats?limit=6')
            const catdata = await res.json()
            setCatGif(catdata)
        }catch(error){
            console.log('Error in fetch ,setting default cats')
            const res = await fetch('https://cataas.com/api/cats?limit=6')
            const catdata = await res.json()
            setCatGif(catdata)
        }
    }

    useEffect(()=>{
        fetchCats()
    },[])

    return cat
}
export default useFetch