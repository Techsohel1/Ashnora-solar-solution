
import { Link } from "react-router-dom";

const WhyPartner = () => {
  return (
    <section className="bg-[#F5F5F5] py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          
          <div>

            <h2 className="text-2xl md:text-5xl leading-tight text-[#00539B]">
              Why Partner with{" "}
              <span className="font-bold">
                Ashnora Solar Solution
              </span>
              ?
            </h2>

            <p className="mt-4 text-gray-700 leading-10">
              Solar energy is clean and abundant—but navigating the path
              to using it in the right way can be overwhelming. That’s
              where Ashnora Solar Solution comes in. We provide expert guidance and
              customized solutions to ensure you find the perfect solar
              fit for your unique energy needs and budget.
            </p>

            <p className="mt-2 text-gray-700 leading-10">
              As a pioneer in India’s solar energy revolution, Ashnora Solar Solution is
              transforming how you access renewable energy. We offer
              complete solar solutions, from selecting the highest-quality
              products to implementing cutting-edge rooftop and
              utility-scale systems as per requirements.
            </p>

            <Link
                to="/contact-us"
                className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Contact Us
              </Link>

          </div>

         
          <div>
            <img
              src="/images/Innovation-meets.png"
              alt="Why Partner With Ashnora Solar Solution"
              className="w-full rounded-2xl shadow-lg object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyPartner;



