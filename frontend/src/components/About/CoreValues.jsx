const CoreValues = () => {
  const values = [
    {
      title: "Vision",
      image: "/images/Vision.png",
      description:
        "To become one of the global leaders in clean and renewable energy, transforming the energy landscape through advanced technology and innovative solutions that deliver sustainable power and improve lives.",
    },
    {
      title: "Mission",
      image: "/images/Mission.png",
      description:
        "We leverage technology and innovation to shape the future of solar energy. Through collaboration, cutting-edge solutions, and social responsibility, we create value for customers, communities, and stakeholders.",
    },
    {
      title: "Quality Policy",
      image: "/images/Quality.png",
      description:
        "We are committed to delivering exceptional value through high-quality products and services. Continuous improvement and customer satisfaction remain at the core of everything we do.",
    },
  ];

  return (
    <section className="bg-[#f8fafc] py-16 md:py-20 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#00539B]">
            Our <span className="font-bold">Core Values</span>
          </h2>

          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>

          <p className="mt-6 text-gray-600 text-sm md:text-base lg:text-lg leading-8">
            At Ashnora Solar Solution, we are driven by a powerful belief: the future
            of energy is clean, sustainable, and in our hands. We are
            not just creating solar solutions — we are helping build a
            better and more sustainable world for generations to come.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {values.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-md border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
            >

              {/* Icon */}
              <div className="flex justify-center">
                <div className="w-24 h-24 flex items-center justify-center transition-all duration-300">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-center text-2xl font-bold text-[#00539B] mt-6 mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-center leading-8 text-sm md:text-base flex-grow">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default CoreValues;