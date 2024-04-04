import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    const links = [{id:1, label:'Home', href:'/'}, {id:2, label:'Ch1', href:'/ch1'}, {id:3, label:'Ch3', href:'/ch3'}, {id:4, label:'Ch6', href:'/ch6'}, {id:5, label:'About', href:'/about'}]
  return (
    <header className='bg-green-600 py-2'>
        <nav className='w-[80%] mx-auto flex gap-6'>
            {links.map((link)=>(
                <Link href={link.href} key={link.id} className='text-white font-medium text-lg'>{link.label}</Link>
            ))}
        </nav>
    </header>
  )
}

export default Navbar