import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero'
import InfoSection from '../components/InfoSection'
import InfoSection2 from '../components/InfoSection2'
import InfoSection3 from '../components/InfoSection3'

const Home = () => {
    const [sidebarOpen, setsidebarOpen] = useState(false)

    const openSidebar = () => {
      setsidebarOpen(true)
    }
    const closeSidebar = () => {
      setsidebarOpen(false)
    }
  
  
    return (
        <>
          <Navbar openSidebar={openSidebar}/> 
          <Sidebar closeSidebar={closeSidebar} sidebarOpen={sidebarOpen}/>
          <Hero/>
          <InfoSection />
          <InfoSection2 />
          <InfoSection3 />
        </>
        )
}

export default Home
