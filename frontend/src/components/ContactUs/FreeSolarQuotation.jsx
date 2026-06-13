import { useState } from "react";
import { Phone, Mail } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";
import { api } from "../../utils/api";

const FreeSolarQuotation = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleQuotationSubmit = async (e) => {
    e.preventDefault();
    if (!name || !mobile) {
      alert("Name and Mobile Number are required!");
      return;
    }

    const newQuote = {
      name,
      mobile,
      email: email || "N/A",
      address: address || "N/A",
      status: 'New',
    };

    try {
      await api.createQuotation(newQuote);

      // Reset fields
      setName("");
      setMobile("");
      setEmail("");
      setAddress("");
      
      // Show success message
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
      }, 4500);
    } catch (error) {
      alert("Failed to submit quotation request: " + error.message);
    }
  };

  return (
    <section className="bg-[#f3f3f3] py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#00539B]">
            Get a FREE Solar Quotation
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Find out how much you can save on electricity bills with a FREE
            solar consultation from our experts.
          </p>
        </div>

        <div className="grid lg:grid-cols-[68%_32%] gap-8">

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">

            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl flex items-center gap-3 animate-pulse">
                <FaCheckCircle size={22} className="shrink-0" />
                <div>
                  <h4 className="font-bold">Quotation Request Received!</h4>
                  <p className="text-sm">Thank you for choosing Ashnora Solar Solution. Our experts will call you shortly.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleQuotationSubmit} className="space-y-6">

              <div className="grid md:grid-cols-2 gap-5">

                <div>
                  <label className="block text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Your Name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00539B]"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="tel"
                    required
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="Enter Mobile Number"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00539B]"
                  />
                </div>

              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00539B]"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Address
                </label>

                <textarea
                  rows="5"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your complete address..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00539B]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#ff7300] hover:bg-orange-600 text-white font-semibold py-4 rounded-lg transition-all duration-300 cursor-pointer text-center block"
              >
                Submit Request
              </button>

            </form>

          </div>

          {/* Contact Cards */}
          <div className="space-y-6">

            <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-5">
              <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center">
                <Phone
                  size={34}
                  className="text-[#00539B]"
                />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#00539B]">
                  Call Us
                </h3>

                <p className="text-gray-600 mt-1">
                  +91 93517 64755
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-5">
              <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center">
                <Mail
                  size={34}
                  className="text-[#00539B]"
                />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#00539B]">
                  Email Us
                </h3>

                <p className="text-gray-600 mt-1 break-all">
                  info@ashnora.com
                </p>
              </div>
            </div>

            <div className="bg-[#00539B] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-semibold mb-3">
                Why Choose Ashnora Solar Solution?
              </h3>

              <ul className="space-y-3 text-white/90">
                <li>✓ Customized Solar Solutions</li>
                <li>✓ Premium Quality Products</li>
                <li>✓ Expert Installation Team</li>
                <li>✓ End-to-End Support</li>
                <li>✓ Maximum Energy Savings</li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default FreeSolarQuotation;