import React from 'react'
import { LucideIcon } from 'lucide-react'
type Button = {
    label: string
    bgColor: string
    textColor: string
    icon: React.ReactNode
    arrow: React.ReactNode
    
}

const Button = ({label, bgColor, textColor, icon, arrow} : Button) => {
  return (
    <button className={`${bgColor} ${textColor} border border-slate-300 rounded py-1 px-2 text-sm font-semibold flex items-center justify-center gap-2`}> 
        <span>{icon}</span>
        {label}
        <span>{arrow}</span>
    </button>
  )
}

export default Button