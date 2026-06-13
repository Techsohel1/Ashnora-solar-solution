import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ContactFormBusiness from "../components/SolarForBusiness/ContactFormBusiness"
import EnergyIndependence from "../components/SolarForBusiness/EnergyIndependence"
import EPCPartner from "../components/SolarForBusiness/EPCPartner"
import OneStopForBusiness from "../components/SolarForBusiness/OneStopForBusiness"
import SolarPPA from "../components/SolarForBusiness/SolarPPA"
import TransformingPotential from "../components/SolarForBusiness/TransformingPotential"
import WhyGoSolarBusiness from "../components/SolarForBusiness/WhyGoSolarBusiness"
import Testimonials from "../components/Testimonials"


const SolarForBusiness = () => {
  return (
    <div>
      <Navbar/>
      <EnergyIndependence/>
      <TransformingPotential/>
      <OneStopForBusiness/>
      <WhyGoSolarBusiness/>
      <EPCPartner/>
      <SolarPPA/>
      <ContactFormBusiness/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default SolarForBusiness
