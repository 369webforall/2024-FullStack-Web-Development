import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <header className='bg-[#2E323F] py-2'>
      <nav className='w-[80%] mx-auto flex items-center justify-between'>
      <Link href='/'><h1 className='text-white text-4xl font-semibold font-oswald'>CRL</h1></Link>

      <ul className='text-white text-md font-semibold flex gap-4 uppercase items-center'>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/">About</Link></li>
        <li><Link href="/">Contact</Link></li>
        <li><Link href="/">Sign in</Link></li>
        <li className='py-1 px-4 bg-[#A59678] rounded-full'><Link href="/">sign up</Link></li>
      </ul>
      </nav>
    </header>
  )
}

export default Navbar