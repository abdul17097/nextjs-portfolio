"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Youtube, Twitter } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub", color: "#333" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "#0A66C2" },
    { icon: Youtube, href: "#", label: "YouTube", color: "#FF0000" },
    { icon: Twitter, href: "#", label: "Twitter", color: "#1DA1F2" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* Left Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <p className="text-yellow-400 font-semibold tracking-wide text-lg">
            Hi, my name is
          </p>

          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
            <span className="text-yellow-400">Abdul Musavir,</span> <br />
            <span className="text-white">MERN Stack Developer</span>
          </h1>

          {/* Typing animation for skills */}
          <div className="text-2xl md:text-3xl font-semibold text-gray-300 min-h-[3rem]">
            <TypeAnimation
              sequence={[
                "I am a Frontend Developer",
                2000,
                "I am a MERN Stack Developer",
                2000,
                "I am a Software Engineer",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ display: "inline-block" }}
              speed={50}
              deletionSpeed={40}
            />
          </div>

          <p className="text-gray-400 max-w-xl leading-relaxed text-lg">
            With over a year of immersive experience, I specialize in building
            modern, scalable web applications using React.js, Next.js, Node.js,
            Express, MongoDB, and Sequelize. My passion lies in crafting
            seamless user experiences combined with robust backend solutions.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 text-black font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            Let's Work Together →
          </motion.button>

          {/* Social Links */}
          <div className="flex gap-6 mt-6">
            {socialLinks.map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-125"
                style={{ color }}
              >
                <Icon size={28} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Side - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative rounded-full p-2 bg-gradient-to-tr from-yellow-400 via-orange-500 to-yellow-400 shadow-2xl">
            <div className="w-80 h-80 rounded-full bg-gray-900 overflow-hidden flex items-center justify-center">
              <img
                src=""
                alt="Abdul Musavir"
                className="w-full h-full object-cover rounded-full"
                draggable={false}
              />
            </div>

            {/* Floating colored dots */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-6 right-6 w-5 h-5 bg-blue-400 rounded-full shadow-lg"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute bottom-12 left-10 w-4 h-4 bg-green-400 rounded-full shadow-md"
            />
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute top-1/3 left-8 w-3 h-3 bg-purple-400 rounded-full shadow-sm"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
