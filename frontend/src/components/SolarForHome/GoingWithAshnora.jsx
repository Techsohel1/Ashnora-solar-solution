const GoingWithAshnora = () => {
  const features = [
    {
      image: "images/Trusted-Brand.png",
      title: "Brand You Can Trust",
      desc: "Unlock clean energy savings with reliable solar solutions and expert support.",
    },
    {
      image: "images/Customized-Solar-Solutions.png",
      title: "Customized Solar Solutions",
      desc: "Completely tailored solar systems designed specifically for your home.",
    },
    {
      image: "images/Product-Warranty-Service-Support.png",
      title: "Product Warranty & Service Support",
      desc: "Enjoy complete peace of mind with long-term warranty and AMC support.",
    },
  ];

  return (
    <section className="bg-[#f2f2f2] py-16">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-[48%_52%] items-center">
          
          <div className="flex justify-center mb-8 lg:mb-0">
            <img
              src="/images/drivemass.png"
              alt="Ashnora Solar Solution"
              className="w-full max-w-[320px] h-[320px] object-cover rounded-3xl"
            />
          </div>

          <div className="px-6 lg:px-14 py-8">
            <h2 className="text-4xl lg:text-6xl text-[#00539B]">
              Going Solar For Home is easy with Ashnora Solar Solution
            </h2>

            <div className="mt-12 space-y-8">
              {features.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="text-4xl">
                    <img src={item.image} alt="" className="h-20 w-20" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-[#00539B]">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 mt-2">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 mt-12 text-center">
              <div>
                <h3 className="text-5xl font-bold text-[#00539B]">
                  20,000+
                </h3>
                <p>Residential Homes Solarized</p>
              </div>

              <div>
                <h3 className="text-5xl font-bold text-[#00539B]">
                  65+
                </h3>
                <p>Presence in Cities</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default GoingWithAshnora;