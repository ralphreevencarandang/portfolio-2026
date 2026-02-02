'use client'

import React from 'react'
import Image from 'next/image'
import { profileImg } from '@/public/images'
import { MapPin, FileText, ChevronRight, Linkedin, Github,} from 'lucide-react'
import Button from './Button'
import Link from 'next/link'
import gsap from 'gsap'

import Switch from './Switch'
const Header = () => {

    // Animation Handler
   const handleMouseEnter = () => {
    gsap.to('.header-button', {
      y: -3, // Moves the icon up
      duration: 0.3,
      ease: 'power2.out'
    })
  }


    const handleMouseLeave = () => {
    gsap.to('.header-button', {
      y: 0, // Returns to original position
      duration: 0.3,
      ease: "power2.out"
      
    })
  }


  return (
    <section className='max-w-5xl padding-x  pb-10'>

        <div className='relative'>

            
            <div className='flex flex-col  items-center text-center gap-3 sm:flex-row sm:items-stretch sm:gap-5'>
                <Image  alt='Profile Image' src={profileImg} className='max-w-40 rounded-xl w-full'/>

                <div className='w-full flex flex-col gap-3 sm:justify-between '>

                    <div className='flex flex-col justify-center items-center sm:items-start gap-1 '>
                        <h1 className='text-2xl font-bold'>Ralph Reeven Carandang</h1>
                        <p className='flex items-center gap-1 text-zinc-600 dark:text-zinc-400'> <span><MapPin size={18}/></span> Cavite, Philippines</p>
                        <h2 className='text-lg font-semibold'>Fullstack Developer</h2>
                    </div>

                    <div className='flex flex-col w-full gap-2 sm:flex-row '>
    

                        <Link href={'/pdfs/CARANDANG-RESUME.pdf'} 
                        target='_blank'
                        className='header-button bg-black border border-slate-300   00 rounded py-2 px-2 text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer text-white hover:bg-white hover:text-black transition-all dark:bg-white dark:text-black'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        >
                            <span>{< FileText size={15}/>}</span>
                                 Download CV
                            <span>{<ChevronRight size={18}/>}</span>
                        </Link>

                        <Button label='LinkedIn'  textColor='text-black' link='https://www.linkedin.com/in/ralph-reeven-carandang/' icon={< Linkedin size={15}/>} arrow={<ChevronRight size={18}/>}/>

                        <Button label='Github'  textColor='text-black' link='https://github.com/ralphreevencarandang' icon={< Github size={15}/>} arrow={<ChevronRight size={18}/>}/>
                    </div>

                </div>

                

            </div>
         

            <div className='absolute  top-0 right-0'>
                {/* <ToggleButton/> */}
                <Switch/>
            </div>

        </div>
     

    </section>
  )
}

export default Header