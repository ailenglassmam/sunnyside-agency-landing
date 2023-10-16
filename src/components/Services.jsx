import React from 'react'

export default function Services() {
  return (
    <section id='services' className='w-full h-fit'>
      <article className='grid grid-cols-1 sm:grid-cols-2'>
        <div className='col h-[600px] bg-cover bg-center bg-graphic-mobile md:bg-graphic-desktop text-center grid gap-4 content-end pb-10 px-10 md:px-40 text-graphic-design-text'>
          <h3 className='text-2xl '>Graphic design</h3>
          <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
        </div>
        <div className='col h-[600px] bg-cover bg-center bg-photography-mobile md:bg-photography-desktop text-center grid gap-4 content-end pb-10 px-10 md:px-40 text-photography-text'>
          <h3 className='text-2xl'>Photography</h3>
          <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
        </div>
      </article>
    </section>
  )
}
