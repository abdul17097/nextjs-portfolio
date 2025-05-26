"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Youtube, Twitter } from "lucide-react";

const About = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 pt-16"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-yellow-400 text-lg font-medium"
          >
            Hi my name is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold"
          >
            <span className="text-yellow-400">Abdul Musavir,</span>
            <br />
            <span className="text-white">MERN Stack Developer!</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg leading-relaxed max-w-2xl"
          >
            With over a year of immersive experience, Proficient in React.js and
            Next.js for frontend magic and Node.js coupled with Express for
            robust backend solutions, I specialize in seamlessly integrating
            these technologies to craft exceptional web solutions. Leveraging
            MongoDB for flexible NoSQL databases and Sequelize for relational
            databases, I ensure scalability and reliability in every aspect of
            your project. Let's collaborate and transform your vision into a
            captivating reality!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Let's Work Together →
            </motion.button>
          </motion.div>

          {/* Social Links */}
          {/* <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            className="fixed left-6 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col gap-4 z-40"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.2, x: 5 }}
                className="text-gray-400 hover:text-yellow-400 transition-colors"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div> */}

          {/* Email - Vertical */}
          {/* <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
            className="fixed right-6 bottom-0 hidden lg:block z-40"
          >
            <div className="flex flex-col items-center gap-6">
              <a
                href="mailto:abdul@email.com"
                className="text-gray-400 hover:text-yellow-400 transition-colors writing-mode-vertical-rl text-orientation-mixed"
                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
              >
                abdul@email.com
              </a>
              <div className="w-px h-24 bg-gray-600"></div>
            </div>
          </motion.div> */}
        </motion.div>

        {/* Right Side - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 p-2">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                <img
                  src="/lovable-uploads/ff19ac78-4643-4302-99f3-9e2ec7573fd5.png"
                  alt="Abdul Musavir"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-4 right-4 w-4 h-4 bg-blue-400 rounded-full"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute bottom-8 left-8 w-3 h-3 bg-green-400 rounded-full"
            />
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute top-1/3 left-4 w-2 h-2 bg-purple-400 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
