import {
  FiMail,
  FiPhone,
} from "react-icons/fi";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  const aboutLinks = [
    { name: "Company", path: "/about-us" },
    { name: "Solar For Home", path: "/solar-for-home" },
    { name: "Solar For Business", path: "/solar-for-business" },
    { name: "Our Presence", path: "/contact-us" },
  ];

  const quickLinks = [
    { name: "Our Portfolio", path: "/theAshnoraAdvantage" },
    { name: "Partner With Us", path: "/contact-us" },
    { name: "Service & Support", path: "/contact-us" },
    { name: "Press Releases", path: "/blogs" },
  ];

  return (
    <footer
  className="relative bg-cover bg-center"
  style={{
    backgroundImage: "url('/images/Footer-bg.jpg')",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-slate-950/90"></div>

  <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-16 lg:py-20">

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">

      {/* Company */}
      <div>
        <img
          src="/logo.png"
          alt="Ashnora Solar"
          className="h-16 object-contain mb-5"
        />

        <h3 className="text-white text-2xl font-semibold leading-tight">
          Ashnora Solar Solution
        </h3>

        <p className="text-orange-400 italic mt-4 text-lg">
          Simplifying Solar
        </p>

        <p className="text-gray-400 mt-5 leading-7">
          Delivering sustainable solar energy solutions for homes,
          businesses and industries across India.
        </p>
      </div>

      {/* About */}
      <div>
        <h3 className="text-white text-xl font-semibold mb-6">
          About Ashnora Solar Solution
        </h3>

        <ul className="space-y-4">
          {aboutLinks.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="text-gray-300 hover:text-orange-400 transition block"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-white text-xl font-semibold mb-6">
          Quick Links
        </h3>

        <ul className="space-y-4">
          {quickLinks.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="text-gray-300 hover:text-orange-400 transition block"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3 className="text-white text-xl font-semibold mb-6">
          Let's Connect
        </h3>

        <div className="space-y-5">

          <div className="flex items-center gap-3 text-gray-300">
            <FiPhone className="text-orange-400 text-xl" />
            <span>+91 93517 64755</span>
          </div>

          <div className="flex items-center gap-3 text-gray-300 break-all">
            <FiMail className="text-orange-400 text-xl" />
            <span>info@ashnoraenergy.in</span>
          </div>

        </div>

        {/* Social Icons */}
        <div className="flex flex-wrap gap-3 mt-8">

          {[
            { Icon: FaFacebookF, url: "https://facebook.com" },
            { Icon: FaInstagram, url: "https://instagram.com" },
            { Icon: FaLinkedinIn, url: "https://linkedin.com" },
            { Icon: FaYoutube, url: "https://youtube.com" },
            { Icon: FaMapMarkerAlt, url: "https://maps.google.com/?q=Ashnora+Solar+Solution" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 cursor-pointer"
            >
              <item.Icon size={18} />
            </a>
          ))}
        </div>

      </div>

    </div>

    {/* Bottom Bar */}
    <div className="border-t border-white/10 mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

      <p className="text-gray-400 text-sm text-center md:text-left">
        © {new Date().getFullYear()} Ashnora Solar Solution.
        All Rights Reserved.
      </p>

      <p className="text-gray-500 text-sm">
        Designed & Developed by Ashnora Solar Solution
      </p>

    </div>

  </div>
</footer>
  );
};

export default Footer;