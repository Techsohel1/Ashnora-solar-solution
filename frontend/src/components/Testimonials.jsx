import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mr. Shyamal Chatterjee",
      company: "Galaxy Solar Energy Pvt. Ltd",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      review:
        "Galaxy Solar is purchasing Ashnora Solar Solution Modules since 2018 and we are glad to have Ashnora Solar Solution as our Module Supply Partner.",
    },
    {
      name: "Mr. Ruchir Darji",
      company: "Residential Solar",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
      review:
        "Ashnora Solar Solution has installed solar system at my home. I am highly satisfied with their services and product quality.",
    },
    {
      name: "Mr. Madhup Benawat",
      company: "Future Stone",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      review:
        "With 238 KW Solar System installed by Ashnora Solar Solution, our vision to go green has become reality.",
    },
    {
      name: "Mr. Rahul Sharma",
      company: "Business Owner",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
      review:
        "Professional team, timely execution and excellent after-sales support.",
    },
  ];

  return (
    <section className="bg-[#F7F8FA] py-20">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl text-[#00539B]">
            What Our <span className="font-bold">Customers</span> Say
          </h2>

          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonial-slider"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className="h-auto">
              <div className="bg-white rounded-2xl shadow-md p-8 text-center h-[420px] flex flex-col hover:shadow-xl transition-all duration-300">

                {/* Image */}
                <div className="flex justify-center mb-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-orange-100"
                  />
                </div>

                {/* Review */}
                <p className="text-gray-600 leading-7 flex-grow">
                  "{item.review}"
                </p>

                {/* Rating */}
                <div className="text-orange-500 text-xl my-5">
                  ★★★★★
                </div>

                {/* Name */}
                <h3 className="font-bold text-xl text-[#00539B]">
                  {item.name}
                </h3>

                {/* Company */}
                <p className="text-gray-500 mt-2">
                  {item.company}
                </p>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Testimonials;