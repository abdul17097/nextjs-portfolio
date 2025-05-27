"use client";
import { motion } from "framer-motion";
import ProjectTabs from "./projects/ProjectTabs";

const Projects = () => {
  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Explore my recent work showcasing full-stack development, modern
            UI/UX design, and professional solutions built with cutting-edge
            technologies.
          </p>
        </motion.div>

        <ProjectTabs />
      </div>
    </section>
  );
};

export default Projects;
