
const UnmatchedQuality = () => {
  const qualities = [
    {
      title: "Stringent Quality Checks",
      image: "/images/Quality-checks.png",
      description:
        "Several levels of QA processes provide you with peace of mind and guaranteed results.",
    },
    {
      title: "Future Ready",
      image: "/images/Future-Ready.png",
      description:
        "Our R&D Team is always ready with solutions for today and innovations for tomorrow.",
    },
    {
      title: "Dedicated Support",
      image: "/images/Dedicated-Support.png",
      description:
        "Anytime, any day, we are always there for you to provide complete peace of mind.",
    },
    {
      title: "Building Intellectual Property",
      image: "/images/Building-Intellectual-Property.png",
      description:
        "We take tremendous pride in our innovations – not only in terms of new products but also in services.",
    },
    {
      title: "Strong Presence",
      image: "/images/String-Presence.png",
      description:
        "A strong nationwide presence ensures timely support and reliable service delivery.",
    },
    {
      title: "Safety",
      image: "/images/Safety.png",
      description:
        "Strict adherence to all relevant safety guidelines and employment of experienced personnel.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl text-blue-900">
            Unmatched <span className="font-bold">Quality</span> and{" "}
            <span className="font-bold">Innovation</span>
          </h2>

          <div className="w-24 h-1 bg-orange-600 mx-auto mt-4 rounded"></div>

          <p className="max-w-5xl mt-6 mx-auto text-gray-600 text-base md:text-lg leading-8">
            We don’t just offer solar solutions; we redefine them. We
            provide a complete range of premium products—from
            high-performance solar modules to durable structures—all
            designed to deliver unmatched efficiency and reliability.
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

export default UnmatchedQuality;
