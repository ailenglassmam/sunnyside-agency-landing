import './App.css'
import 'animate.css';
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import About from './components/About'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Testimonials></Testimonials>
      <Gallery></Gallery>
      <Footer></Footer>
    </>

  )
}

export default App
