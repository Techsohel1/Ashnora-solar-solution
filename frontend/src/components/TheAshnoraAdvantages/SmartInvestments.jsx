
const SmartInvestments = () => {
  const investments = [
    {
      image: "/images/Web01.jpg",
    },
    {
      image: "/images/Web2.jpg",
    },
    {
      image: "/images/Web03.jpg",
    },
    {
      image: "/images/Web4.jpg",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl text-blue-900">
            A <span className="font-bold">Smart Investment</span> for{" "}
            <span className="font-bold">The Future</span>
          </h2>

          <div className="w-24 h-1 bg-orange-600 mx-auto mt-4 rounded"></div>

          <p className="max-w-5xl mt-6 mx-auto text-gray-600 text-base md:text-lg leading-8">
            Solar is a long-term commitment that delivers consistent returns.
            By adopting solar, you’re not only reducing energy costs but also
            unlocking a future-proof strategy that enhances the value of your
            investments.
          </p>

          <h3 className="text-gray-600 italic font-semibold mt-4">
            Make your investment work smarter, today and tomorrow.
          </h3>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {investments.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={item.image}
                alt={`Investment ${index + 1}`}
                className="w-full h-80 object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default SmartInvestments;
