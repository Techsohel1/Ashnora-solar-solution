
const SolarPPA = () => {
  const strengths = [
    {
      title: "No Capital Investment",
      image: "/images/No-Capital-Investment.png",
      description:
        "We will install a world-class rooftop solar power plant at your location for free.",
    },
    {
      title: "Free Maintenance & Monitoring",
      image: "/images/Reliability-and-Low-Maintenance.png",
      description:
        "We will monitor the solar power plant and undertake breakdown maintenance for free.",
    },
    {
      title: "Electricity Cheaper Than Grid",
      image: "/images/Cheap-Electricity-Savings.png",
      description:
        "You will only pay for the electricity that you consume from the power plant at prices less than Utility or DISCOM prices",
    },
    {
      title: "Valuable Green Credentials",
      image: "/images/Valuable-Green-Credentials.png",
      description:
        "Your business or residence can flaunt its Green and Low Carbon credentials and gain valuable accreditation.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">


        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl text-blue-900">
        <span className="font-bold">Solar PPA</span> (Power Purchase Agreement)
          </h2>

          <div className="w-24 h-1 bg-orange-600 mx-auto mt-4 rounded"></div>

          <p className="max-w-5xl mt-6 mx-auto text-gray-600 text-base md:text-lg leading-8">
            PPA means building partnerships: Sharing our global expertise, offering our project development capabilities, and supplying your business with reliable, tailor-made, and cost-competitive renewable solutions. PPAs enable our clients to purchase renewable energy on a long-term basis, benefiting from a long-term market hedge with no upfront capital.
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {strengths.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex items-start gap-5"
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

export default SolarPPA;

