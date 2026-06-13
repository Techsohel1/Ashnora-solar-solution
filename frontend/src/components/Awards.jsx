const Awards = () => {
  const awards = [
    { image: "/images/silindi.png" },
    { image: "/images/toi.png" },
    { image: "/images/indstopsol11.png" },
    { image: "/images/2021-CEO-Insights-LIM-copy.png" },
    { image: "/images/toi_1.png" },
    { image: "/images/2022-Prime-Insights-EOTY-copy.png" },
    { image: "/images/2022-Innovative-Zone-CIF-copy-1.png" },
    { image: "/images/2023-Silicon-India-GES-copy.png" },
  ];

  return (
    <section className="bg-gray-100 py-16 md:py-24 overflow-hidden relative">

    
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="w-[140%] h-[500px] bg-white/40 rounded-[50%] absolute -top-64 left-1/2 -translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">

        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
            Awards & <span className="font-medium">Accreditations</span>
          </h2>
        </div>

     
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-10">

          {awards.map((award, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
            >
              <img
                src={award.image}
                alt={`Award ${index + 1}`}
                className="max-h-32 w-auto object-contain hover:scale-105 transition duration-300"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Awards;