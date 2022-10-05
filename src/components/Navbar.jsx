import React from 'react';
import logo from '../images/nvalogo.jpg'



const Navbar = () =>{
    return(
        <nav className='w-full flex md:justify-center justify-between items-center py-4 shadow-xl'> 
            <div className='md:flex-[0.5] flex-intial justify-center items-center '>
            <a href={'/'}>
                <img src={logo} alt='logo' className='w-24 cursor-pointer' ></img>
            </a>

            </div>
            <ul className='text-black md:flex hidden list-none flex-row justify-between items-center flex-initial'>
                <a className={`mx-4 hover:underline my-4`} href={`/favourites`}>
                    {"Favourites"}
                </a>
            </ul>
        </nav>
    )
}

export default Navbar