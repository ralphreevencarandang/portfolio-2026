import React from 'react'
import Link from 'next/link'
type Button = {
    label: string
    bgColor: string
    textColor: string
    icon: React.ReactNode
    arrow: React.ReactNode
    link: string
    
}

const Button = ({label, bgColor, textColor, icon, arrow, link} : Button) => {
  return (
    <Link href={link} target='_blank' className={`${bgColor} ${textColor} border border-slate-300 rounded py-2 px-2 text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer`}> 
        <span>{icon}</span>
        {label}
        <span>{arrow}</span>
    </Link>
  )
}

export default Button