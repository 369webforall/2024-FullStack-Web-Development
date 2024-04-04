import React from 'react'
import Image from 'next/image'
const Ch6 = () => {
  return (
    <div>

        <section className='bg-green-800 py-8'>
            <div className='w-[80%] mx-auto'>
            <div className='flex gap-6'>
                <div className='flex-1 text-white'>
                    <h1 className='text-6xl mb-4'>Responsive layout don&apos;t have to be a struggle</h1>
                    <p className='text-sm sm:text-lg md:text-xl lg:text-2xl '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat nostrum cumque repudiandae, asperiores, iste ipsa assumenda, quibusdam blanditiis ducimus soluta porro at minus culpa incidunt veniam. Vel commodi necessitatibus aliquam!</p>
                    <button className='px-4 py-2 bg-orange-700 rounded-full uppercase mt-4 font-semibold'>i want to leaern</button>
                </div>
                <div className='flex-1 relative'>
                    <Image src="/asset/hero-img.jpg" alt="hero image" fill objectFit='cover' />
                </div>
            </div>
            </div>
        </section>

        <section className='py-8'>
            <div className='w-[80%] mx-auto'>

                <div className='flex gap-6'>
                    <div className='flex-initial w-3/4'>
                        <h2 className='text-purple-600 text-3xl font-semibold mb-6'>Quality design Lorem ipsum dolor sit.</h2>
                        <p className='text-lg mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque consequuntur hic quas eligendi deserunt accusantium nulla placeat unde facilis molestiae ipsam incidunt dolorem aliquam maiores at debitis asperiores, odit error?</p>
                        <p className='text-lg mb-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste aspernatur possimus facilis error quasi eveniet tenetur porro eius? Quibusdam soluta dolores expedita numquam dolorum unde, inventore laborum explicabo! Maiores, velit!</p>
                        <p className='text-lg mb-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod rerum impedit maxime, distinctio, deserunt modi aliquid delectus similique cumque fugiat officia perspiciatis! Officiis nesciunt, numquam tempore cupiditate pariatur voluptas laborum.</p>
                    </div>
                    <div className='flex-initial w-1/4 bg-green-900 text-white p-4 text-center'>
                        <div className='mb-4'>
                            <h2 className='text-4xl font-semibold mb-4'>Cheap</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum distinctio modi provident eos consequuntur id consequatur aspernatur impedit velit iure.</p>
                        </div>
                        <div className='mb-4'>
                            <h2 className='text-4xl font-semibold mb-4'>Quick</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum distinctio modi provident eos consequuntur id consequatur aspernatur impedit velit iure.</p>
                        </div>
                        <div className='mb-4'>
                            <h2 className='text-4xl font-semibold mb-4'>Quality</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum distinctio modi provident eos consequuntur id consequatur aspernatur impedit velit iure.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
     
    </div>
  )
}

export default Ch6