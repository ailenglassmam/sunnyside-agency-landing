import React from 'react'
import img1 from '../assets/desktop/image-gallery-milkbottles.jpg'
import img2 from '../assets/desktop/image-gallery-orange.jpg'
import img3 from '../assets/desktop/image-gallery-cone.jpg'
import img4 from '../assets/desktop/image-gallery-sugarcubes.jpg'

export default function Gallery() {
  return (
    <section id='projects' className='w-full h-fit grid grid-cols-2 md:grid-cols-4'>
      <img src={img1} alt="Project 1" className='col' />
      <img src={img2} alt="Project 2" className='col' />
      <img src={img3} alt="Project 3" className='col' />
      <img src={img4} alt="Project 4" className='col' />
    </section>
  )
}
