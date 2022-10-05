import logo from '../images/nvalogo.jpg'
import resume from '../cv/resume.pdf'

const Footer = () =>{
    return(
<footer class="p-4 md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 shadow-inner-xl">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        <div className='md:flex-[0.5] flex-intial justify-center items-center '>
            <a href={'/'}>
                <img src={logo} alt='logo' className='w-32 cursor-pointer' ></img>
            </a>
            </div>
        </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">

        <li>
            <a href="https://www.linkedin.com/in/chowjinglun/" class="hover:underline p-10">Contact Me</a>
        </li>

        <li>
            <a href='https://cataas.com/#/' class="hover:underline p-7">APIs</a>
        </li>
        <li>
            <a href={resume} download class="hover:underline p-7">Resume</a>
        </li>
    </ul>
</footer>
    )
}

export default Footer