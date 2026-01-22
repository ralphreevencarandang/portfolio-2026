import { Trophy } from 'lucide-react'
import React from 'react'
import { certificates } from '@/constants'
const Certificate = () => {
  return (
   <div className='card '>

        <div className='flex flex-nowrap items-center gap-2 '>
          <span><Trophy color='#71717a' size={20}/></span>
          <h2 className='font-bold'>Certificates</h2>
        </div>

        <div className='space-y-2'>
            {certificates.map( (item, index) => 
                <div className='bg-gray-100 p-2 rounded-lg space-y-2 hover:bg-gray-200 transition-colors cursor-pointer'>
                    <h4 className='text-xs font-bold'>{item.title}</h4>
                    <p className='text-xs text-zinc-600'>{item.provider}</p>
                </div>
            
            )}
       
          
        </div>

        
    </div>
  )
}

export default Certificate