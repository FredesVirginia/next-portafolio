import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FiAlignJustify } from "react-icons/fi";
export default function NavBar() {
  return (

    <nav className="  h-[690px] lg:h-[550px]   text-white bg-gradient-to-r from-sky-600 to-sky-900">
      <div className="h-[100px] pt-9 flex lg: justify-between w-full px-10 lg:px-28" >
        <div className=" ">

          <h1 className=' font-bold transform -skew-x-6 text-white bg-clip-text '> Fredes Virginia</h1>
        </div>
        <div className="flex space-x-4">
          <div className="hidden lg:block flex space-x-4 ">
            <Link className='  transform -skew-x-6 text-gray-400 font-bold' href="/">Home</Link>
            <Link className='  transform -skew-x-6 text-gray-400 font-bold' href="/">Sobre Mi</Link>
            <Link className='  transform -skew-x-6 text-gray-400 font-bold' href="/">Contacto</Link>
           
          </div>
          <FiAlignJustify className="block lg:hidden text-2xl" />
        </div>


      </div>

      <div className="flex flex-col lg:flex-row pt-4 space-between items-center lg:items-start">
  <div className="w-full lg:w-1/2 ml-4 lg:ml-28 flex-shrink-0 lg:mr-32">
    <h2 className="text-center lg:text-left  text-white font-bold ">Hey Me dicen Vicki</h2>
    
    <h3 className="text-center lg:text-left lg:bg-sky-300 font-bold text-2xl lg:text-5xl mt-4 lg:mt-16 text-white bg-clip-text text-transparent">DESARROLLADOR WEB</h3>
    <p className='px-12 hidden lg:inline-block  lg:mt-10  transform -skew-x-6 px-2  text-white italic' >La lealtad es de ambas partes. Si te lo pido a ti, lo recibiras de Mi </p>
  </div>

  <div className="flex flex-col justify-center items-center  lg:justify-end mt-4">
    <div className="lg:flex sm:items-center text-center lg:flex-col lg:items-center">
      <Image
        src="/Img/espacio.png"
        width={300}
        height={300}
        alt="Picture of the author"
        className='imagen-redonda'
      />
       
    </div>

    <p className=' lg:hidden  sm:inline-block py-5 text-center transform -skew-x-6 px-4 text-white italic   '>
    La lealtad es de ambas partes. Si te lo pido a ti, lo recibirás de mí
  </p>
  </div>
</div>









    </nav>

  )
}
