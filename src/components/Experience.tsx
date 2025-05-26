"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "MERN Stack Developer as Intern",
    company: "Tech Emulsion IT Services & Consulting",
    period: "April 2023 - January 2024",
    points: [
      "Contributed significantly to the ATARM project, a dynamic web application built with React, by translating project requirements into elegant user interfaces.",
      "Played a key role in collaborating with UI/UX designers and backend developers to ensure a cohesive end-to-end user experience.",
      "Led development efforts in the creation of a desktop application using Electron.js for the AI Art Generation project during my internship.",
    ],
  },
  {
    title: "MERN Stack Developer as Intern",
    company: "Phi Horizon Tech and Services",
    period: "January 2023 - June 2023",
    points: [
      "Gained valuable practical experience and contributing to professional growth and skill development.",
      "Actively participated in designing and developing a Point of Sale Inventory system using the MERN (MongoDB, Express, React, Node.js) stack technology.",
      "Contributed to the development of an e-commerce site, further expanding expertise.",
      "Proficient in utilizing modern technology stacks to address complex business requirements effectively.",
      "Demonstrated ability to optimize system performance and user experience through innovative solutions.",
      "Collaborated closely with team members to ensure seamless integration and successful project delivery.",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Software Engineering",
    institution: "Abasyn University Peshawar",
    period: "2024 - February",
    icon: "🎓",
  },
  {
    degree: "Diploma In Information Technology (DIT)",
    institution: "Government College of Management Science Peshawar",
    period: "2019",
    icon: "💻",
  },
  {
    degree: "Intermediate",
    institution: "Govt. Degree College Naguman Peshawar",
    period: "2018 - October",
    icon: "📚",
  },
];

const Experience = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience & Education
          </h2>
          <p className="text-gray-300 text-lg">
            My professional journey and academic background
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <div className="text-3xl mr-4">💼</div>
              <h3 className="text-2xl font-bold text-white">Experiences</h3>
            </div>
            <div className="flex flex-col my-5">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col gap-3 relative border-l-2 border-yellow-600 pl-[2.5rem] py-8"
                >
                  <div className="absolute top-0 left-[-.5rem] bg-yellow-600 w-4 h-4 rounded-full"></div>
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
                    <h4 className="text-yellow-400 text-xl font-semibold mb-2">
                      {exp.title}
                    </h4>
                    <p className="text-gray-300 mb-1">{exp.period}</p>
                    <p className="text-white font-medium mb-4">{exp.company}</p>
                    <ul className="space-y-2">
                      {exp.points.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="text-gray-300 text-sm flex items-start"
                        >
                          <span className="text-yellow-400 mr-2">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <div className="text-3xl mr-4">🎓</div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            <div className="flex flex-col my-5">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col gap-3 relative border-l-2 border-yellow-600 pl-[2.5rem] py-6"
                >
                  <div className="absolute top-0 left-[-.5rem] bg-yellow-600 w-4 h-4 rounded-full"></div>
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
                    <h4 className="text-yellow-400 text-xl font-semibold mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-gray-300 mb-1">{edu.period}</p>
                    <p className="text-white">{edu.institution}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
