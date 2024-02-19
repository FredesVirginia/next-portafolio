import Image from 'next/image';
export default function Section1() {
    return (
        <div className=' mb-20 flex flex-col lg:flex-row pt-10 justify-between  lg:px-28'>
            <div className=' px-10 w-full lg:px-0 lg:w-[700px] '>
                <h2 className='  text-2xl  lg:text-3xl bg-gradient-to-r from-sky-600 to-sky-900 bg-clip-text text-transparent'> Me precento</h2>

                <div className="py-10">
                    <p className='mb-3  text-gray-400'>
                        Soy Vicky, también conocida artísticamente como John Clein  </p>
                    <p className='mb-3  text-gray-400'>
                        Permíteme compartir contigo un fragmento de su historia. El fue el  primogénito de un monarca inglés en la Inglaterra del siglo XVII,  y fue exiliado debido a sus acciones impulsivas, que desafiaban el protocolo del Reino. Este noble inglés  representa parte de mí.
                    </p>
                    <p className='mb-3  text-gray-400'>
                        Soy Analista en Sistemas y Desarrollador Web, y actualmente estoy explorando tambien las maravillas del Marketing Digital.
                    </p>
                    <p className='mb-3  text-gray-400'>
                        Me enorgullece decir que soy el mejor esposo del mundo, alguien amable servicial y agil, esta último, producto de mi relación con la ansiedad. Y en mi defensa, no soy mi ansiedad, sino la persona que la experimenta y regula.
                    </p>
                </div>
            </div>
            <div className='flex justify-center   lg:justify-end mt-4 '>
                <Image
                    src="/Img/section.png"
                    width={350}
                    height={250}
                    alt="Picture of the author"

                />
            </div>

        </div>
    )
}