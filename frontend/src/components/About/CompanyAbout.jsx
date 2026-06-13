import { Link } from "react-router-dom";

const CompanyAbout = () => {
  return (
    <section className="bg-[#f8fafc] py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 text-sm font-semibold tracking-wider uppercase bg-orange-100 text-orange-600 rounded-full mb-6">
              About Ashnora Solar Solution
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00539B] leading-tight">
              India's Leading Provider of
              <span className="block text-orange-500">
                Ashnora Solar Solution
              </span>
            </h2>

            <p className="mt-8 text-gray-600 text-sm md:text-base leading-7">
              Ashnora Solar Solution is a leading solar energy company in India,
              specializing in integrated solar solutions and turnkey
              services. Founded in 2018, the company has established
              itself as a trusted partner for residential, commercial,
              and industrial solar projects across the country.
            </p>

            <p className="mt-4 text-gray-600 text-sm md:text-base leading-7">
              Driven by a dynamic and entrepreneurial team, Ashnora Solar Solution
              combines technical expertise with years of hands-on
              experience in renewable energy to deliver high-quality,
              customized, and cost-effective solar solutions.
            </p>

           <p className="mt-4 text-gray-600 text-sm md:text-base leading-7">
              Our mission is to empower businesses and homeowners with
              reliable, sustainable, and affordable clean energy
              solutions. By reducing electricity costs and carbon
              emissions, we help create a greener future for
              generations to come.
            </p>

            <p className="mt-4 text-gray-600 text-sm md:text-base leading-7">
              With a customer-first approach and commitment to
              innovation, Ashnora Solar Solution continues to lead the transition
              towards energy independence and sustainable growth.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">

              <Link
                to="/contact-us"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Contact Us
              </Link>

              <Link
                to="/blogs"
                className="border-2 border-[#00539B] text-[#00539B] hover:bg-[#00539B] hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"
              >
                View Blogs
              </Link>

            </div>
          </div>

          {/* Image */}
          <div className="relative">

            <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-100 rounded-full blur-3xl opacity-70"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-70"></div>

            <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=80"
                  alt="Solar Energy"
                  className="relative w-full h-[400px] md:h-[550px] lg:h-[620px] object-cover rounded-3xl shadow-2xl"
                />

            
          </div>

        </div>

      </div>
    </section>
  );
};

export default CompanyAbout;