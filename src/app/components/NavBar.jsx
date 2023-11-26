import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
  return (

    <nav className=" h-[480px] pt-6 bg-zinc-900 text-white">
    <div className='flex items-start justify-between w-full px-8'>
      <div className="flex items-center">
        <Image
          src="/Img/spark.png"
          width={50}
          height={50}
          alt="Picture of the author"
        />
        <h1 className='ml-4 font-bold transform -skew-x-6'> DEVELOPER WEB</h1>
      </div>
      <div className="flex space-x-4">
        <Link className=' font-bold transform -skew-x-6' href="/">HOME</Link>
        <Link className=' font-bold transform -skew-x-6'  href="/">HOME</Link>
        <Link className=' font-bold transform -skew-x-6' href="/">HOME</Link>
      </div>

    </div>
    <div>
   <div className="flex justify-end">
   <Image
          src="/Img/1.png"
          width={400}
          height={400}
          alt="Picture of the author"
          
        />
   </div>
    </div>
  </nav>
    
  )
}
