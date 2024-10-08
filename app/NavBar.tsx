'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { PiBugBeetleDuotone } from "react-icons/pi";

const NavBar = () => {
    const currPath = usePathname();

    const links = [
        {label:'Dashboard', href:'/'},
        {label:'Issues', href:'/issues'},
    ]
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href="/"><PiBugBeetleDuotone /></Link>
        <ul className='flex space-x-6'>
            {links.map(link => 
                <Link key={link.href} 
                    className={`${link.href === currPath ? 'text-zinc-900' : 'text-zinc-500'} hover:text-zinc-800 transition-colors`} 
                    href={link.href}>{link.label}</Link>)}
        </ul>
    </nav>
  )
}

export default NavBar