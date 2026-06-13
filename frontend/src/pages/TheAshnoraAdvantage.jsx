import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import AshnoraGuiding from "../components/TheAshnoraAdvantages/AshnoraGuiding"
import PowerOfPhilosophy from "../components/TheAshnoraAdvantages/PowerOfPhilosophy"
import SmartInvestments from "../components/TheAshnoraAdvantages/SmartInvestments"
import UnmatchedQuality from "../components/TheAshnoraAdvantages/UnmatchedQuality"
import WhyPartner from "../components/TheAshnoraAdvantages/WhyPartner"

const TheAshnoraAdvantage = () => {
  return (
    <div>
      <Navbar/>
      <WhyPartner/>
      <PowerOfPhilosophy/>
      <AshnoraGuiding/>
      <UnmatchedQuality/>
      <SmartInvestments/>
      <Footer/>
    </div>
  )
}

export default TheAshnoraAdvantage
