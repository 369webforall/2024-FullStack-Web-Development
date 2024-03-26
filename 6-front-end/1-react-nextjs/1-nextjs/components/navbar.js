import React from 'react'
import Link from 'next/link';

const Navbar = () => {
    const links = [
        {id:1, label:'Home', href:'/'},
        {id:2, label:'About', href:'/about'},
        {id:3, label:'Blogs', href:'/blogs'},
        {id:4, label:'Contact', href:'/contact'},
        {id:5, label:'Dashboard', href:'/dashboard'}
    ]
  return (
    <header className='flex border-b gap-4 items-center py-4'>
        <Link href='/'>Logo</Link>
        
        <nav className='flex items-center gap-4'>
            {links.map((link)=>(
              <Link href={link.href} key={link.id}>{link.label}</Link>  
            ))}
        </nav>
    </header>
  )
}

export default Navbar;