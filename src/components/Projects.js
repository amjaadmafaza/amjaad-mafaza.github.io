import React from 'react';
import { motion } from 'framer-motion';

function ProjectCard({ title, description, image, size, index, link }) {
  const sizeClasses = {
    large: "col-span-full md:col-span-2 md:row-span-2",
    medium: "col-span-full md:col-span-1 md:row-span-2",
    small: "col-span-full md:col-span-1 md:row-span-1"
  };

  return (
    <motion.div 
      className={`bg-gray-800 rounded-lg overflow-hidden shadow-lg ${sizeClasses[size]}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-yellow-400">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-400 hover:text-blue-300 transition duration-300"
        >
          Link Web
        </a>
      </div>
    </motion.div>
  );
}

function Projects() {
  const projects = [
    {
      title: "Proyek Utama",
      description: "Ini adalah proyek store saya.",
      image: "https://cdn.discordapp.com/attachments/1140684662096810166/1297044465088729148/image.png?ex=67147e4a&is=67132cca&hm=32a1b2cf76a69bdd6aad99cd392e508d5f1b24f0990846a044a83932e4de2dce&",
      size: "large",
      link: "https://sukowatistore.biz.id"
    },
    {
      title: "Store Minecraft",
      description: "Sebuah Store Website Minecraft",
      image: "https://cdn.discordapp.com/attachments/1140684662096810166/1297039477318877225/image.png?ex=671479a5&is=67132825&hm=89446da96d4174db222efd58718bb583cb80405b7190602cfc24d48c724be3e6&",
      size: "medium",
      link: "https://eligosnetwork.biz.id"
    },
    {
      title: "Website Desa",
      description: "Sebuah Website Desa Yang Ku Buat untuk desa",
      image: "https://cdn.discordapp.com/attachments/1140684662096810166/1297045110571401247/image.png?ex=67147ee4&is=67132d64&hm=91831df985ca5282d3a3bb14729a3a0bd563f0f0936fb1929fd2c6b8d93d6614&",
      size: "small",
      link: "https://test"
    },
    {
      title: "Portofolio",
      description: "Portofolio Saya.",
      image: "https://cdn.discordapp.com/attachments/1140684662096810166/1297142682665222236/image.png?ex=6714d9c3&is=67138843&hm=a87255af75ecbbbb5a37a86568d703f3ea1dd9c9316a16dcf5d42218e5023ff0&",
      size: "small",
      link: "https://sukowatistore.biz.id/porto"
    },
    {
      title: "Portofolio",
      description: "Sebuah Portofolio",
      image: "https://cdn.discordapp.com/attachments/1140684662096810166/1289910338845802506/image.png?ex=67143f5e&is=6712edde&hm=614cdf60b1f57129a50fb98a73f12853c1c19410206bc08bcf6b604a59db1870&",
      size: "small",
      link: "https://sukowatistore.biz.id/porto"
    },
  ];

  return (
    <section id="projects" className="py-8 sm:py-16 bg-black text-white">
      <div className="container mx-auto">
        <motion.h2 
          className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Proyek-proyek Saya
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;