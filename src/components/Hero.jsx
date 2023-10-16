import React from 'react'

export default function Hero() {
  return (
    <section id='hero' className='h-screen w-full bg-cover bg-center bg-hero-desktop'>
      <h1 className='text-center pt-40 text-bg-white text-4xl md:text-8xl tracking-widest uppercase animate__animated animate__swing animate__delay-3s'>We are creatives</h1>
      <a href="#about">
        <svg width="36" height="114" xmlns="http://www.w3.org/2000/svg" className='mx-auto mt-32 animate__animated animate__bounce animate__delay-5s animate__3 3'><g stroke="#FFF" stroke-width="6" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v100M3 95.484l15 15 15-15" /></g></svg>
      </a>

    </section>
  )
}
