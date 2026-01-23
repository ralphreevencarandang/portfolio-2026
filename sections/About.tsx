import { BriefcaseBusiness } from 'lucide-react'
import React from 'react'

const About = () => {
  return (
    <div className='card '>

        <div className='flex flex-nowrap items-center gap-2 '>
          <span><BriefcaseBusiness color='#71717a' size={20}/></span>
          <h2 className='font-bold'>About</h2>
        </div>

        <p className="text leading-relaxed">
          I’m a <strong className="text-black dark:text-white">Fullstack Developer</strong> focused on building modern, scalable, and user-focused web applications. I specialize in <strong className="text-black dark:text-white">React</strong> and the <strong className="text-black dark:text-white">MERN stack</strong>, and I’m currently sharpening my expertise in <strong className="text-black dark:text-white">Next.js</strong> to create fast, SEO-optimized, and production-ready solutions.
        </p>

        <p className="text leading-relaxed">
          Beyond traditional web development, I’m highly interested in <strong className="text-black dark:text-white">integrating AI into real-world applications</strong>—using intelligent features to enhance user experience, automate workflows, and support better decision-making. 
        </p>

        <p className="text leading-relaxed">
          I enjoy transforming complex ideas into clean, performant systems and continuously improving my skills to stay aligned with modern web standards.
        </p>
    </div>
  )
}

export default About