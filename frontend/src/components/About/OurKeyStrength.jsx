
const OurKeyStrength = () => {
  const strengths = [
    {
      title: "Quality",
      image: "/images/Premium-Quality.png",
      description:
        "Our premium PV modules are the result of our industry-leading technical expertise. We feature cutting-edge solar cell technologies and maintain state-of-the-art R&D capabilities.",
    },
    {
      title: "Bankability",
      image: "/images/Bankability.png",
      description:
        "Our products and services have the capability to satisfy every deliverable, making them bankable and fundamentally a choice that you can confidently trust. We are the best choice for investors.",
    },
    {
      title: "Technology",
      image: "/images/Technology.png",
      description:
        "We don’t maximize, We OPTIMIZE. To remain a leading solar company, we constantly explore new methods and technologies. We continue to strive for the next innovation.",
    },
    {
      title: "Scalability",
      image: "/images/Scalability.png",
      description:
        "From PV Modules to Utility Plants, Ashnora Solar Solution offers a seamless end-to-end experience, where at each point of the complex process, customers can rely on our specialization.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">


        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl text-blue-900">
            Our <span className="font-bold">Key Strength</span>
          </h2>

          <div className="w-24 h-1 bg-orange-600 mx-auto mt-4 rounded"></div>

          <p className="max-w-5xl mt-6 mx-auto text-gray-600 text-base md:text-lg leading-8">
            The stewardship of Existence and Growth at Ashnora Solar Solution are marked
            through the compelling need for Innovation, Perfection,
            Truthfulness and being Good Corporate Citizens. Our values
            etch the fundamental beliefs and guiding principles that lay
            the foundation on which we perform work and conduct ourselves.
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

export default OurKeyStrength;

