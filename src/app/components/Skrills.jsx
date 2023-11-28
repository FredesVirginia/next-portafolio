import { IoLogoFirebase } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { TbBrandMongodb } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import Image from "next/image"
export default function Skrills (){
   return (
    <div className="px-10 lg:px-28">
        <h1 className='  text-2xl font-bold lg:text-3xl bg-gradient-to-r from-sky-600 to-sky-900 bg-clip-text text-transparent'>Skrills</h1>
        <div className=" pl-10 lg:pl-44 grid  grid-cols-3 gap-4 justify-center ">
     <IoLogoFirebase className="text-5xl" />
     <FaReact className="text-5xl" />
     <SiRedux  className="text-5xl" />
     <FaLaravel className="text-5xl"/>
     <SiExpress className="text-5xl"/>
     <SiMysql className="text-5xl"/>
     <SiPostgresql className="text-5xl"/>
     <TbBrandMongodb className="text-5xl" />
     <FaGithub className="text-5xl"/>
     <Image
        src="/Img/next.png"
        width={60}
        height={60}
        alt="Picture of the author"
        className=''
      />
    </div>
    </div>
   ) 
}