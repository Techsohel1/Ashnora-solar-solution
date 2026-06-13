import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const FeaturedBlog = () => {
  const [showStoryModal, setShowStoryModal] = useState(false);

  const featuredPost = {
    title: "Why After-Sales Service Matters More Than Installation",
    date: "11 June 2026",
    readTime: "5 Min Read",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276",
    description: "Most solar companies focus aggressively on selling. The real value begins after installation through maintenance, monitoring, warranty support and long-term performance optimization.",
    content: `When transitioning to solar energy, most home and business owners focus heavily on the upfront details: the brand of solar panels, the cost of the inverter, and the timeline for installation. While these are important, the installation itself is only the beginning of a 25-year journey.

At Ashnora Solar Solution, we believe that after-sales service is where the true value lies. Here is why:

1. Performance Optimization: Over time, dust, debris, and seasonal changes can affect panel output. Periodic maintenance checks ensure panels operate at peak efficiency.
2. Direct Warranty Support: With components guaranteed for up to 25 years, having a reliable service partner ensures that any hardware issues are resolved directly without hassle.
3. Real-time Monitoring: Quick resolution of generation drops or system errors prevents unexpected electricity bill spikes.
4. Total Peace of Mind: A dedicated support line means you are never left alone if questions or concerns arise about your system.

Choosing a partner who prioritizes service is the smartest investment you can make for your solar transition.`
  };

  return (
    <section className="bg-[#f5f7fa] py-20">
      <div className="max-w-[1400px] mx-auto px-6">

        <div className="bg-white rounded-[40px] shadow-lg p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Image */}
            <div className="relative">
              <span className="absolute top-5 left-5 bg-orange-500 text-white text-sm px-4 py-2 rounded-full font-medium">
                Featured Post
              </span>

              <img
                src={featuredPost.image}
                alt="Solar Blog"
                className="w-full h-[450px] object-cover rounded-3xl"
              />
            </div>

            {/* Content */}
            <div>

              <div className="flex items-center gap-4 text-sm text-gray-500 mb-5">
                <span>{featuredPost.date}</span>
                <span>•</span>
                <span>{featuredPost.readTime}</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-[#00539B] leading-tight">
                {featuredPost.title}
              </h2>

              <p className="mt-6 text-gray-600 text-lg leading-8">
                {featuredPost.description}
              </p>

              <button 
                onClick={() => setShowStoryModal(true)}
                className="mt-8 bg-[#00539B] hover:bg-[#003d73] text-white px-8 py-4 rounded-xl font-medium transition cursor-pointer"
              >
                Read Full Story →
              </button>

            </div>

          </div>
        </div>

      </div>

      {/* STORY MODAL */}
      {showStoryModal && (
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={() => setShowStoryModal(false)}
        >
          <div 
            className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close */}
            <button
              onClick={() => setShowStoryModal(false)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-500 hover:text-white transition-all duration-300 z-10 cursor-pointer"
            >
              <FaTimes size={18} />
            </button>

            {/* Header Image & Title */}
            <div className="relative h-60 md:h-72 shrink-0">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/45 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-16 text-white">
                <span className="bg-orange-500 text-xs px-3 py-1 rounded-full font-medium mb-3 inline-block">Featured Story</span>
                <p className="text-xs text-gray-300 mb-1">{featuredPost.date} • {featuredPost.readTime}</p>
                <h3 className="text-xl md:text-3xl font-bold leading-tight">{featuredPost.title}</h3>
              </div>
            </div>

            {/* Story Content */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-gray-700 leading-8 text-base md:text-lg">
              <p className="font-semibold text-[#00539B]">
                {featuredPost.description}
              </p>
              <div className="whitespace-pre-line border-t border-gray-100 pt-6">
                {featuredPost.content}
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-6 py-4 flex justify-end border-t border-gray-100 shrink-0">
              <button
                onClick={() => setShowStoryModal(false)}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition cursor-pointer"
              >
                Close Story
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedBlog;