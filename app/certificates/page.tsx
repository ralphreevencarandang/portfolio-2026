import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { certificates } from '@/constants'
const page = () => {
  return (
    <div className=' max-w-5xl padding-x py-10 space-y-5'>

            <div className='flex flex-nowrap  gap-5 flex-col sm:items-center sm:flex-row'>
                
                <div className='flex flex-nowrap items-center gap-2'>    
                    <ArrowLeft size={20} className=''/>
                    <Link href={'/'} className='text-sm '>Back to home</Link>

                </div>
                <h1 className='text-2xl font-bold'>All Certifications</h1>

            </div>

            <div className=' grid grid-cols-1 sm:grid-cols-2 gap-3'>

                {certificates.map( (item, index)=> 
                    <Link key={index} className='card space-y-2' href={item.link} target='_blank'>
                            <h3 className='font-bold'>{item.title}</h3>
                            <p className='text-sm text-zinc-500 '>{item.provider}</p>
                   
                    </Link>
                )}
            </div>
    </div>
  )
}

export default page