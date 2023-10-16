import React from 'react'
import testimonials from '../data/testimonials'

export default function Testimonials() {
  const clients = testimonials.map(testimonial => {
    return (
      <div key={testimonial.id} className='col text-center'>
        <img src={testimonial.img} alt="profile picture" className='rounded-full mx-auto w-16 md:w-20 mb-10' />
        <p className='mb-10 text-testimonial-text font-bold'>{testimonial.testimonial}</p>
        <h4 className='mb-2 text-subtitles'>{testimonial.name}</h4>
        <p className='text-testimonial-profession text-sm'>{testimonial.profession}</p>
      </div>
    )
  })

  return (
    <section className='w-full h-fit md:h-[70vh] text-center grid content-center py-20 px-10 md:px-40' id="testimonials">
      <h4 className='text-2xl uppercase tracking-widest text-testimonial-section-title mb-20'>Client testimonials</h4>
      <article className='grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-16'>
        {clients}
      </article>
    </section>
  )
}
