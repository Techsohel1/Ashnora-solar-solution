const ElectricityBill = () => {
  return (
    <section className="bg-[#f3f3f3] py-16 md:py-20 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[24px] md:text-[52px] lg:text-[64px] leading-relaxed text-[#00539B]">
            Ready to cut down on your{" "}
            <span className="font-bold relative inline-block">
              Electricity Bills ?

              <svg
                className="absolute -bottom-3 left-0 w-full"
                viewBox="0 0 320 40"
                fill="none"
              >
                <path
                  d="M10 25C80 5 240 5 310 25"
                  stroke="#ff7300"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
        </div>

        {/* Content */}
        <div className="mt-6 text-center max-w-[1200px] mx-auto">
          <p className="text-gray-700 text-lg md:text-xl leading-9">
            Now’s the perfect time to go solar! We make the journey to solar
            effortless—from design to installation, monitoring to financing,
            we handle it all.
          </p>

          <p className="mt-4 text-gray-700 md:text-xl leading-9">
            Contact us now to get a FREE solar consultation from our solar
            experts and understand how you can unlock significant savings and
            sustainable energy.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ElectricityBill;