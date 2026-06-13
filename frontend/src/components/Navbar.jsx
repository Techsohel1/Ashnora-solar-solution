import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { api } from "../utils/api";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaCheckCircle,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSurveyForm, setShowSurveyForm] = useState(false);

  // Form states
  const [surveyName, setSurveyName] = useState("");
  const [surveyMobile, setSurveyMobile] = useState("");
  const [surveyEmail, setSurveyEmail] = useState("");
  const [surveyAddress, setSurveyAddress] = useState("");
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  useEffect(() => {
    // Seed mock data for dashboard if empty
    if (!localStorage.getItem('ashnora_surveys')) {
      const dummySurveys = [
        {
          id: 'survey_1',
          name: 'Arjun Sharma',
          mobile: '9876543210',
          email: 'arjun.sharma@gmail.com',
          address: 'Flat 402, Royal Heights, Sector 5, Mansarovar, Jaipur',
          status: 'Scheduled',
          date: '10 Jun 2026, 11:30 AM'
        },
        {
          id: 'survey_2',
          name: 'Priyanka Patel',
          mobile: '9123456789',
          email: 'priyanka@yahoo.com',
          address: 'B-12, Vaishali Nagar, Jaipur, Rajasthan',
          status: 'Completed',
          date: '08 Jun 2026, 04:15 PM'
        },
        {
          id: 'survey_3',
          name: 'Ramesh Verma',
          mobile: '9345678901',
          email: 'ramesh.v@outlook.com',
          address: '32, Gandhi Path, Chitrakoot, Jaipur',
          status: 'Cancelled',
          date: '05 Jun 2026, 10:00 AM'
        }
      ];
      localStorage.setItem('ashnora_surveys', JSON.stringify(dummySurveys));
    }

    if (!localStorage.getItem('ashnora_quotations')) {
      const dummyQuotations = [
        {
          id: 'quote_1',
          name: 'Suresh Kumar',
          mobile: '9555666777',
          email: 'suresh.kumar@indiatimes.com',
          address: 'Plot 104, Malviya Nagar, Jaipur',
          status: 'New',
          date: '11 Jun 2026, 09:45 AM'
        },
        {
          id: 'quote_2',
          name: 'Anita Devi',
          mobile: '9444555666',
          email: 'anita.devi@rediffmail.com',
          address: '12-A, Jagatpura, Jaipur',
          status: 'Contacted',
          date: '09 Jun 2026, 02:30 PM'
        },
        {
          id: 'quote_3',
          name: 'Vikram Singh',
          mobile: '9222333444',
          email: 'vikram.singh@gmail.com',
          address: 'Industrial Area, Phase II, Jaipur',
          status: 'Closed Win',
          date: '07 Jun 2026, 11:20 AM'
        }
      ];
      localStorage.setItem('ashnora_quotations', JSON.stringify(dummyQuotations));
    }
  }, []);

  const handleSurveySubmit = async (e) => {
    e.preventDefault();
    if (!surveyName || !surveyMobile) {
      alert("Name and Mobile Number are required!");
      return;
    }

    const newSurvey = {
      name: surveyName,
      mobile: surveyMobile,
      email: surveyEmail || "N/A",
      address: surveyAddress || "N/A",
      status: 'Scheduled',
    };

    try {
      await api.createInquiry(newSurvey);

      // Reset fields
      setSurveyName("");
      setSurveyMobile("");
      setSurveyEmail("");
      setSurveyAddress("");
      
      // Close form and show success toast
      setShowSurveyForm(false);
      setShowSuccessToast(true);
      setTimeout(() => {
        setShowSuccessToast(false);
      }, 4000);
    } catch (error) {
      alert("Failed to submit survey request: " + error.message);
    }
  };

 const navLinks = [
  { name: "Solar For Home", path: "/solar-for-home" },
  { name: "Solar For Business", path: "/solar-for-business" },
  { name: "Blogs", path: "/blogs" },
  { name: "Contact Us", path: "/contact-us" },
];

  return (
    
    <header className="sticky top-0 z-50 bg-[#F5F5F5]/95 backdrop-blur-md">

      {/* Top Bar */}
      <div className="hidden md:block border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="flex justify-between items-center py-2 text-sm">

            <div className="flex items-center gap-8 text-gray-600">

              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-[#00539B]" />
                <span>+91 93517 64755</span>
              </div>

              <div className="flex items-center gap-2">
                <FaEnvelope className="text-[#00539B]" />
                <span>info@ashnora.com</span>
              </div>

            </div>

            <button
                onClick={() => setShowSurveyForm(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-xl font-semibold tracking-wide shadow-md hover:shadow-lg transition-all duration-300"
              >
                Book FREE Site Survey
              </button>

          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-[1400px] mx-auto px-4 py-3">

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 px-6 lg:px-10 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link to="/">
            <img
              src="/logo.png"
              alt="Ashnora Solar Solution"
              className="h-12 lg:h-16 object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8 xl:gap-10">

            {/* Company */}
            <li className="relative group">
              <span className="cursor-pointer font-medium tracking-wide text-[15px] text-gray-700 hover:text-[#00539B] transition-all duration-300">
                Company
              </span>

              <div className="absolute top-full left-0 mt-4 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

                <Link
                  to="/about-us"
                  className="block px-5 py-3 text-[15px] font-medium text-gray-700 hover:bg-gray-50 hover:text-[#00539B]"
                >
                  About Us
                </Link>

                <Link
                  to="/theAshnoraAdvantage"
                  className="block px-5 py-3 text-[15px] font-medium text-gray-700 hover:bg-gray-50 hover:text-[#00539B]"
                >
                  The Ashnora Solar Solution Advantage
                </Link>

                

              </div>
            </li>

            {/* Main Links */}
            {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? "font-semibold tracking-wide text-[15px] text-[#00539B] relative after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-orange-500"
                        : "font-medium tracking-wide text-[15px] text-gray-700 hover:text-[#00539B] transition-all duration-300"
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}

            

          </ul>

          {/* Mobile Button */}
          <button
            className="lg:hidden text-2xl text-[#00539B]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white rounded-2xl shadow-lg mt-3 p-6 border border-gray-100">

            <div className="space-y-5">

              <div>
                <h3 className="font-semibold text-[#00539B] text-lg mb-3">
                  Company
                </h3>

                <div className="space-y-3 pl-2">
                  <Link to="/about-us" onClick={() => setMenuOpen(false)} className="block text-[15px] font-medium text-gray-700 hover:text-[#00539B]">
                    About Us
                  </Link>

                  <Link to="/theAshnoraAdvantage" onClick={() => setMenuOpen(false)} className="block text-[15px] font-medium text-gray-700 hover:text-[#00539B]">
                    The Ashnora Solar Solution Advantage
                  </Link>

                
                </div>
              </div>

              <div className="space-y-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "block font-semibold text-[#00539B]"
                        : "block text-[15px] font-medium text-gray-700 hover:text-[#00539B]"
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>


             

              <button
                  onClick={() => setShowSurveyForm(true)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold tracking-wide transition-all duration-300"
                >
                  Book FREE Site Survey
                </button>

            </div>

          </div>
        )}

      </div>
      {showSurveyForm && (
  <div
  className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
  onClick={() => setShowSurveyForm(false)}
>
    <div
      className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden my-auto"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button
        onClick={() => setShowSurveyForm(false)}
        className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-500 hover:text-white transition-all duration-300 z-10"
      >
        <FaTimes size={18} />
      </button>

      {/* Header */}
      <div className="bg-[#00539B] px-8 py-5">
        <h2 className="text-white text-2xl md:text-3xl font-semibold">
          Book FREE Site Survey
        </h2>

        <p className="text-blue-100 mt-1 text-sm">
          Fill in your details and our solar expert will contact you shortly.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSurveySubmit} className="p-8 space-y-5">

        <div>
          <label className="block mb-2 text-gray-700 font-medium">
            Full Name <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            required
            value={surveyName}
            onChange={(e) => setSurveyName(e.target.value)}
            placeholder="Enter your full name"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00539B]"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-700 font-medium">
            Mobile Number <span className="text-red-500">*</span>
          </label>

          <input
            type="tel"
            required
            value={surveyMobile}
            onChange={(e) => setSurveyMobile(e.target.value)}
            placeholder="Enter mobile number"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00539B]"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-700 font-medium">
            Email Address
          </label>

          <input
            type="email"
            value={surveyEmail}
            onChange={(e) => setSurveyEmail(e.target.value)}
            placeholder="Enter email address"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00539B]"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-700 font-medium">
            Address
          </label>

          <textarea
            rows="4"
            value={surveyAddress}
            onChange={(e) => setSurveyAddress(e.target.value)}
            placeholder="Enter your address"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00539B]"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer"
        >
          Submit Request
        </button>
      </form>
    </div>
  </div>
)}

      {showSuccessToast && (
        <div className="fixed bottom-5 right-5 z-[999999] bg-green-600 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-pulse">
          <FaCheckCircle size={24} />
          <div>
            <p className="font-bold">Survey Request Submitted!</p>
            <p className="text-xs text-green-100">Our solar experts will contact you shortly.</p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;