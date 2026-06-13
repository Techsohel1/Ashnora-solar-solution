import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const BlogCards = () => {
  const [blogsList, setBlogsList] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    const loadBlogs = () => {
      const storedBlogs = JSON.parse(localStorage.getItem("ashnora_blogs") || "[]");
      if (storedBlogs.length > 0) {
        setBlogsList(storedBlogs);
      } else {
        const defaultBlogs = [
          {
            id: "blog_1",
            title: "The Truth About Free Solar Government Marketing",
            image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1",
            description: "Learn how solar energy can help reduce electricity costs while creating a sustainable future.",
            date: "11 June 2026",
          },
          {
            id: "blog_2",
            title: "Is Solar Worth It for Small Businesses?",
            image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7",
            description: "Explore the financial advantages and environmental impacts of solar transition for small enterprises.",
            date: "10 June 2026",
          },
          {
            id: "blog_3",
            title: "How Solar Panels Increase Property Value",
            image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d",
            description: "Solar installations not only save on bills but directly boost residential and commercial valuation.",
            date: "09 June 2026",
          },
          {
            id: "blog_4",
            title: "5 Mistakes Before Installing Solar Panels",
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e",
            description: "Avoid these common planning pitfalls to ensure your investment returns maximum power generation.",
            date: "08 June 2026",
          },
          {
            id: "blog_5",
            title: "Rooftop Solar vs Traditional Electricity",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
            description: "A head-to-head comparison of efficiency, costs, reliability, and modern smart grid options.",
            date: "07 June 2026",
          },
          {
            id: "blog_6",
            title: "Why Solar Energy is the Future of Rajasthan",
            image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b",
            description: "Analyzing the policy incentives, geographical positioning, and sunlight distribution of the state.",
            date: "06 June 2026",
          },
        ];
        setBlogsList(defaultBlogs);
        localStorage.setItem("ashnora_blogs", JSON.stringify(defaultBlogs));
      }
    };

    loadBlogs();
    window.addEventListener("storage", loadBlogs);
    return () => window.removeEventListener("storage", loadBlogs);
  }, []);

  const getBlogBodyContent = (blog) => {
    if (blog.id === "blog_1") {
      return `The solar industry has seen a massive surge in advertisements offering "Free Solar" under various government programs. While government incentives like subsidies (PM-Surya Ghar Yojana) exist and significantly reduce installation costs, the concept of getting a complete solar power plant installed for absolutely zero cost is often a misleading marketing angle used by lead generation agencies.

Here is the truth behind these claims:
1. Subsidies are Discounts, Not Freebies: The government offers structured subsidies based on system capacity, but you still need to pay the remaining installation costs.
2. Financing/PPA Models: Some models allow zero upfront payment, where you pay for the power generated monthly (Power Purchase Agreement), but it is not "free".
3. Quality Check: Unusually cheap or free packages might compromise on component quality or warranty support.

Always verify installer credentials and read the fine print before proceeding with any "free solar" offer.`;
    }
    if (blog.id === "blog_2") {
      return `For small and medium enterprises (SMEs), electricity is often one of the largest fixed operational costs. Investing in solar panels might seem like a major upfront capital expense, but the long-term ROI is undeniably strong.

Key financial and operational advantages:
1. Drastic Bills Cut: Commercial rates are usually higher, meaning every unit of solar power offset generates larger savings.
2. Accelerated Depreciation benefits: Businesses can claim depreciation on solar assets faster, leading to direct tax savings.
3. Green Brand Value: Customers today prefer dealing with sustainable, eco-friendly businesses.
4. Fast Payback Period: Most commercial installations pay for themselves in 3 to 4 years, providing free electricity for the remaining 20+ years.`;
    }
    if (blog.id === "blog_3") {
      return `Adding a solar system to your home is not just about monthly energy savings; it is also a powerful long-term investment in your property's equity. Modern homebuyers are looking for energy-efficient homes that promise lower utility bills from day one.

Studies indicate that homes with solar panels sell faster and at a premium of about 3-4% compared to homes without. Homebuyers see ready-to-use rooftop solar systems as a huge upgrade, much like an updated kitchen or newly renovated deck, without the hassle of coordinating installation themselves.`;
    }
    if (blog.id === "blog_4") {
      return `Installing solar is an excellent decision, but a few planning mistakes can lead to lower energy output or higher maintenance costs. Here are 5 mistakes to avoid:
1. Ignoring shading issues: Trees or chimneys blocking sunlight for even a few hours can drop panel efficiency significantly.
2. Choosing low-quality installers: Quality matters. A poor mounting structure can lead to roof leaks or wind damage.
3. Incorrect system sizing: Installing a system that is too small won't cover your bills, while an oversized system wastes capital.
4. Neglecting after-sales service policies.
5. Not checking government compliance and approvals.`;
    }
    return blog.description + `\n\nTransitioning to solar power is a long-term commitment that brings both environmental and financial rewards. Clean energy systems are designed to operate for 25 years or more, providing stable electricity generation. By choosing high-quality solar modules and working with experienced developers, you can ensure that your system achieves optimal performance and maximum savings throughout its lifespan.\n\nAt Ashnora Solar Solution, we are dedicated to providing the technical expertise, customized system design, and reliable service support required to make your transition smooth and highly profitable.`;
  };

  return (
    <section className="bg-[#f5f7fa] pb-24">
      <div className="max-w-[1400px] mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogsList.map((blog) => (
            <div
              key={blog.id || blog.title}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col h-full cursor-pointer"
              onClick={() => setSelectedBlog(blog)}
            >

              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-6 flex flex-col flex-grow justify-between">

                <div>
                  <p className="text-sm text-gray-500 mb-4">
                    {blog.date}
                  </p>

                  <h3 className="text-2xl font-bold text-[#00539B] leading-snug">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 mt-4 leading-7">
                    {blog.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-50 flex justify-between items-center">
                  <button className="text-[#00539B] font-semibold hover:text-orange-500 transition cursor-pointer">
                    Read Post →
                  </button>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* BLOG DETAILS MODAL */}
      {selectedBlog && (
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={() => setSelectedBlog(null)}
        >
          <div 
            className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-500 hover:text-white transition-all duration-300 z-10 cursor-pointer"
            >
              <FaTimes size={18} />
            </button>

            {/* Header Image */}
            <div className="relative h-60 md:h-72 shrink-0">
              <img 
                src={selectedBlog.image} 
                alt={selectedBlog.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/45 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-16 text-white">
                <p className="text-xs text-gray-300 mb-1">{selectedBlog.date}</p>
                <h3 className="text-xl md:text-3xl font-bold leading-tight">{selectedBlog.title}</h3>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-gray-700 leading-8 text-base md:text-lg">
              <p className="font-semibold text-[#00539B]">
                {selectedBlog.description}
              </p>
              <div className="whitespace-pre-line border-t border-gray-100 pt-6">
                {getBlogBodyContent(selectedBlog)}
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-6 py-4 flex justify-end border-t border-gray-100 shrink-0">
              <button
                onClick={() => setSelectedBlog(null)}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition cursor-pointer"
              >
                Close Reader
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default BlogCards;