
'use client'

import {  Send } from 'lucide-react'
import BubbleButton from './BubbleButton'
import ChatHeader from './ChatHeader'
import { useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import BubbleConverstation from './BubbleConverstation'
import { Chat } from '@/Types'
import Image from 'next/image'
import profileImage from '@/public/images/profile-img.jpg'

const BubbleChat =  () => {

    const [isChatOpen, setIsChatOpen] = useState(false);

    const [chats, setChats] = useState<Chat[]>([
        {role: "model",
            content: "Welcome! 👋 I’m happy you’re here. Feel free to ask questions about programming, web development, or my experience building projects."
        }
    ])
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    useGSAP(()=>{
    gsap.set('.chat-container', {
            autoAlpha: 0,
            scale: 0.8,
            y: 20,
            transformOrigin: 'bottom right',
            display: "none"
           
    })


    }, [])

    const handleOpenChat = ()=>{
        gsap.to('.chat-container',{
            autoAlpha: 1,
            scale: 1,
            y: 0,
            duration: 0.4,
            ease: 'back.out(1.7)', // 👈 POP
            display: "block"


            
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
            display: "none"

        })
        setIsChatOpen(false)

        
    }

    const handleSubmitMessage = async( e: React.FormEvent<HTMLFormElement>)=>{
    
        setLoading(true)
        try {
            
            e.preventDefault();

            if (!message || message.trim() == "") {
                return
            }

             setChats([...chats, {
                role: 'user',
                content: message
            }])

            setMessage('')



         

            const result = await fetch('http://localhost:3000/api/chat', {
                method: "POST",
                body: JSON.stringify({ message }),
                headers: { 'Content-Type': 'application/json' },
            })

            const data = await result.json();

        
            

            if (!result.ok) {
            // 2. Handle the structured error you sent from the API (status 429, 500, etc.)
                throw new Error(data.message || "Something went wrong");
            }


            setLoading(false);
        


           
            // add model response
            setChats(prev => [
            ...prev,
            { role: 'model', content: data.text  }
            ])

            console.log('response: ', data);
            
        } catch (error : any) {
            console.log('Error in Handle Submit Message Method: ', error);
            
            setChats(prev => [
            ...prev,
            { 
                role: 'model', 
                content: error.message || "Failed to connect to the server.",
                isError: true // Flag this so you can style it red in the UI
            }
            ]);
        }finally {
            setLoading(false);
        }   
    }

  


  return (
    <div className={`  w-full  relative space-y-5  `}>
            {/* Chat Container */}

            <div className='hidden chat-container'>

                <div className={`  border border-gray-200 dark:border-gray-600 bg-white rounded-lg dark:bg-zinc-900  h-100 2xl:max-h-120     flex flex-col  shadow-lg`}>

                    {/* Chat Header  */}    
                    <ChatHeader onClick={()=> handleCloseChat()}/>

                    

                    <div className=' space-y-5 overflow-y-auto grow'>
                        
                       
                            {/* <Image src={profileImage} alt='Profile Image' className='w-5 h-5 rounded-full'/>
                            <div className={`border border-zinc-200 dark:border-zinc-700 rounded-lg  p-2 max-w-[75%] `}>
                                <p className={`text-xs text-black dark:text-white whitespace-pre-wrap `}>Welcome! 👋 I’m happy you’re here. Feel free to ask questions about programming, web development, or my experience building projects.</p>
                            </div>  */}

                        {/* Chat Conversation */}
                        <BubbleConverstation chats={chats} loading={loading} />
                    </div>
                    
                    {/* TExt Field */}
                    <div className='p-4 space-y-1'>

                        <form onSubmit={(e)=> handleSubmitMessage(e)}>
                                <div className='flex gap-3 items-center '>
                                    <input type="text" 
                                    id='input-message' 
                                    className=' w-full rounded-md border-0 bg-zinc-100 dark:bg-zinc-700 text-xs p-2'
                                    value={message} onChange={(e)=> setMessage(e.target.value)}
                                    maxLength={100}
                                    />
                                    <button className={`bg-zinc-700 dark:bg-zinc-600  rounded-lg p-2 
                                    ${!message ? 'cursor-not-allowed opacity-50' : 'cursor-pointer opacity-100'}`}
                                    type='submit'
                                    disabled={loading || !message}
                                    >
                                        <Send size={18} className='text-white '/>
                                    </button>
                             
                            </div>


                        </form>
                        
                       <div className='flex justify-between'>
                        <p className='text-xxs  text-zinc-500'>Ask me about programming, web dev, or tech!</p>
                        <p className={`text-xxs   ${message.length < 100 ? 'text-zinc-500' : 'text-red-500'}`}>{message.length}/100</p>
                       </div>
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