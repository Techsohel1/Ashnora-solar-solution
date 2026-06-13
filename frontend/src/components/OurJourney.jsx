const OurJourney = () => {
  const stats = [
    {
      number: "65MW+",
      title: "Residential Projects Commissioned",
    },
    {
      number: "35MW+",
      title: "Rooftop Projects Commissioned",
    },
    {
      number: "30MW+",
      title: "Ground Mount Commissioned",
    },
    {
      number: "200MW+",
      title: "Solar Modules Installed",
    },
    {
      number: "400+",
      title: "Channel Partners",
    },
    {
      number: "20,000+",
      title: "Residential Homes Solarized",
    },
    {
      number: "65+",
      title: "Presence in Cities",
    },
    {
      number: "450+",
      title: "Team Strength",
    },
  ];

  return (
    <section className="bg-[#F4F4F4] py-16 md:py-20 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[34px] md:text-[48px] lg:text-[58px] text-[#00539B] leading-tight">
            Our{" "}
            <span className="font-bold relative inline-block">
              Journey

              <svg
                className="absolute -bottom-4 left-0 w-full"
                viewBox="0 0 250 35"
                fill="none"
              >
                <path
                  d="M10 25C70 5 180 5 240 25"
                  stroke="#ff6b00"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-8">

          {stats.map((item, index) => (
            <div key={index} className="text-center">

              <h3 className="text-[42px] md:text-[56px] font-bold text-[#00539B] leading-none">
                {item.number}
              </h3>

              <p className="mt-3 text-gray-700 text-lg md:text-xl leading-8">
                {item.title}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default OurJourney;