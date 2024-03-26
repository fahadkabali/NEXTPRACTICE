"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import './styles.css'
import { useState } from "react"

const navLinks =[
    {name:"Register", href:"/register"},
    {name:"Login", href:"/login"},
    {name:"Forgot", href:"/forgot-password"}
]
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const [input, setInput] = useState("")
    const pathname = usePathname();
    return (
        <div>
            <div>
                <input type="text" placeholder="Type Something..." value={input} onChange={(e)=> setInput(e.target.value)}/>
            </div>
            {navLinks.map(link =>{
                const isActive = pathname.startsWith(link.href)
                return(
                    <>
                    <ul>
                        <li>
                            <Link href={link.href} key={link.name}
                            className={isActive?"font-bold mr-4":"text-blue-500 mr-4"}>{link.name}</Link>
                        </li>
                    </ul>
                    </>
                )
            })}
            {children}
        </div>
         
          
    )
  }