import React from 'react'
import Link from 'next/link'
import { link } from 'fs'


const Footer = () => {
  const links = [{id:1, label:'Home', href:'/home'}, {id:2, label:'About', href:'/about'}, {id:3, label:'Contact', href:'/contact'}]
  return (
    <footer className='bg-[#3B4050] py-12'>
      <div className='w-[80%] mx-auto'>
        <h2 className='md:text-center font-oswald text-4xl mb-6 text-white'>just scratching the surface</h2>
      <div className='flex justify-between flex-col lg:flex-row gap-6 text-white'>
        <div className='w-[40%]'>
          <h3 className='text-orange-400 text-2xl mb-4'>About Company</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut deleniti cumque atque molestias natus, accusantium id pariatur ratione ducimus, ipsum animi nihil iste, numquam quo vero quia cupiditate autem minima.</p>
          </div>
        <div className='w-[55%] text-white flex flex-col md:flex-row gap-4'>
          <div className='flex-1'>
            <h3 className='text-orange-400 text-2xl mb-4'>Getting Around</h3>
            <ul>
              {links.map((link)=>(
                <li key={link.id}><Link href={link.href}>{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div className='flex-1'>
            <h3 className='text-orange-400 text-2xl mb-4'>Add more</h3>
            <ul>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
            </ul>
          </div>
          <div className='flex-1'>
            <h3 className='text-orange-400 text-2xl mb-4'>Other things</h3>
            <ul>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer