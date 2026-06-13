const AshnoraGuiding = () => {
  const principles = [
    {
      title: "Peace of Mind",
      image: "/images/Peace-of-Minds.png",
      description:
        "Having a competent and reliable service team ensures your investment is protected. Our efficient installation and integration process gives customers complete peace of mind throughout their solar journey.",
    },
    {
      title: "Customer First",
      image: "/images/Customer-First.png",
      description:
        "At the heart of everything we do is our commitment to putting customers first. We carefully listen to every requirement and deliver the most suitable solar solution tailored to their needs.",
    },
    {
      title: "Do What We Say",
      image: "/images/Do-What-We-Say.png",
      description:
        "We stand behind every promise we make. From premium-quality products to dependable service support, our commitment to excellence ensures customers receive lasting value and confidence.",
    },
  ];

  return (
    <section className="bg-[#f8fafc] py-16 md:py-20 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#00539B]">
            Ashnora Solar Solution's{" "}
            <span className="font-bold">Guiding Principles</span>
          </h2>

          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>

          <p className="mt-6 text-gray-600 text-sm md:text-base lg:text-lg leading-8">
            Our Guiding Principles illuminate our path towards excellence
            in solar energy. By adhering to these principles, we ensure
            transparent, reliable, and measurable solutions that help
            businesses and homeowners embrace a sustainable future with
            confidence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {principles.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
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
              <p className="text-center text-gray-600 leading-8 text-sm md:text-base flex-grow">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default AshnoraGuiding;