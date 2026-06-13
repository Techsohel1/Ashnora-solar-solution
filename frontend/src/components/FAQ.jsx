import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How much can I save with solar energy?",
      answer:
        "Solar energy can reduce electricity bills by up to 70-90% depending on your energy consumption and system size.",
    },
    {
      question: "How long does a solar installation take?",
      answer:
        "Most residential projects are completed within 7-15 days after site survey and approval.",
    },
    {
      question: "What maintenance is required?",
      answer:
        "Solar systems require minimal maintenance. Regular cleaning and annual inspections are generally sufficient.",
    },
    {
      question: "Do you provide warranty support?",
      answer:
        "Yes, we provide product and installation warranties along with dedicated customer support.",
    },
    {
      question: "Is solar suitable for businesses?",
      answer:
        "Absolutely. Commercial solar installations significantly reduce operational costs and improve sustainability.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F7F8FA] py-14 md:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 md:px-6">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-light text-gray-800">
            Frequently Asked
            <span className="font-bold text-[#00539B]">
              {" "}Questions
            </span>
          </h2>

          <div className="w-20 md:w-24 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>

          <p className="mt-6 text-gray-600 text-sm md:text-base">
            Find answers to common questions about solar energy,
            installation, maintenance and support.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 md:p-6 text-left"
              >
                <span className="font-semibold text-base md:text-lg text-gray-800 pr-4">
                  {faq.question}
                </span>

                <div className="shrink-0 text-[#00539B]">
                  {openIndex === index ? (
                    <FaMinus size={16} />
                  ) : (
                    <FaPlus size={16} />
                  )}
                </div>
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 md:px-6 pb-5 md:pb-6 text-gray-600 text-sm md:text-base leading-7">
                  {faq.answer}
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FAQ;