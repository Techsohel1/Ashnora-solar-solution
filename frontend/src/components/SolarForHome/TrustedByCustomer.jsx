import { Link } from "react-router-dom";

const TrustedByCustomers = () => {
  return (
    <section className="bg-[#f2f2f2] py-12 lg:py-0 overflow-hidden">
      <div className="max-w-350 mx-auto">
        <div className="grid lg:grid-cols-[55%_45%] items-center min-h-155">
          
          {/* Left Content */}
          <div className="px-6 lg:px-10 py-10">
            <h2 className="text-3xl lg:text-6xl font-medium text-[#004a8f] leading-tight">
              Trusted by{" "}
              <span className="font-bold relative inline-block">
                20,000+
                <svg
                  className="absolute -bottom-4 left-0 w-full"
                  viewBox="0 0 200 30"
                  fill="none"
                >
                  <path
                    d="M5 20C50 5 150 5 195 20"
                    stroke="#ff6a00"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              Happy Customers
            </h2>

            <p className="mt-10 text-gray-700 text-lg leading-9">
              From personalized rooftop solar system design to seamless
              installation and handover, we ensure every step of your solar
              journey is smooth and hassle-free. Our solar panel for home
              solutions are designed to deliver unbeatable quality and
              long-term savings, making your investment a smart one.
            </p>

            <p className="mt-4 text-gray-700 text-lg leading-9">
              Switch to solar today with India’s largest residential solar
              solutions company and enjoy 25 years of reliable, clean energy
              and peace of mind.
            </p>

            <Link
                to="/contact-us"
                className="inline-block mt-10 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Contact Us
              </Link>
          </div>

          {/* Right Image */}
          <div className="flex items-center h-full -ml-8">
            <img
              src="/images/solar-for-home.png"
              alt="Solar Home"
              className="w-full max-w-150 h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustedByCustomers;