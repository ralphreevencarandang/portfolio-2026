
'use client'

import {  Send } from 'lucide-react'
import React from 'react'
import BubbleButton from './BubbleButton'
import Image from 'next/image'
import profileImage from '@/public/images/profile-img.jpg'
import ChatHeader from './ChatHeader'
import { useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
const BubbleChat = () => {

    const [isChatOpen, setIsChatOpen] = useState(false);

    useGSAP(()=>{
    gsap.set('.chat-container', {
            autoAlpha: 0,
               scale: 0.8,
                y: 20,
            transformOrigin: 'bottom right',
           
    })


    }, [])

    const handleOpenChat = ()=>{
        gsap.to('.chat-container',{
            autoAlpha: 1,
            scale: 1,
            y: 0,
            duration: 0.4,
            ease: 'back.out(1.7)', // 👈 POP

            
        })
        setIsChatOpen(true)
        
    }
    const handleCloseChat = ()=>{
        gsap.to('.chat-container',{
           autoAlpha: 0,
      scale: 0.8,
      y: 20,
      duration: 0.25,
      ease: 'power2.in',
        })
        setIsChatOpen(false)

        
    }

  


  return (
    <div className={`  w-full  relative space-y-5  `}>
            {/* Chat Container */}

            <div className=' chat-container'>

                <div className={`  border border-gray-200 dark:border-gray-600 bg-white rounded-lg dark:bg-zinc-900  h-100 2xl:max-h-120     flex flex-col  shadow-lg`}>

                    {/* Chat Header  */}    
                        <ChatHeader onClick={()=> handleCloseChat()}/>
                
                    
                
                    <div className=' space-y-5 overflow-y-auto grow'>
                        {/* Chat Conversation */}
                        <div className='p-4 space-y-4'>
                            {/* AI */}
                                <div className=' flex gap-3 items-start'>
                                    <Image src={profileImage} alt='Profile Image' className='w-5 h-5 rounded-full'/>
                                    <div className='border border-zinc-200 dark:border-zinc-700 rounded-lg  p-2 max-w-[75%]'>
                                        <p className='text-xs text-black dark:text-white whitespace-pre-wrap'>Hi there! 👋🏻 Thanks for visiting my website. Feel free to ask me anything about programming, web development, or my experiences in tech. Let me know how I can help!</p>

                                    </div>
                                </div>


                                {/* Client */}
                                <div className='flex justify-end'>
                                    <div className='border border-zinc-200 rounded-lg  p-2 bg-black dark:bg-white  max-w-[75%]'>
                                        <p className='text-xs text-white dark:text-black '>User lorem15</p>
                                    </div>
                                </div>
                            
                            
                            

                        </div>
                    </div>
                    

                    
                    {/* TExt Field */}
                    <div className='p-4 space-y-1'>
                        <div className='flex gap-3 items-center '>
                                <input type="text" id='input-message' className=' w-full rounded-md border-0 bg-zinc-100 dark:bg-zinc-700 text-xs p-2'/>
                                    
                                <div className=' bg-zinc-700 dark:bg-zinc-600  rounded-lg p-2 cursor-pointer'>
                                        <Send size={18} className='text-white '/>
                                </div>
                        </div>
                        <p className='text-xxs text-center   text-zinc-500'>Ask me about programming, web dev, or tech!</p>
                    </div>
                


                </div>
            </div>

            {/* Chat button  */}
            <div className='flex justify-end'>
                <BubbleButton onClick={ ()=> isChatOpen ? handleCloseChat() : handleOpenChat()}/>
            </div>

    </div>
  )
}

export default BubbleChat