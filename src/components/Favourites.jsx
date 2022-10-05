import { useState,useContext } from "react";
import { FaveContext } from "../context/Favecontext";
import { FaRegWindowClose } from "react-icons/fa";






const FaveCard = ({gif,handleDel}) => { 
    const [show, setShow] = useState(false)
    const [style,setStyle] = useState({})

    const toggleShow = (event)=>{
        if(event._reactName === 'onMouseEnter'){setShow(true)}
        else if(event._reactName === 'onMouseLeave'){setShow(false)}
    }
    const toggleColor = (event)=>{
        if(event._reactName === 'onMouseEnter'){setStyle({'color':'red', 'fill':'red'})}
        else if(event._reactName === 'onMouseLeave'){setStyle({})}
    }

    return (
    
      <div className="flex flex-col justify-start items-start p-2">
        <div class="relative" onMouseEnter={toggleShow} onMouseLeave={toggleShow}>
            <div class="absolute px-4 py-2 opacity-70" >
            {
                show
                ?
                <button 
                onMouseEnter={toggleColor} onMouseLeave={toggleColor} 
                onClick={()=>handleDel(gif)}
                >
                <FaRegWindowClose size={20} style={style}></FaRegWindowClose>
                </button>
                :
                null
            }

            </div>
            <div className="w-full sm:h-32 2xL:h-96 rounded-md object-fit">
                <img src={`https://cataas.com/cat/${gif}`} alt='gif' 
                className="w-full sm:h-32 2xL:h-96 rounded-md object-fill">
                </img>
            </div>
        </div>
  

  
  
  
      </div>
    )
  };
  
  
  const Favourites = () =>{
      const {handleDelete, fetchFaves} = useContext(FaveContext)
      const faves = fetchFaves()
      return(
          <div className="ml-3 py-3 px-3 flex flex-col items-center justify-center">

            <h3 className="text-black text-xl md:text-md py-3">Your cat collection</h3>  
              <div className="ml-3 py-3 px-3 container w-10/12 blue-glassmorphism"> 
                 {faves && faves.length!==0
                    ?
                    <div className="grid grid-cols-3 px-3 py-3 gap-3">
                      {faves.map((f,i)=>(
                          <FaveCard key={i} gif={f} handleDel={handleDelete} ></FaveCard>
                      ))}
                    </div>
                    :
                    <div className="text-center">
                        <a className="items-center justify-center hover:underline" href={`/`}>Add to your cat Collection</a>
                    </div>

                 } 
                  
                  
              
              </div>
          </div>
      )
  }
  
  export default Favourites