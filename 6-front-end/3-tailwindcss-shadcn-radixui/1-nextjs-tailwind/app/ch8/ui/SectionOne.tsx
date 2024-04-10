import React from 'react'

const SectionOne = () => {
  return (
    <section className='bg-[#3B4050] py-12'>
        <div className='w-[80%] mx-auto flex gap-4'>

            <h1 className='text-white text-6xl font-bold font-oswald'>Responsive layouts <span className='text-[#A59678]'> don&apos;t have to be a struggle</span></h1>

            <div className='self-end'>
                <p className='text-white text-lg font-moon'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ipsam. Necessitatibus voluptates eum praesentium quis animi, quia vel nisi, commodi maiores saepe velit sit voluptatem dolor obcaecati. Quae, sint alias!</p>
                <button className='bg-[#A59678] px-2 py-1 uppercase rounded-full mt-4 text-white font-moon'>i want to learn</button>
            </div>
        </div>
    </section>
  )
}

export default SectionOne