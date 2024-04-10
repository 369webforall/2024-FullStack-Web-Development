import React from 'react'
import Image from 'next/image'

const SectionThree = () => {
  return (
    <section className='py-12'>

        <div className='w-[80%] mx-auto flex flex-col lg:flex-row gap-6'>
            <div className='p-2'>
                <h2 className='font-oswald text-4xl mb-4 text-[#A59678]'>It doen&apos;t have to be so hard</h2>
                <p className='font-moon text-lg mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ipsa sapiente dicta quia et voluptatem aut harum veritatis numquam nisi soluta minima quasi! Quam voluptatibus recusandae fuga, aliquam eaque ipsa.</p>
                <div>
                    <Image src='/asset/hero-img.jpg' alt='hero image' width={400} height={400}/>
                </div>
<p className='font-moon text-lg my-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero doloremque libero repellat. Iusto necessitatibus facere corrupti optio possimus repudiandae? Delectus repudiandae eum voluptatum rem, harum ad temporibus facere non! Odio?</p>
            </div>
            <div className='flex flex-col gap-6 md:flex-row lg:flex-col'>
                <div className='bg-gray-800 text-white p-6 text-center'>
                    <h2 className='font-oswald text-4xl mb-4'>Break it down</h2>
                    <p className='font-moon text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex quae deleniti ratione totam sint a ut corporis hic expedita animi.</p>
                </div>
                <div className='bg-gray-800 text-white p-6 text-center'>
                    <h2 className='font-oswald text-4xl mb-4'>Work your way up</h2>
                    <p className='font-moon text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi amet nobis sed illo voluptatem illum eum optio exercitationem, quia hic.</p>
                </div>
                <div className='bg-gray-800 text-white p-6 text-center'>
                    
                    <p className='font-moon text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quidem at iste a cumque voluptatum blanditiis ipsum qui sunt odio?</p>
                </div>
            </div>
        </div>

    </section>
  )
}

export default SectionThree