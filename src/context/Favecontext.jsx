import React, { useState } from "react";


export const FaveContext = React.createContext()



export const FavouriteProvider = ({children})=>{

    const [faves, setFaves] = useState([])

    const handleAdd = (id) =>{
        if(!JSON.parse(localStorage.getItem('favourites'))){
            localStorage.setItem('favourites',JSON.stringify([]))
        }
        const stored = JSON.parse(localStorage.getItem('favourites'))
        const newlist = [...stored, id]
        setFaves(newlist)
        localStorage.setItem('favourites',JSON.stringify(newlist))
    }

    const handleDelete = (id) =>{
        const stored = JSON.parse(localStorage.getItem('favourites'))
        const newlist = stored.filter(item=>item!==id)
        console.log(newlist)
        setFaves(newlist)
        localStorage.setItem('favourites',JSON.stringify(newlist))
    }

    const fetchFaves = ()=>{
        const stored = localStorage.getItem('favourites')
        return JSON.parse(stored);
    }

    return (
        <FaveContext.Provider value={{handleAdd,handleDelete,fetchFaves}}>
            {children}
        </FaveContext.Provider>
    )
}