import { Link } from "react-router-dom";

const SolarSolutions = () => {
  const services = [
    {
      title: "Solar For Home",
      image: "/images/solarforhome.png",
      description:
        "Tailored solar installations for homes and apartments, ensuring energy efficiency and significant savings on electricity bills.",
      path: "/solar-for-home",
    },
    {
      title: "Solar For Business (C&I)",
      image: "/images/Top-Panel.png",
      description:
        "Custom solar systems for businesses, industries, and non-profit organizations reducing energy costs and promoting sustainability.",
      path: "/solar-for-business",
    },
    {
      title: "Government Projects",
      image: "/images/Ground-Mounted.png",
      description:
        "Ground Mount and Rooftop solar installations for public infrastructure, contributing to national energy goals.",
      path: "/contact-us",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl text-blue-900">
            Complete <span className="font-bold">Solar Solution</span>
          </h2>

          <div className="w-24 h-1 bg-orange-600 mx-auto mt-4 rounded"></div>

          <p className="max-w-3xl mt-6 mx-auto text-gray-600 text-base md:text-lg leading-7">
            Offering Solar Panel Installations with end-to-end services,
            from system design to ongoing customer support. Our turnkey
            projects ensure a seamless experience for residential,
            commercial, and government clients.
          </p>
        </div>

      
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {services.map((service, index) => (
    <div
      key={index}
      className="text-center group"
    >
      <div className="overflow-hidden rounded-lg">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      
      <div className="pt-6">
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-700 mb-5">
          {service.title}
        </h3>

        <p className="text-gray-600 leading-9 text-lg mb-8">
          {service.description}
        </p>

        <Link to={service.path} className="inline-block px-10 py-3 border-2 border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300">
          Learn More
        </Link>
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
};

export default SolarSolutions;
