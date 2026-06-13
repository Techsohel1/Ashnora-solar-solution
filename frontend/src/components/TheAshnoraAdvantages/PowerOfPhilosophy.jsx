const PowerOfPhilosophy = () => {
  const philosophyData = [
    {
      title: "Simplify",
      image: "/images/Simplify.png",
      description:
        "We believe in offering a straightforward explanation of how solar works and what is involved in its installation.",
    },
    {
      title: "Clarify",
      image: "/images/Clarify.png",
      description:
        "We carefully evaluate all factors involved to identify the most viable, efficient, and profitable solar solution for your specific requirements.",
    },
    {
      title: "Quantify",
      image: "/images/Quantify.png",
      description:
        "We support every recommendation with real numbers, helping you clearly understand your investment, savings, and long-term profitability.",
    },
  ];

  return (
    <section className="bg-[#f8fafc] py-16 md:py-20 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#00539B]">
            <span className="font-bold">Power Of Three</span> Philosophy
          </h2>

          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>

          <p className="mt-6 text-gray-600 text-sm md:text-base lg:text-lg leading-8">
            Our Power of Three Philosophy helps simplify, clarify, and
            quantify the process of harnessing solar energy, making your
            transition to clean energy seamless and transparent.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {philosophyData.map((item, index) => (
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

export default PowerOfPhilosophy;