
'use client'

import {  Send } from 'lucide-react'
import BubbleButton from './BubbleButton'
import ChatHeader from './ChatHeader'
import { useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import BubbleConverstation from './BubbleConverstation'
const BubbleChat =  () => {

    const [isChatOpen, setIsChatOpen] = useState(false);

    const [chats, setChats] = useState({
        ai: [],
        user: []
    })
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
        setLoading(true);
        try {
            
            e.preventDefault();

            if (!message || message.trim() == "") {
                return
            }

            const result = await fetch('http://localhost:3000/api/chat', {
                method: "POST",
                body: JSON.stringify({ message }),
                headers: { 'Content-Type': 'application/json' },
            })
            const response = result.json()


            setMessage('')
            console.log('response: ', response);
            
        
            return response;
        } catch (error) {
            console.log('Error in Handle Submit Message Method: ', error);
            
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
                        {/* Chat Conversation */}
                        <BubbleConverstation/>
                    </div>
                    
                    {/* TExt Field */}
                    <div className='p-4 space-y-1'>

                        <form onSubmit={(e)=> handleSubmitMessage(e)}>
                                <div className='flex gap-3 items-center '>
                                    <input type="text" 
                                    id='input-message' 
                                    className=' w-full rounded-md border-0 bg-zinc-100 dark:bg-zinc-700 text-xs p-2'
                                    value={message} onChange={(e)=> setMessage(e.target.value)}
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
                        
                       
                        <p className='text-xxs  text-zinc-500'>Ask me about programming, web dev, or tech!</p>
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