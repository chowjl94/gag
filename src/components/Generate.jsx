import React from 'react';
import logo from '../../src/logo.svg';




const Generate = () =>{
    return(
        <nav className='w-full flex md:justify-center justify-between items-center py-4'> 
            <div className='md:flex-[0.5] flex-intial justify-center items-center '>
            <a href={'/'}>
                <img src={logo} alt='logo' className='w-32 cursor-pointer' ></img>
            </a>

            </div>
        </nav>
    )
}

export default Generate