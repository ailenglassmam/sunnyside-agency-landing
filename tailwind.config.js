/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'navbar': '#3ebfff',
      'graphic-design-text': 'hsl(167, 40%, 24%)',
      'photography-text': 'hsl(198, 62%, 26%)',
      'footer-text': 'hsl(168, 34%, 41%)',
      'footer-bg': '#90d4c5',
      'red-underline-hover': 'hsl(7, 99%, 70%)',
      'yellow-underline-hover': 'hsl(51, 100%, 49%)',
      'subtitles': 'hsl(212, 27%, 19%)',
      'about-description-text': 'hsl(232, 10%, 55%)',
      'testimonial-text': 'hsl(213, 9%, 39%)',
      'testimonial-section-title': 'hsl(232, 10%, 55%)',
      'testimonial-profession': 'hsl(210, 4%, 67%)',
      'bg-white': 'hsl(0, 0%, 100%)'
    },
    fontFamily: {
      sans: ['Barlow', 'sans-serif'],
      serif: ['Fraunces', 'serif'],
    },
    extend: {
      backgroundImage: {
        'hero-desktop': "url('./assets/desktop/image-header.jpg')",
        'graphic-desktop': "url('./assets/desktop/image-graphic-design.jpg')",
        'photography-desktop': "url('./assets/desktop/image-photography.jpg')",
        'graphic-mobile': "url('./assets/mobile/image-graphic-design.jpg')",
        'photography-mobile': "url('./assets/mobile/image-photography.jpg')",
        'about-transform': "url('./assets/desktop/image-transform.jpg')",
        'about-audience': "url('./assets/desktop/image-stand-out.jpg')",
      }
    },
  },
  plugins: [],
}