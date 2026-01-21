import React from 'react'
import About from '@/sections/About'
import Experience from '@/sections/Experience'
import Techstack from '@/sections/Techstack'
const BentoGrid = () => {
  return (
    <section className='grid grid-cols-1 sm:grid-cols-6 gap-3  padding-x max-container max-w-5xl'>
        <div className=' sm:col-span-4'>
            <About/>
        </div>

        <div className=' sm:col-span-2'>
          <Experience/>
        </div>  

        <div className='col-span-full'>
          <Techstack/>
        </div>

        <div className=''>

        </div>
    </section>
  )
}

export default BentoGrid