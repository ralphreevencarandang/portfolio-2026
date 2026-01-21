import { BriefcaseBusiness } from 'lucide-react'
import React from 'react'

const About = () => {
  return (
    <div className='card '>

        <div className='flex flex-nowrap items-center gap-2 '>
          <span><BriefcaseBusiness color='#71717a' size={20}/></span>
          <h2 className='font-bold'>About</h2>
        </div>

        <p className='text-sm leading-relaxed'>
          I'm an Aspiring Network Engineer and Full-Stack Developer with a passion for building secure, scalable infrastructure.

          My primary focus is on Enterprise Networking (VLANs, OSPF/EIGRP, VPNs) and Network Security. I love simulating complex topologies and securing them against vulnerabilities.

          Beyond networking, I build modern web applications using React and Python, bridging the gap between infrastructure and software — winning AWS Innovation Cup 2025 and Ship or Be Shipped Hackathon 2025.
        </p>
    </div>
  )
}

export default About