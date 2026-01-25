import React from 'react'
import Image from 'next/image'
import profileImage from '@/public/images/profile-img.jpg'
import { Chat } from '@/Types'
import TypingBubble from './TypingBubble'


const BubbleConverstation = ({ chats, loading} : { chats: Chat[], loading : boolean}) => {
  return (
  <div className='p-4 space-y-4'>
      {/* 1. Render History */}
      {chats.map((chat, index) => (
        <div 
          key={index} 
          className={`flex gap-3 items-start ${chat.role === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          {/* Only show profile image for AI/Model messages */}
          {chat.role === 'model' && (
            <Image src={profileImage} alt='Profile Image' className='w-5 h-5 rounded-full object-cover' />
          )}

          <div className={`border border-zinc-200 dark:border-zinc-700 rounded-lg p-2 max-w-[75%] ${chat.role === 'user' ? 'bg-black dark:bg-white' : 'bg-transparent'}`}>
            <p className={`text-xs ${chat.role === 'user' ? 'text-white dark:text-black' : 'text-black dark:text-white'} whitespace-pre-wrap`}>
              {chat.content}
            </p>
          </div>
        </div>
      ))}

      {/* 2. Render Typing Indicator (Outside the loop, at the bottom) */}
      {loading && (
        <div className='flex gap-3 items-start justify-start'>
          <Image src={profileImage} alt='Profile Image' className='w-5 h-5 rounded-full object-cover' />
          <TypingBubble />
        </div>
      )}
    </div>
  )
}

export default BubbleConverstation