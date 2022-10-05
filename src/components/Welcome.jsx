import React from "react"
import { useEffect, useState} from "react";
const gridstyle = "min-h-[100px] sm:px-0 sm:min-w-[120px] flex justify-center items-center border-[0.5px] text-sm font-light rounded-2xl"



const Welcome = () =>{

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
    

    return(
        
        <div className="flex w-full justify-center items-center">
            <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start flex-col px-5 md:mr-10">
                    <h1 className="text-3xl sm:text-5xl text-black py-1"> 
                        
                        <div>
                            Daily dose of
                            <br></br>
                            Cat content
                        </div>  
                    </h1>
                    <br></br>
                    <p className="text-left mt-0.5 text-black font-light md:w-9/12 w-11/12 text-base">
                        Because who doesnt like cats?
                    </p>
                    {/* <button type='button' className='flex flex-row justify-center items-center my-5 bg-[#2952e3] rounded-full p-3 cursor-pointer hover:bg-[#2546bd]'>
                            <p className="text-white text-base font-semibold ">Connect Wallet</p>
                        </button> */}


                    </div>
            </div>
            {cat
                ?
                <div className="grid sm:grid-cols-3 grid-cols-2 w-full">
                    {cat.map((c,i)=>(
                        <div className="rounded-2xl">
                            <div className={`${gridstyle}`} key={i}>
                            <img 
                                className="object-fill h-48 w-96"
                                src={`https://cataas.com/cat/${c?.id}`} alt="cat"></img>

                            </div>
                        </div>
                    ))}
                </div>:
                    null
                    }
        </div>
    )
}

export default Welcome
