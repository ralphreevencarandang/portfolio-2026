import React from 'react'
import Image from 'next/image'
import profileImage from '@/public/images/profile-img.jpg'

const BubbleConverstation = () => {
  return (
   <div className='p-4 space-y-4'>
                            {/* AI */}
                                <div className=' flex gap-3 items-start'>
                                    <Image src={profileImage} alt='Profile Image' className='w-5 h-5 rounded-full'/>
                                    <div className='border border-zinc-200 dark:border-zinc-700 rounded-lg  p-2 max-w-[75%]'>
                                        <p className='text-xs text-black dark:text-white whitespace-pre-wrap'>Welcome! 👋 I’m happy you’re here. Feel free to ask questions about programming, web development, or my experience building projects.</p>

                                    </div>
                                </div>


                                {/* Client */}
                                <div className='flex justify-end'>
                                    <div className='border border-zinc-200 rounded-lg  p-2 bg-black dark:bg-white  max-w-[75%]'>
                                        <p className='text-xs text-white dark:text-black '>User lorem15</p>
                                    </div>
                                </div>
                            
                            
                            

                        </div>
  )
}

export default BubbleConverstation