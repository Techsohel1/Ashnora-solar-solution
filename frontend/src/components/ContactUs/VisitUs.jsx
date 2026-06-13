

const VisitUs = () => {
  return (
    <section className="bg-[#f3f3f3] py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#00539B]">
            Visit Us
          </h2>
        </div>

        <div className="grid lg:grid-cols-[55%_45%] gap-8 items-stretch">

          {/* Left Side - Google Map */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg h-full min-h-[450px]">
            <iframe
              title="Ashnora Solar Solution Location"
              src="https://maps.google.com/maps?q=117/118%20Karma%20Patel%20Marg%20Sector%2072%20Agarwal%20Farm%20Sector%209%20Mansarovar%20Jaipur%20Rajasthan%20302020&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              className="w-full h-full min-h-[450px]"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            />
          </div>

          {/* Right Side */}
         <div className="bg-white flex flex-col items-center rounded-3xl shadow-lg border border-gray-100 p-8 h-full hover:shadow-2xl transition-all duration-300">

                    {/* Icon */}
                    <div className="mb-4">
                        <img
                        src="/images/Registered-Office.png"
                        alt="Registered Office"
                        className="w-24 h-24 object-contain"
                        />
                    </div>

                    {/* Content */}
                    <div>
                        <h3 className="text-2xl lg:text-3xl font-semibold text-[#00539B] mb-5">
                        Registered Office
                        </h3>

                        <p className="text-gray-600 text-lg leading-9">
                        117/118, Karma Patel Marg,
                        <br />
                        Sector 72, Agarwal Farm,
                        <br />
                        Sector 9, Mansarovar,
                        <br />
                        Jaipur, Rajasthan 302020
                        </p>

                        {/* Google Maps Button */}
                        <a
                        href="https://maps.google.com/?q=117/118+Karma+Patel+Marg+Sector+72+Agarwal+Farm+Sector+9+Mansarovar+Jaipur+Rajasthan+302020"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-8 px-6 py-3 bg-[#00539B] text-white rounded-xl font-medium hover:bg-[#003f76] transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                        Get Directions
                        </a>
                    </div>

                    </div>

        </div>
      </div>
    </section>
  );
};

export default VisitUs;