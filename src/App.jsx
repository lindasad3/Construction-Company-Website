import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
 import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Services from './Components/Services'
import LatestRealizations from './Components/LatestRealizations'
import Footer from './Components/Footer'  
import Contact from './Components/Contact'
import HomePage from './Components/pages/HomePage'
import ServicesPage from './Components/pages/ServicesPage'
import RealisationsPage  from './Components/pages/RealisationsPage' 
 
import { Routes, Route } from 'react-router-dom'
import ContactPage from './Components/pages/ContactPage'
import AvisClientsPage from './Components/pages/AvisClientsPage'  
import BlogPage from './Components/pages/BlogPage'
import AProposPage from './Components/pages/AProposPage'
function App() {
 
  return (
    <>
    <Navbar />
   <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/réalisations" element={<RealisationsPage />} />
            <Route path="/à-propos" element={<AProposPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/avis-clients" element={<AvisClientsPage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </div>


      
    <Footer />
    </>
  )
}

export default App
