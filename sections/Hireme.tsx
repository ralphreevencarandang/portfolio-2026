
import { BadgeCheck, BrushCleaning, HandHeart, Palette, Rocket, Scale } from 'lucide-react'
import React from 'react'
import { hireme } from '@/constants'

const icons = [
    <BrushCleaning size={15} color='#71717a'/>,
    <Rocket size={15} color='#71717a'/>,
    <Palette size={15} color='#71717a'/>,
    <Scale size={15} color='#71717a'/>,
    <HandHeart size={15} color='#71717a'/>,

]

const Hireme = () => {
  return (
    <div className='card '>

        <div className='flex flex-nowrap items-center gap-2 '>
          <span><BadgeCheck color='#71717a' size={20}/></span>
          <h2 className='font-bold'>What I Bring</h2>
        </div>

        <div className='space-y-2'>
            {hireme.map( (item, index)=>
                <div className='flex items-center gap-3'>
                    {icons[index]}
                    {/* <span><Rocket size={15}/></span> */}
                    <p className='text-sm text-zinc-600'> {item}</p>
                </div>
            )}



            {/* <div className='flex items-center'>
                <p className='text-sm text-zinc-600'>  Clean, maintainable code</p>
                <span><BrushCleaning /></span>
            </div>
            <div className='flex items-center'>
                <p className='text-sm text-zinc-600'>  Performance-focused</p>
                <span><Rocket /></span>
            </div>
            <div className='flex items-center'>
                <p className='text-sm text-zinc-600'>  Pixel-perfect UI</p>
                <span><Palette /></span>
            </div>
            <div className='flex items-center'>
                <p className='text-sm text-zinc-600'>  Scalable architecture</p>
                <span><Scale /></span>
            </div>
            <div className='flex items-center'>
                <p className='text-sm text-zinc-600'>   Client-focused mindset</p>
                <span><HandHeart /></span>
            </div> */}


      
       
          
        </div>

        
    </div>
  )
}

export default Hireme