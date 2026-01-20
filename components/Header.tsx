import React from 'react'
import Image from 'next/image'
import { profileImg } from '@/assets/images'
import { MapPin, FileText, ChevronRight, Linkedin, Github,} from 'lucide-react'

import Button from './Button'

const Header = () => {
  return (
    <header className='max-w-5xl padding-x padding-y '>

        <div className='relative'>

            
            <div className='flex flex-col  items-center text-center gap-3 sm:flex-row sm:items-stretch'>
                <Image  alt='Profile Image' src={profileImg} className='max-w-40 rounded-xl w-full'/>

                <div className='w-full flex flex-col gap-3 sm:justify-between '>

                    <div className='flex flex-col justify-center items-center sm:items-start gap-1 '>
                        <h1 className='text-xl font-bold'>Ralph Reeven Carandang</h1>
                        <p className='flex items-center gap-1 text-slate-600'> <span><MapPin size={15}/></span> Cavite, Philippines</p>
                        <h2 className=''>Fullstack Developer</h2>
                    </div>

                    <div className='flex flex-col w-full gap-2 sm:flex-row '>
                        <Button label='Download CV' bgColor='bg-black' textColor='text-white' icon={< FileText size={15}/>} arrow={<ChevronRight size={18}/>} />
                        <Button label='LinkedIn' bgColor='bg-white' textColor='text-black' icon={< Linkedin size={15}/>} arrow={<ChevronRight size={18}/>}/>
                        <Button label='Github' bgColor='bg-white' textColor='text-black' icon={< Github size={15}/>} arrow={<ChevronRight size={18}/>}/>
                    </div>

                </div>

                

            </div>
         

            <button className='absolute bg-amber-300 top-0 right-0'>
                Theme
            </button>

        </div>
     

    </header>
  )
}

export default Header