import CompanyAbout from "../components/About/CompanyAbout"
import CoreValues from "../components/About/CoreValues"
import OurKeyStrength from "../components/About/OurKeyStrength"
import Awards from "../components/Awards"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import OurJourney from "../components/OurJourney"


const AboutUs = () => {
  return (
    <div>
      <Navbar/>
      <CompanyAbout/>
      <OurJourney/>
      <CoreValues/>
      <OurKeyStrength/>
      <Awards/>
      <Footer/>
    </div>
  )
}

export default AboutUs
