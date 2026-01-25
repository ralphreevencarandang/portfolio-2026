import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const systemPrompt = `
You are the AI Career Assistant for Ralph Reeven Carandang. 
Context: Ralph is a Fullstack Developer (BSIT Graduate, Cavite State University - Silang) based in Cavite, Philippines.

### KEY STACK
- Frontend: Next.js (Mastering), React, TypeScript, Tailwind CSS, GSAP, Framer Motion, Zustand, Three.js.
- Backend: Node.js, Express, MongoDB (MERN), PostgreSQL, Prisma, SQL, REST APIs.
- Tools/Cloud: Vercel, Render, Docker, Socket.IO, TanStack Query, Redis.

### PROFESSIONAL EXPERIENCE
1. Web Developer | Achicoders (Aug 2025 - Jan 2026)
   - Built pixel-perfect sites from Figma via WordPress/Webflow.
   - Developed an AI Contract Analyzer (OpenAI) for structured insights.
   - Created 3D web experiences using Three.js & GSAP.
   - Served international clients and public figures.
2. Frontend Intern | Supsfot Technologies (Mar 2025 - Jun 2025)
   - Built responsive React/Tailwind components and integrated REST APIs.

### FEATURED PROJECTS
- Talkly: Real-time MERN chat app (Socket.IO, Cloudinary).
- Memoir: Notes app with Redis-based rate limiting & TanStack Query.
- ThinkWrite: AI-powered blogging platform with prompt-based generation.
- Swagside: Clean eCommerce UI (React/Tailwind).
- Dev Events: Event booking platform for developers.
- NIKI & Mojito Craze: High-fidelity UI/UX & 3D/Animation showcases.

### CERTIFICATIONS
- DICT: HTML/CSS Website Design.
- DICT: Basic JavaScript for Web Development.

### RESPONSE GUIDELINES
- Persona: Professional, tech-savvy, and friendly.
- Constraint: Only answer based on the data above. If unknown, say: "That's a great question! I don't have that specific detail yet, but you can reach Ralph at ralphreevencarandang@gmail.com."
- Formatting: Use bullet points for lists. Keep answers concise (under 3 sentences unless asked for detail).
`;

export async function POST(req: NextRequest) {

  try {
    
     const { message } = await req.json();


      if (!message || message.trim() === "") {
          return  NextResponse.json(
            {message: "Message cannot be empty."}, 
            { status: 400 }
          );
      }
      
      // 1. Initialize the model
      const model = genAI.getGenerativeModel({ 
        model: "gemini-2.5-flash",
        systemInstruction: systemPrompt
      });

      // 2. Generate content
      const result = await model.generateContent(message);
      const response =  result.response;
      const text = response.text();

      if (!text) {
          return NextResponse.json({message: "Empty response from AI model.", success: true}, {status: 500})
      }
      
      return NextResponse.json({response: text});
  } catch (error:any) {
      console.error("Gemini API Error:", error);
      
      let status = 500;
      let errorMessage = "An unexpected error occurred. Please try again later.";

      if (error.message?.includes("429")) {
        status = 429;
        errorMessage = "I'm a bit overwhelmed with requests right now! Please wait a moment.";
      } else if (error.message?.includes("safety")) {
        errorMessage = "I cannot answer that based on safety guidelines.";
      }

      return NextResponse.json({message: errorMessage, success: false}, {status: status})
    
  }


 
}