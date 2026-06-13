import { Link } from "react-router-dom";

const CompanyIntro = () => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">

        {/* Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#00539B] mb-6 leading-tight">
            India's Leading <br />
            Solar Solutions Provider
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-8">
            Ashnora Solar Solution is a leading solar energy company in India,
            specializing in integrated solar solutions and turnkey
            services. Founded in 2018 by Mr. Ankit Garg, an IIT/ISM
            Dhanbad alumnus, the company is headquartered in Ahmedabad,
            Gujarat.
          </p>

          <p className="text-gray-600 text-base md:text-lg leading-8 mt-4">
            Ashnora Solar Solution is driven by a dynamic and entrepreneurial team,
            combining diverse expertise and hands-on experience in the
            renewable energy sector to deliver the highest quality and
            customized solar solutions to clients across India.
          </p>

          <Link
            to="/about-us"
            className="inline-block mt-8 px-8 py-3 border-2 border-[#00539B] text-[#00539B] font-semibold rounded-xl hover:bg-[#00539B] hover:text-white transition-all duration-300"
          >
            About Us
          </Link>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/intro.png"
            alt="Solar Solutions"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default CompanyIntro;