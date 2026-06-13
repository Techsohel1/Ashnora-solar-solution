const TransformingPotential = () => {
  return (
    <section className="bg-[#f3f3f3] py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-[52%_48%] gap-10 items-center">

          {/* Left Image */}
          <div>
            <img
              src="/images/Commercial-Solar.png"
              alt="Solar Project"
              className="w-full rounded-2xl object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-[32px] md:text-[52px] lg:text-[60px] leading-tight text-[#00539B]">
              Transforming Potential into <span className="font-bold"> Profit</span>
            </h2>

            <div className="w-36 h-1 bg-orange-500 rounded-full mt-3"></div>

            <p className="mt-6 text-gray-700 text-lg leading-10">
              We’re more than just a solar provider—we’re your Turnkey Solar
              Solution partner in transforming your business’s energy
              landscape. From planning and design to seamless installation,
              grid connection, and ongoing maintenance, we handle every step
              of your solar journey.
            </p>

            <p className="mt-4 text-gray-700 text-lg leading-10">
              Our expert team is dedicated to delivering cost-effective,
              high-performance photovoltaic solutions that maximize your
              energy savings. With precision construction, flawless operation,
              and continuous support, we ensure your solar power plant runs at
              its peak year after year.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mt-14">
              <div className="text-center">
                <h3 className="text-5xl lg:text-6xl font-bold text-[#00539B]">
                  30MW+
                </h3>

                <p className="mt-2 text-gray-700 text-xl">
                  Ground Mount Commissioned
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-5xl lg:text-6xl font-bold text-[#00539B]">
                  35MW+
                </h3>

                <p className="mt-2 text-gray-700 text-xl">
                  Rooftop Projects Commissioned
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default TransformingPotential;