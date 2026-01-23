import React from 'react'
import Image from 'next/image'
import { profileImg } from '@/public/images'
import { MapPin, FileText, ChevronRight, Linkedin, Github,} from 'lucide-react'
import Button from './Button'
import Link from 'next/link'
import { handleMouseEnter, handleMouseLeave } from '@/sections/Footer'
const Header = () => {


  return (
    <section className='max-w-5xl padding-x  pb-10'>

        <div className='relative'>

            
            <div className='flex flex-col  items-center text-center gap-3 sm:flex-row sm:items-stretch sm:gap-5'>
                <Image  alt='Profile Image' src={profileImg} className='max-w-40 rounded-xl w-full'/>

                <div className='w-full flex flex-col gap-3 sm:justify-between '>

                    <div className='flex flex-col justify-center items-center sm:items-start gap-1 '>
                        <h1 className='text-2xl font-bold'>Ralph Reeven Carandang</h1>
                        <p className='flex items-center gap-1 text-slate-600'> <span><MapPin size={15}/></span> Cavite, Philippines</p>
                        <h2 className='text-lg'>Fullstack Developer</h2>
                    </div>

                    <div className='flex flex-col w-full gap-2 sm:flex-row '>
    

                        <Link href={'/pdfs/CARANDANG_CV.pdf'} className='bg-black border border-slate-300 rounded py-2 px-2 text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer text-white hover:bg-white hover:text-black transition-all'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        >
                            <span>{< FileText size={15}/>}</span>
                                 Download CV
                            <span>{<ChevronRight size={18}/>}</span>
                        </Link>

                        <Button label='LinkedIn' bgColor='bg-white' textColor='text-black' link='https://www.linkedin.com/in/ralph-reeven-carandang/' icon={< Linkedin size={15}/>} arrow={<ChevronRight size={18}/>}/>

                        <Button label='Github' bgColor='bg-white' textColor='text-black' link='https://github.com/ralphreevencarandang' icon={< Github size={15}/>} arrow={<ChevronRight size={18}/>}/>
                    </div>

                </div>

                

            </div>
         

            <button className='absolute bg-amber-300 top-0 right-0'>
                Theme
            </button>

        </div>
     

    </section>
  )
}

export default Header