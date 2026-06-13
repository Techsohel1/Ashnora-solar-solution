import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";

const CtaBanner = () => {
  return (
    <section className="bg-[#F3F4F6] py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

         
          <div className="flex justify-center lg:w-1/3">
            <img
              src="/images/cta-solar.png"
              alt="Solar Illustration"
              className="w-full max-w-[320px] object-contain"
            />
          </div>

          
          <div className="text-center lg:text-left lg:w-1/3">
            <h2 className="text-2xl md:text-5xl font-bold text-[#00539B] leading-tight">
              India's Leading Integrated Solar Company
            </h2>

            <p className="mt-4 text-xl text-gray-600">
              Smart Solar Solutions
            </p>
          </div>

          <div className="lg:w-1/3 flex justify-center lg:justify-end">
            <Link to="/contact-us" className="flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition duration-300">
              <FiPhoneCall size={20} />
              CONNECT WITH US
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CtaBanner;