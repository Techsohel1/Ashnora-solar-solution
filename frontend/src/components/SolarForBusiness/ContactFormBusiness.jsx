import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const ContactFormBusiness = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !phone || !pincode || !address) {
      alert("Name, Phone, Pincode, and Address are required!");
      return;
    }

    const newInquiry = {
      id: "survey_" + Date.now(),
      name: fullName,
      mobile: phone,
      email: email || "N/A",
      address: `${address} (Pincode: ${pincode})`,
      status: "Scheduled",
      date: new Date().toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }) + ", " + new Date().toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    const existingSurveys = JSON.parse(localStorage.getItem("ashnora_surveys") || "[]");
    existingSurveys.unshift(newInquiry);
    localStorage.setItem("ashnora_surveys", JSON.stringify(existingSurveys));

    // Reset Form
    setFullName("");
    setPhone("");
    setEmail("");
    setPincode("");
    setAddress("");

    // Show Success Toast
    setShowSuccessToast(true);
    setTimeout(() => {
      setShowSuccessToast(false);
    }, 4000);
  };

  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/solar.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
              Invest in Solar
            </h2>

            <p className="mt-8 text-2xl leading-relaxed max-w-[600px] font-medium">
              We invite you to be part of India’s growth story as well as the
              rise of Solar Power as the new source of power for the same.
            </p>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-700 text-lg mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full border border-gray-300 rounded-md px-4 py-4 text-lg focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-lg mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Your Phone No."
                    className="w-full border border-gray-300 rounded-md px-4 py-4 text-lg focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-700 text-lg mb-2">
                    Email
                  </label>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full border border-gray-300 rounded-md px-4 py-4 text-lg focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-lg mb-2">
                    PINCODE <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="number"
                    required
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    placeholder="Your PINCODE"
                    className="w-full border border-gray-300 rounded-md px-4 py-4 text-lg focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 text-lg mb-2">
                  Address <span className="text-red-500">*</span>
                </label>

                <textarea
                  rows="3"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your detailed address..."
                  className="w-full border border-gray-300 rounded-md px-4 py-4 text-lg focus:outline-none focus:border-orange-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#ff7300] hover:bg-orange-600 text-white font-semibold text-2xl py-4 rounded-md transition-all duration-300 cursor-pointer"
              >
                Submit
              </button>

            </form>
          </div>

        </div>
      </div>

      {showSuccessToast && (
        <div className="fixed bottom-5 right-5 z-[999999] bg-green-600 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-pulse">
          <FaCheckCircle size={24} />
          <div>
            <p className="font-bold">Business Solar Inquiry Submitted!</p>
            <p className="text-xs text-green-100">It is now visible in the admin dashboard.</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactFormBusiness;