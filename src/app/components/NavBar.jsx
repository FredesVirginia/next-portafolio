import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FiAlignJustify } from "react-icons/fi";
export default function NavBar() {
  return (

    <nav className=" h-[550px]   text-black">
      <div className="h-[100px] bg-gray-300 pt-9 flex lg: justify-between w-full px-10 lg:px-28" >
        <div className=" ">

          <h1 className=' font-bold transform -skew-x-6 bg-gradient-to-r from-sky-600 to-sky-900 bg-clip-text text-transparent'> DEVELOPER WEB</h1>
        </div>
        <div className="flex space-x-4">
          <div className="hidden lg:block flex space-x-4 ">
            <Link className='font-bold transform -skew-x-6' href="/">HOME</Link>
            <Link className='font-bold transform -skew-x-6' href="/">ABOUT</Link>
            <Link className='font-bold transform -skew-x-6' href="/">CONTACT</Link>
            <Link className=' font-bold transform -skew-x-6  px-4 rounded-full bg-gradient-to-r from-sky-600 to-sky-700' href="/">HOME</Link>
          </div>
          <FiAlignJustify className="block lg:hidden text-2xl" />
        </div>


      </div>

      <div className="flex flex-col lg:flex-row pt-4 space-between items-center lg:items-start">
  <div className="w-full lg:w-1/2 ml-4 lg:ml-28 flex-shrink-0 lg:mr-32">
    <h2 className="text-center lg:text-left">I AM VIRGINIA FREDES</h2>
    <h3 className="text-center lg:text-left lg:bg-sky-300 font-bold text-2xl lg:text-5xl mt-4 lg:mt-16 bg-gradient-to-r from-sky-600 to-sky-900 bg-clip-text text-transparent">DEVELOPER WEB</h3>
    <Link className='px-12 hidden lg:inline-block  lg:mt-48 font-bold transform -skew-x-6 px-4 rounded-full bg-gradient-to-r from-sky-600 to-sky-700' href="/">CV1</Link>
  </div>

  <div className="flex justify-center   lg:justify-end mt-4">
    <div className="lg:flex  text-center lg:flex-col lg:items-center">
      <Image
        src="/Img/espacio.png"
        width={300}
        height={300}
        alt="Picture of the author"
        className=''
      />
       
    </div>
  </div>
</div>









    </nav>

  )
}
