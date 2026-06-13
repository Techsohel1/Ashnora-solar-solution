const OurBlog = () => {
  return (
    <section className="bg-[#f3f5f7] py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Top Badge */}
        <div className="flex justify-center">
          <span className="px-8 py-3 border border-orange-300 rounded-full text-sm md:text-base font-semibold tracking-[3px] uppercase text-orange-500 bg-white">
            Insights & News
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mt-10">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="text-[#00539B]">Our</span>{" "}
            <span className="text-orange-500">Solar</span>{" "}
            <span className="text-[#00539B]">Blog</span>
          </h2>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mt-10">
          <p className="text-center text-[#00539B] text-lg md:text-2xl leading-9 md:leading-11 font-normal">
            Stay updated with the latest trends, expert tips, and
            breakthrough news in the world of solar energy and
            sustainable living.
          </p>
        </div>

      </div>
    </section>
  );
};

export default OurBlog;