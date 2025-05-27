"use client";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { SiFiverr, SiUpwork } from "react-icons/si";

const Footer = () => {
  const socialLinks = [
    { name: "GitHub", icon: <FaGithub />, url: "#", bgColor: "bg-gray-800" },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      url: "#",
      bgColor: "bg-[#0A66C2]",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      url: "#",
      bgColor: "bg-[#1DA1F2]",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "#",
      bgColor: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600",
    },
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      url: "#",
      bgColor: "bg-[#1877F2]",
    },
    { name: "Fiverr", icon: <SiFiverr />, url: "#", bgColor: "bg-[#1DBF73]" },
    { name: "Upwork", icon: <SiUpwork />, url: "#", bgColor: "bg-[#6FDA44]" },
  ];

  return (
    <footer className="relative py-16 px-6 border-t border-slate-700/60 bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-12"
        >
          {/* Logo/Name */}
          <div>
            <h3 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Abdul Musavir
            </h3>
            <p className="text-gray-400 mt-2 text-sm sm:text-base">
              MERN Stack Developer & Software Engineer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center space-y-2"
                  title={link.name}
                >
                  <div
                    className={`w-12 h-12 ${link.bgColor} text-white rounded-full 
                    flex items-center text-[1.5rem] justify-center shadow-lg`}
                  >
                    {link.icon}
                  </div>
                  <span className="text-sm text-gray-300 font-medium">
                    {link.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            {[
              "Home",
              "About",
              "Experience",
              "Skills",
              "Projects",
              "Contact",
            ].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.05 }}
                className="relative text-sm text-gray-300 hover:text-yellow-400 font-medium transition-colors"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 hover:w-full"></span>
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="pt-10 border-t border-slate-700/60 text-sm text-gray-500"
          >
            © 2025 Abdul Musavir. Crafted with care using React and Framer
            Motion.
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
