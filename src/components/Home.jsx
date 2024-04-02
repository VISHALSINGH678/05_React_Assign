import React from 'react'
import NavBar from './NavBar'
import Carousels from './Carousels'
import CompanyLogo from './CompanyLogo'
import Cards from './Cards'
import BoldPatty from './BoldPatty'
import Owners from './Owners'
import BestProjects from './BestProjects'
import BlogNews from './BlogNews'
import Footer from './Footer'
import About from './About'
import OurWork from './OurWork'
import Ten from './Ten'
import Carousels2 from './Carousels2'

export default function Home() {
  return (
    <div>
      <NavBar/>
      <Carousels/>
      <CompanyLogo/>
      <About/>
      <Cards/>
      <Ten/>
      <BoldPatty/>
      <Owners/>
      <BestProjects/>
      <Carousels2/>
      <OurWork/>
      <BlogNews/>
      <Footer/>
    </div>
  )
}
