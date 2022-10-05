import Loader from "./Loader";
import { useState,useEffect,useContext } from "react";
import { FaveContext } from "../context/Favecontext";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { HiOutlineHeart } from "react-icons/hi";




const Catotd = () =>{
    const {handleAdd} = useContext(FaveContext)

    const [cat, setCat] = useState('')
    const [add, setAdd]= useState('justify-between text-green-200 shadow-inner rounded p-3 py-3 bg-green-600 hidden')
    const [show, setShow] = useState(false)
    const [style,setStyle] = useState({})

    const clickAdd = (cat)=>{
        handleAdd(cat)
        setAdd('justify-between text-green-200 shadow-inner rounded p-3 py-3 bg-green-600')
        setTimeout(() => {
            setAdd('justify-between text-green-200 shadow-inner rounded p-3 py-3 bg-green-600 hidden');
          }, 2000);

    }


    const toggleShow = (event)=>{
        if(event._reactName === 'onMouseEnter'){setShow(true)}
        else if(event._reactName === 'onMouseLeave'){setShow(false)}
    }

    const toggleColor = (event)=>{
        if(event._reactName === 'onMouseEnter'){setStyle({'color':'red', 'fill':'red'})}
        else if(event._reactName === 'onMouseLeave'){setStyle({'color':'red'})}
    }

    const getNew = async () =>{
        try{
            const res = await fetch(`https://cataas.com/cat?json=true`)
            const catData = await res.json()
            setCat(catData['id'])
        }catch(error){
            console.log(error)
            setCat('600029311bf75600108f6168')
        }
    }

    useEffect(()=>{
        getNew()
    },[])


    return(
        <div className="ml-3 py-3 px-3 flex flex-col items-center justify-center">
            <h3 className="text-black text-xl md:text-md py-3 px-3 text-bold">Cat of the Day</h3>
                <div className="py-3">
                    <div class={add}>
                            <strong className="px-3">Cat has been added to favourites </strong>
                        <strong class="text-xl align-center cursor-pointer alert-del">&times;</strong>
                    </div>
                </div>


                <div className="ml-3 py-3 flex flex-row container w-8/12 sm:w-12/12  blue-glassmorphism items-center justify-center"> 
                    <div className="items-center px-3">
                        <button onClick={getNew}>
                            <FaArrowAltCircleLeft size={50}></FaArrowAltCircleLeft>   
                        </button>
                    </div>
                    <div class="relative" onMouseEnter={toggleShow} onMouseLeave={toggleShow}>
                        {
                            show
                            ?
                            <div class="absolute px-4 py-2 opacity-70" >
                                <button onMouseEnter={toggleColor} onMouseLeave={toggleColor} onClick={()=>clickAdd(cat)}>
                                    <HiOutlineHeart size={50} style={style}></HiOutlineHeart>
                                </button>

                            </div>
                            :
                            null
                        }
                        <img src={`https://cataas.com/cat/${cat}`} alt="cat">
                        </img>
                    </div> 
                    <div className="items-center px-3">
                        <button>
                            <FaArrowAltCircleRight size={50} onClick={getNew}></FaArrowAltCircleRight>   
                        </button>
                    </div>
                </div>
            
        </div>
    )
}

export default Catotd