import CtaBanner from "../components/CtaBanner"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import GoingWithAshnora from "../components/SolarForHome/GoingWithAshnora"
import OneStop from "../components/SolarForHome/OneStop"
import TrustedByCustomer from "../components/SolarForHome/TrustedByCustomer"
import WhyGoSolar from "../components/SolarForHome/WhyGoSolar"
import Testimonials from "../components/Testimonials"


const SolarForHome = () => {
  return (
    <div>
      <Navbar/>
      <TrustedByCustomer/>
      <GoingWithAshnora/>
      <OneStop/>
      <WhyGoSolar/>
      <Testimonials/>
      <CtaBanner/>
      <Footer/>
    </div>
  )
}

export default SolarForHome
