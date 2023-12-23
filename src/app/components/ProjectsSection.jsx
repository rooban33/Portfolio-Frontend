"use client";
import { useEffect, useState, useRef } from 'react';
import ProjectTag from './ProjectTag';
import ProjectCard from './ProjectCard';
import { motion, useInView } from 'framer-motion';
import axios from 'axios';

const ProjectsSection = () => {
  const [tag, setTag] = useState('All');
  const [projects, setProjects] = useState([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    fetchProjectsByTag(tag);
  }, [tag]);

  const fetchProjectsByTag = async (selectedTag) => {
    try {
      const response = await axios.get(`http://localhost:3001/projects?tag=${selectedTag}`);
      setProjects(response.data.projects);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web development"
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Flask"
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Computer Vision"
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Java"
        />
        <ProjectTag
          onClick={handleTagChange}
          name="ML"
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.des}
              imgUrl={project.img}
              gitUrl={project.git}
              previewUrl={project.pre}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;