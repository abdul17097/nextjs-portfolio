import { Project } from "@/data/projectData";
import { motion } from "framer-motion";
import { BiCode } from "react-icons/bi";
import { HiExternalLink } from "react-icons/hi";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-yellow-500/50 hover:bg-slate-700/50 transition-all duration-300"
    >
      {/* Project Mockup Image */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img
          src={project.mockupImage}
          alt={`${project.title} mockup`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
        <div className="absolute top-4 left-4">
          <project.image className="text-3xl text-yellow-400 bg-slate-900/50 backdrop-blur-sm p-2 rounded-lg" />
        </div>
        {project.featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6 sm:p-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-yellow-400 text-xl sm:text-2xl font-semibold group-hover:text-yellow-300 transition-colors duration-300">
            {project.title}
          </h3>
          <span className="text-xs text-gray-400 bg-slate-700/50 px-2 py-1 rounded-full">
            {project.category}
          </span>
        </div>

        <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base line-clamp-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 rounded-full text-xs sm:text-sm font-medium border border-yellow-500/30 hover:border-yellow-500/50 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <motion.a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold rounded-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25"
          >
            <HiExternalLink className="text-lg" />
            View Live
          </motion.a>
          <motion.a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 px-6 py-3 border border-yellow-500 text-yellow-500 font-semibold rounded-lg hover:bg-gradient-to-r hover:from-yellow-500 hover:to-orange-500 hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25"
          >
            <BiCode className="text-lg" />
            View Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
