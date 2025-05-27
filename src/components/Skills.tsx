"use client";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMui,
  SiFramer,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiRedux,
  SiMantine,
  SiDrizzle,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
const Skills = () => {
  const skillCategories = {
    all: [
      // Frontend
      { name: "React JS", icon: FaReact, color: "text-blue-500" },
      { name: "Next JS", icon: SiNextdotjs, color: "text-white" },
      { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
      { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS", icon: FaCss3Alt, color: "text-blue-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
      { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-500" },
      { name: "Material UI", icon: SiMui, color: "text-blue-600" },
      { name: "Mantine UI", icon: SiMantine, color: "text-blue-500" },
      { name: "Shadcn UI", icon: FaReact, color: "text-gray-400" },
      { name: "Framer Motion", icon: SiFramer, color: "text-pink-500" },
      // Backend
      { name: "Node JS", icon: FaNodeJs, color: "text-green-500" },
      { name: "Express JS", icon: SiExpress, color: "text-gray-400" },
      { name: "NestJS", icon: SiNestjs, color: "text-red-500" },
      { name: "REST API", icon: TbApi, color: "text-blue-400" },
      // Database
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
      { name: "Prisma ORM", icon: SiPrisma, color: "text-white" },
      { name: "Drizzle ORM", icon: SiDrizzle, color: "text-green-400" },
      // Tools
      { name: "Git & GitHub", icon: FaGitAlt, color: "text-orange-600" },
      { name: "Redux", icon: SiRedux, color: "text-purple-600" },
    ],
    frontend: [
      { name: "React JS", icon: FaReact, color: "text-blue-500" },
      { name: "Next JS", icon: SiNextdotjs, color: "text-white" },
      { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
      { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS", icon: FaCss3Alt, color: "text-blue-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
      { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-500" },
      { name: "Material UI", icon: SiMui, color: "text-blue-600" },
      { name: "Mantine UI", icon: SiMantine, color: "text-blue-500" },
      { name: "Shadcn UI", icon: FaReact, color: "text-gray-400" },
      { name: "Framer Motion", icon: SiFramer, color: "text-pink-500" },
    ],
    backend: [
      { name: "Node JS", icon: FaNodeJs, color: "text-green-500" },
      { name: "Express JS", icon: SiExpress, color: "text-gray-400" },
      { name: "NestJS", icon: SiNestjs, color: "text-red-500" },
      { name: "REST API", icon: TbApi, color: "text-blue-400" },
    ],
    database: [
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
      { name: "Prisma ORM", icon: SiPrisma, color: "text-white" },
      { name: "Drizzle ORM", icon: SiDrizzle, color: "text-green-400" },
    ],
    tools: [
      { name: "Git & GitHub", icon: FaGitAlt, color: "text-orange-600" },
      { name: "Redux", icon: SiRedux, color: "text-purple-600" },
    ],
  };
  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-300 w-full max-w-[60%] text-center text-base sm:text-lg">
            Here are some of my skills on which I have been working on for the
            past few years.
          </p>
        </motion.div>
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center px-4">
            <TabsList
              className="grid w-full md:w-[60%] max-w-6xl h-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
               mb-6 sm:mb-8 bg-slate-800/50 backdrop-blur-md border border-slate-700/50 
               rounded-xl p-2 gap-2 overflow-hidden"
            >
              {[
                { value: "all", label: "All Skills" },
                { value: "frontend", label: "Frontend" },
                { value: "backend", label: "Backend" },
                { value: "database", label: "Database" },
                { value: "tools", label: "Tools" },
              ].map(({ value, label }, index) => (
                <TabsTrigger
                  key={value}
                  value={value}
                  className={`${
                    index !== 0 ? "border-l border-slate-700" : ""
                  } data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-orange-500 
            data-[state=active]:text-black data-[state=active]:shadow-md 
            hover:bg-slate-700/40 text-white font-medium transition-all duration-300 
            text-xs sm:text-sm px-3 py-2 text-center`}
                >
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {Object.entries(skillCategories).map(([category, skills]) => (
            <TabsContent key={category} value={category}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4"
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.1 * index,
                      ease: "easeInOut",
                    }}
                    className="group flex flex-col md:flex-row items-center gap-3 md:gap-5 p-4 pl-5  sm:p-3 sm:pl-8 bg-[#0d203d] backdrop-blur-sm border border-slate-700/50 rounded-xl hover:border-yellow-500/50 hover:shadow-[#3f3f51] shadow-lg  transition-all duration-300 cursor-pointer"
                  >
                    <skill.icon
                      className={`text-[3rem] sm:text-[3rem] ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                    <span className="text-white font-medium text-sm sm:text-base group-hover:text-yellow-400 transition-colors duration-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;
