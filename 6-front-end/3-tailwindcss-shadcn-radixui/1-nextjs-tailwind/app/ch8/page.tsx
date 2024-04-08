import React from 'react'

const Ch8 = () => {
  return (
    <div className='h-full'>
        <h1>Learning grid</h1>
        <div className='grid grid-cols-12 h-full grid-rows-layout'>
            <div className='bg-red-400 p-2 col-start-1 col-end-13'>
                <header className='flex items-center justify-between'>
                    <h1>logo</h1>
                    <ul className='flex gap-4'>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        </ul>
                </header>
            </div>
            <div className='bg-purple-300 p-2 col-span-3 h-full'>2</div>
            <div className='bg-gray-500 p-2 col-span-9 h-full'>3</div>
            <div className='bg-orange-500 p-2 col-span-12'>4</div>
        </div>
    </div>
  )
}

export default Ch8