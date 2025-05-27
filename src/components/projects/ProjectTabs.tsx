import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "./ProjectCard";
import { projectCategories } from "@/data/projectData";

const ProjectTabs = () => {
  return (
    <Tabs defaultValue="all" className="w-full">
      {/* <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-6 sm:mb-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-1">
        <TabsTrigger
          value="all"
          className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-orange-500 data-[state=active]:text-black font-medium transition-all duration-300 text-xs sm:text-sm"
        >
          All Projects
        </TabsTrigger>
        <TabsTrigger
          value="fullstack"
          className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-orange-500 data-[state=active]:text-black font-medium transition-all duration-300 text-xs sm:text-sm"
        >
          Full Stack
        </TabsTrigger>
        <TabsTrigger
          value="frontend"
          className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-orange-500 data-[state=active]:text-black font-medium transition-all duration-300 text-xs sm:text-sm"
        >
          Frontend
        </TabsTrigger>
        <TabsTrigger
          value="backend"
          className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-orange-500 data-[state=active]:text-black font-medium transition-all duration-300 text-xs sm:text-sm"
        >
          Backend
        </TabsTrigger>
      </TabsList> */}
      <div className="flex justify-center px-4">
        <TabsList
          className="grid w-full  md:w-[60%] max-w-6xl h-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
               mb-6 sm:mb-8 bg-slate-800/50 backdrop-blur-md border border-slate-700/50 
               rounded-xl p-2 gap-2 overflow-hidden"
        >
          {[
            { value: "all", label: "All Skills" },
            { value: "reactjs", label: "ReactJs" },
            { value: "nextjs", label: "NextJS" },
            { value: "mernstack", label: "MERN Stack" },
            { value: "expressjs", label: "ExpressJs" },
            { value: "nestjs", label: "NestJs" },
            { value: "tailwindcss", label: "Tailwind css" },
            // { value: "redux", label: "Redux Toolkit" },
            // { value: "Zustand", label: "Zustand" },
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

      {Object.entries(projectCategories).map(([category, projects]) => (
        <TabsContent key={category} value={category}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </motion.div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default ProjectTabs;
