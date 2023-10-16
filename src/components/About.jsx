import React from 'react'

export default function About() {
  return (
    <section id='about' className='bg-bg-white w-full'>
      <article className='grid grid-cols-1 md:grid-cols-2'>
        <div className='col py-10 px-10 my-auto text-center md:text-left md:px-20 order-2 md:order-1'>
          <h2 className='text-4xl text-subtitles'>Transform your brand</h2>
          <p className=' text-about-description-text my-7'>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
          <button className='font-serif uppercase hover:underline hover:underline-offset-1 hover:decoration-4 hover:decoration-yellow-underline-hover'>Learn More</button>
        </div>
        <div className='col h-[300px] sm:h-[600px] bg-cover bg-center bg-about-transform order-1 md:order-2'></div>
      </article>
      <article className='grid grid-cols-1 md:grid-cols-2'>
        <div className='col h-[300px] md:h-[600px] bg-cover bg-center bg-about-audience order-1 md:order-1'></div>
        <div className='col py-10 px-10 my-auto text-center md:text-left md:px-20 order-2 md:order-1'>
          <h2 className='text-4xl text-subtitles'>Stand out to the right audience</h2>
          <p className=' text-about-description-text my-7'>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
          <button className='font-serif uppercase hover:underline hover:underline-offset-1 hover:decoration-4 hover:decoration-red-underline-hover'>Learn More</button>
        </div>
      </article>
    </section>
  )
}
