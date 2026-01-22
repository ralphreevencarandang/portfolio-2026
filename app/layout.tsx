import type { Metadata } from "next";
import { Geist, Geist_Mono,Inter } from "next/font/google";
import "./globals.css";
import { profileImg } from "@/public/images";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],


});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ralph Reeven",
  description: "Ralph Reeven Carandang portfolio.",
    icons: {
    icon: '/profile-img.jpg',
    shortcut: '/profile-img.jpg',
    apple: '/profile-img.jpg',
  
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}  antialiased`}  >
      
        {children}
      </body>
    </html>
  );
}
