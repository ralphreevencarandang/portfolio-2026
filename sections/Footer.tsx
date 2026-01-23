'use client'
import { Facebook, Github, Instagram, Linkedin, Mail } from 'lucide-react'
import React from 'react'
import nextJs from '@/public/icons/next-js.svg'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

 // Animation Handler
  export const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      y: -3, // Moves the icon up
      duration: 0.3,
      ease: 'power2.out'
    })
  }


   export const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      y: 0, // Returns to original position
      duration: 0.3,
      ease: "circ.inOut"
    })
  }


const Footer = () => {



 

  
const socialLinks = [
    { href: 'https://www.linkedin.com/in/ralph-reeven-carandang/', icon: <Linkedin /> },
    { href: 'https://github.com/ralphreevencarandang', icon: <Github /> },
    { href: 'https://www.facebook.com/arar404', icon: <Facebook /> },
    { href: 'https://www.instagram.com/__ar4r/', icon: <Instagram /> },
  ]


  return (
    <footer className='max-w-5xl padding-x '>

        <div className='border-t border-zinc-300 py-10 flex flex-col justify-center gap-3 sm:flex-row sm:justify-between items-center'>

            <div className='text-center space-y-1'>
                <p className='font-bold text-sm'>Ralph Reeven Carandang</p>
                <p className='text-xs text-zinc-500'>© { new Date().getFullYear() }. All rights reserved.</p>
                
            </div> 

          

           <div className='flex gap-3 justify-center'>
                {socialLinks.map((social, index) => (
                    <Link
                    key={index}
                    href={social.href}
                    target='_blank'
                    className='social-icon inline-block' 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    >
                    {social.icon}
                    </Link>
                ))}
                </div>

              <div className='text-center flex gap-1 justify-center items-center'>
                <p className='text-sm'>Powered by  </p>
                <Image src={nextJs} alt="Next.js" className='w-5' />
            </div> 
        </div>
        
    </footer>
  )
}

export default Footer