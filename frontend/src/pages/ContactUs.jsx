
import ElectricityBill from "../components/ContactUs/ElectricityBill"
import FreeSolarQuotation from "../components/ContactUs/FreeSolarQuotation"
import VisitUs from "../components/ContactUs/VisitUs"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


const ContactUs = () => {
  return (
    <div>
      <Navbar/>
      <ElectricityBill/>
      <FreeSolarQuotation/>
      <VisitUs/>
      
      <Footer/>
    </div>
  )
}

export default ContactUs
