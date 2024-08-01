import ContactSection from "./components/global/ContactSection"
import Footer from "./components/global/Footer"
import { Header } from "./components/global/Header"
import { HeroSection } from "./components/global/HeroSection"
import {ProjectSection} from "./components/global/ProjectSection"
import SkillSection from "./components/global/SkillSection"

const App = () => {
  return (
    <div className="flex flex-col min-h-[100vh]">
      {/* Header */}
      <Header/>
      {/* Hero-Section */}
      <HeroSection/>
      {/* Project-Section */}
      <ProjectSection/>

      {/* Skill-Section */}
      <SkillSection/>

      {/* Contact-section */}
      <ContactSection/>

      {/* Footer */}
      <Footer />
  
    </div>
  )
}

export default App
