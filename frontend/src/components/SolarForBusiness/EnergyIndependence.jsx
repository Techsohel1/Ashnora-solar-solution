import { Link } from "react-router-dom";

const EnergyIndependence = () => {
  return (
    <section className="bg-[#f2f2f2] py-16 lg:py-20">
      <div className="max-w-[1350px] mx-auto px-6">
        <div className="grid lg:grid-cols-[58%_42%] gap-6 lg:gap-10 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-[28px] md:text-[46px] lg:text-[54px] leading-tight text-[#00539B]">
              <span className="font-bold">
                Energy Independence
              </span>{" "}
              <span className="font-normal">
                for your <br />
                Business
              </span>
            </h2>

            <p className="mt-4 text-gray-700 text-lg leading-9 max-w-[90%]">
              Switch to solar and take control of your business’s energy future.
              Solar for Business isn’t just about cutting costs—it’s about
              building a more sustainable, independent, and profitable
              enterprise. By utilizing your unused space, such as rooftops or
              land, you can significantly reduce energy bills while lowering
              your carbon footprint.
            </p>

            <p className="mt-3 text-gray-700 text-lg leading-9 max-w-[90%]">
              At Ashnora Solar Solution, we specialize in advanced solar solutions tailored
              for businesses of all sizes—from industrial facilities to local
              institutions. Our state-of-the-art technology maximizes savings,
              drives sustainability, and accelerates your journey toward energy
              independence.
            </p>

            <p className="mt-4 text-gray-700 text-lg leading-9">
              Make the smart, green choice today with us.
            </p>

            <Link
                to="/contact-us"
                className="inline-block mt-8 bg-[#ff6b00] hover:bg-orange-600 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Contact Us
              </Link>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/images/webiup.png"
              alt="Energy Independence"
              className="w-full max-w-[520px] rounded-xl object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default EnergyIndependence;