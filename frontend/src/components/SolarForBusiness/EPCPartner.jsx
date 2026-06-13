const EPCPartner = () => {
  const epcServices = [
    {
      icon: "/images/Engineering.png",
      title: "Engineering",
      description:
        "Skillful design and optimization tailored to customer requirements in a complete turnkey solar system.",
    },
    {
      icon: "/images/Procurement.png",
      title: "Procurement",
      description:
        "Selection and delivery of high-quality, integrated solar components from trusted suppliers.",
    },
    {
      icon: "/images/Construction.png",
      title: "Construction",
      description:
        "Detailed planning, project management, execution, and quality construction services.",
    },
    {
      icon: "/images/Project-Development.png",
      title: "Project Development",
      description:
        "Cost-benefit analysis, site assessment, planning, regulatory approvals, and project feasibility.",
    },
    {
      icon: "/images/Project-Realization.png",
      title: "Project Realization",
      description:
        "Design optimization, component selection, execution planning, and successful project handover.",
    },
    {
      icon: "/images/Project-Operations.png",
      title: "Project Operations",
      description:
        "Asset management, maintenance, monitoring, reporting, and long-term system performance support.",
    },
  ];

  return (
    <section className="bg-[#f5f5f5] py-20">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[36px] md:text-[50px] lg:text-[60px] text-[#00539B] leading-tight">
            Your Reliable Solar{" "}
            <span className="font-bold">EPC Partner</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {epcServices.map((item, index) => (
            <div
              key={index}
              className="text-center group"
            >
              {/* Icon */}
              <div className="flex justify-center">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-24 h-24 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Title */}
              <h3 className="mt-6 text-[32px] text-[#00539B] font-medium">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-gray-600 text-lg leading-9 max-w-[380px] mx-auto">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EPCPartner;