import Cursor from "./components/Cursor"
import Features from "./components/Feastures"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import HowItWorks from "./components/HowItWorks"
import Model from "./components/Model"
import Navbar from "./components/Navbar"
import Photogallery from "./components/Photogallery"

import * as Sentry from '@sentry/react';

const App = () => {
  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <Highlights />
      <Photogallery/>
      <Model/>
      <Features/>
      <HowItWorks/>
      <Footer/>
      
    </>

  )
}

export default Sentry.withProfiler(App);
