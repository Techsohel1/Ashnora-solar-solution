
const WhyGoSolarBusiness = () => {
  const strengths = [
    {
      title: "Make Money From Sun",
      image: "/images/Make-Money-from-Suns.png",
      description:
        "Solar power is much cheaper than grid electricity. While electricity prices continue to rise, your solar system is always working at the same cost. This simply means that your savings in operating costs and the payback on your system increase year after year.",
    },
    {
      title: "Environmental Responsibility",
      image: "/images/Environmental-Responsibilty.png",
      description:
        "With your own solar panels, you can generate renewable energy, reduce harmful CO2 emissions, and help protect the environment for future generations. It’s your business, but it’s also your chance to make a positive impact.",
    },
    {
      title: "Energy Independence",
      image: "/images/Energy-Independence.png",
      description:
        "As fossil fuel stocks deplete, the costs of grid-based electricity will continue to rise. With a custom-designed solar for business, your business can break free from rising energy costs and secure a stable, long-term energy source—independently and affordably. ",
    },
    {
      title: "It Makes Perfect Business Sense",
      image: "/images/Business-Sense.png",
      description:
        "With incentives by the government, your rooftop solar system or ground mount solar system could pay back for itself in as little as 4-5 years. With long-lasting systems that perform for 25-40 years, you’ll enjoy decades of free energy, making your investment a smart, sustainable choice that continues to pay off year after year.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">


        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl text-blue-900">
            Why <span className="font-bold"> Go Solar</span>
          </h2>

          <div className="w-24 h-1 bg-orange-600 mx-auto mt-4 rounded"></div>

          <p className="max-w-5xl mt-6 mx-auto text-gray-600 text-base md:text-lg leading-8">
            Installing solar is a great way to take your business one more step towards sustainability and Net Zeo. Solar energy not only makes you more energy-independent but also decreases the operational costs of your business.
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {strengths.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5"
            >
            
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain shrink-0"
              />

              
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyGoSolarBusiness;

