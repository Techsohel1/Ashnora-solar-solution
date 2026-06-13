import Awards from '../components/Awards'
import CompanyIntro from '../components/CompanyIntro'
import CtaBanner from '../components/CtaBanner'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import OurJourney from '../components/OurJourney'
import SolarSolutions from '../components/SolarSolutions'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <CompanyIntro/>
      <OurJourney/>
      <SolarSolutions/>
      <Awards/>
      <Testimonials/>
      <FAQ/>
      <CtaBanner/>
      <Footer/>
    </div>
  )
}

export default Home
