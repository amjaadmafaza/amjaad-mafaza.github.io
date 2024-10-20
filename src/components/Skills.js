import React from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ skill, percentage }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-1">
      <span className="text-base font-medium text-white">{skill}</span>
      <span className="text-sm font-medium text-white">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2.5">
      <motion.div 
        className="bg-yellow-400 h-2.5 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </div>
  </div>
);

function Skills() {
  const skills = [
    { name: "React", percentage: 90 },
    { name: "JavaScript", percentage: 85 },
    { name: "Node.js", percentage: 80 },
    { name: "HTML/CSS", percentage: 95 },
    { name: "Pawn (SA-MP)", percentage: 75 },
  ];

  const technologies = [
    "Redux", "GraphQL", "MongoDB", "Express", "Git", "Webpack", "Jest", "Tailwind CSS"
  ];

  return (
    <section id="skills" className="py-8 sm:py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10 text-center" data-aos="fade-up">Keahlian & Teknologi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div data-aos="fade-right">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Keahlian Utama</h3>
            {skills.map((skill, index) => (
              <SkillBar key={index} skill={skill.name} percentage={skill.percentage} />
            ))}
          </div>
          <div data-aos="fade-left">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Teknologi yang Dikuasai</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <motion.span 
                  key={index}
                  className="bg-gray-800 text-yellow-400 px-2 py-1 rounded-full text-xs sm:text-sm mb-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;