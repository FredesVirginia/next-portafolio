import Image from 'next/image';
export default function Section1 () {
    return (
        <div className=' flex flex-col lg:flex-row pt-10 justify-between  lg:px-28'>
            <div className=' px-10 w-full lg:px-0 lg:w-[700px] '>
                <h2 className='  text-2xl font-bold lg:text-3xl bg-gradient-to-r from-sky-600 to-sky-900 bg-clip-text text-transparent'> About Me</h2>
                <h1 className=' font-extrabold text-3xl lg:text-4xl'> I am Desarrolaro Web and Analista en Sistemas </h1>
                <p className='font-bold text-gray-700'> Soy una persoa blandita sencible, muy intesa, es mejor sacarme la cabez
                    que la ide que se me entro, suelo perder mis cosas, tambien soy ordenada
                    pero yo solo se donde las dejo, para cada ocacion tengo un outfit incluso
                    para dormir, mis amigas simpre llega como hermans mayores, y mato por Ellas
                    cuando me gusta un chico soy su puti fan, y luego de unos semanas se me pasa 
                    todo el hight. Algo mas que esto, nop estoy haciendo el tonto porque me stan viendo
                </p>
            </div>
                <div className='flex justify-center   lg:justify-end mt-4 '>
                <Image 
                 src="/Img/3.png"
                 width={250}
                 height={250}
                 alt="Picture of the author"
                
            />
                </div>
            
        </div>
    )
}