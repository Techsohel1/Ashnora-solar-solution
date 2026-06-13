const OneStop = () => {
  const features = [
    {
      image: "/images/IITian-Engineers.png",
      title: "Engineered and Customized by IITians",
    },
    {
      image: "/images/Directly-from-Manufacturer.png",
      title: "Directly from the Manufacturer",
    },
    {
      image: "/images/Peace-of-Minds.png",
      title: "Complete Peace of Mind",
    },
    {
      image: "/images/Premium-Quality.png",
      title: "Best Quality System",
    },
    {
      image: "/images/Easy-Financing-Solution.png",
      title: "Easy Financing Solutions",
    },
    {
      image: "/images/Local-Expertise.png",
      title: "Local Expertise, Backed by a Global Brand",
    },
  ];

  return (
    <section className="bg-[#f5f5f5] py-20">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-[#00539B]">
            <span className="font-bold">One-Stop Solar Solution</span>{" "}
            <span className="font-normal">For Your Home</span>
          </h2>

          <p className="max-w-5xl mx-auto mt-4 text-gray-700 md:text-xl leading-10">
            Ashnora Solar Solution offers complete end-to-end solar solutions for homes,
            from planning and design to project construction and connection
            to the grid, as well as maintenance and care of the solar system.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 mt-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-6"
            >
              {/* Icon/Image */}
              <div className="w-20 h-20 shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text */}
              <p className="text-lg md:text-2xl text-gray-700 leading-relaxed">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OneStop;