"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Github, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Resume", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#contact" },
    { name: "Skills", href: "#skills" },
  ];
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Left Side */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-yellow-400 font-bold text-xl"
          >
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              CodeCraft Studio
            </span>
          </motion.div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* GitHub Button - Right Side */}
          <div className="hidden md:flex">
            <motion.a
              href="https://github.com/abdulmusavir"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black px-4 py-2 rounded-lg font-medium transition-all duration-300"
            >
              <Github size={20} />
              <span>GitHub</span>
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
              className="text-gray-300 hover:text-yellow-400 p-2 relative z-50"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMenuOpen ? "close" : "menu"}
                  initial={{ rotate: 0, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{
                duration: 0.3,
                ease: [0.04, 0.62, 0.23, 0.98],
              }}
              className="md:hidden absolute left-0 right-0 top-full bg-slate-900/95 backdrop-blur-lg border-b border-slate-700/50 shadow-2xl"
            >
              <motion.div
                className="px-4 py-6 space-y-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.2 }}
              >
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.05 + 0.1,
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                    className="block px-4 py-3 text-gray-300 hover:text-yellow-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}

                {/* Mobile GitHub Button */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: navItems.length * 0.05 + 0.1,
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  className="pt-4 border-t border-slate-700/50"
                >
                  <motion.a
                    href="https://github.com/abdulmusavir"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black px-4 py-3 rounded-lg font-medium transition-all duration-300 mx-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Github size={18} />
                    <span>GitHub Profile</span>
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
