
const WhyGoSolar= () => {
  const qualities = [
    {
      title: "Make Money From Sun",
      image: "/images/Make-Money-from-Suns.png",
      description:
        "Ashnora Solar Solution helps you save up to 90% on electricity bills and make money by selling excess solar units back to the grid.",
    },
    {
      title: "Attractive Solar Subsidy",
      image: "/images/Attractive-Subsidy-from-Goverment.png",
      description:
        "Avail up to ₹78,000 solar subsidy by Central Government on installing a solar panel for home. *Some States also provide additional solar subsidy",
    },
    {
      title: "Reliability and Low Maintenance",
      image: "/images/Reliability-and-Low-Maintenance.png",
      description:
        "Solar system incurs Minimal Operation & Maintenance (O&M) expenses and assures complete peace of mind.",
    },
    {
      title: "Environmental Responsibility",
      image: "/images/Environmental-Responsibilty.png",
      description:
        "1kW of Solar System is equivalent to planting 154+ trees and prevents 30+ tons of CO2 emission within 25 years.",
    },
    {
      title: "Best Investment for your Home",
      image: "/images/Best-Investment-for-your-Home.png",
      description:
        "With a payback period within 3-4 years, the returns for solar panel for home are more than 20% and assured for 25 years.",
    },
    {
      title: "Protection against rising Utility Costs",
      image: "/images/Protection-against-rising-electricity-costs.png",
      description:
        "Lock your electricity cost for the next 25 years and gain energy independence. ",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl text-blue-900">
            Why <span className="font-bold">Go</span>{" "}
            <span className="font-bold">Solar?</span>
          </h2>

          <div className="w-24 h-1 bg-orange-600 mx-auto mt-4 rounded"></div>

          <p className="max-w-5xl mt-6 mx-auto text-gray-600 text-base md:text-lg leading-8">
            Solar systems help you reduce your electricity bills and become more energy independent.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {qualities.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-contain mx-auto mb-5"
              />

              <h3 className="text-xl font-bold text-blue-900 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyGoSolar;

