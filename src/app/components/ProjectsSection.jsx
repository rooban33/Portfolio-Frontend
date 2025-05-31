"use client";
import { useEffect, useState, useRef } from 'react';
import ProjectTag from './ProjectTag';
import ProjectCard from './ProjectCard';
import { motion, useInView } from 'framer-motion';


const ProjectsSection = () => {
  const [tag, setTag] = useState('All');
  const [projects, setProjects] = useState([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    fetchProjectsByTag(tag);
  }, [tag]);

  const cards = [
    {
      id: 1,
      imgUrl: "/images/gesture.png",
      title: "Game Control Using Gesture",
      description:
        "A gesture-controlled gaming app using OpenCV and MediaPipe to play games like Subway Surfers with up to 75% accuracy.",
      gitUrl: "https://github.com/rooban33/Hand-Gesture-Recognition",
      previewUrl: "https://www.linkedin.com/posts/shajith-rooban-b26453221_computervision-gaming-innovation-activity-7109224358660751360--I9C?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADfF744BOKK7gIKhvHZqkGzeqUQmdAeqyzM",
      tag: ["Flask", "Computer Vision"]
    },    
    {
      id: 3,
      imgUrl: "/images/nw.png",
      title: "Network Scanner",
      description:
        "A tool built with ReactJS and Flask to scan local networks, identify 50+ devices, and sniff 1000+ packets for activity insights.",
      gitUrl: "https://github.com/rooban33/Network-Scanner",
      previewUrl: "https://www.linkedin.com/posts/shajith-rooban-b26453221_networkscanner-innovation-filesharing-activity-7139493293515567104-LnLW?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADfF744BOKK7gIKhvHZqkGzeqUQmdAeqyzM",
      tag: ["Flask", "Web development"]
    },
    {
      id: 8,
      imgUrl: "/images/rapport.png",
      title: "Rapport",
      description:
        "A Java Swing app that connects 300+ disabled individuals with volunteers, boosting satisfaction by 25%.",
      gitUrl: "https://github.com/rooban33/Rapport",
      previewUrl: "",
      tag: ["Java"]
    },
    {
      id: 4,
      imgUrl: "/images/music player.png",
      title: "Music Player",
      description:
        "C++ based project which uses data structures to store and traverse through the songs and act as a music player.",
      gitUrl: "https://github.com/rooban33/Music_Player",
      previewUrl: "",
      tag: ["C++"]
    },
    {
      id: 5,
      imgUrl: "/images/rubiks.png",
      title: "Rubick's Cube Solver(Last Layer)",
      description:
        "A vision-based app that detects Rubik’s Cube colors from grayscale images with 80% accuracy and reduces dataset size by 84%.",
      gitUrl: "https://github.com/rooban33/Music_Player",
      previewUrl: "",
      tag: ["ML","Computer Vision"]
    },
    {
      id: 6,
      imgUrl: "/images/fm.png",
      title: "FM Vault",
      description:
        "A simple website which consists of Radio Channels which I listen Frequently so that I could access them at same spot.",
      gitUrl: "https://github.com/rooban33/FM_2",
      previewUrl: "https://fmvault.netlify.app/",
      tag: ["Web development"]
    },
    {
      id: 7,
      imgUrl: "/images/quicksense.png",
      title: "Quick Sense",
      description:
        "QuickSense is a Chrome extension built with HTML, CSS, Bootstrap, JavaScript, and JSON for instant word definitions.",
      gitUrl: "https://github.com/fosscit/Quick-sense",
      previewUrl: "https://www.linkedin.com/posts/shajith-rooban-b26453221_opensource-hacktoberfest-techinnovation-activity-7126980467878232064-S5BS?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADfF744BOKK7gIKhvHZqkGzeqUQmdAeqyzM",
      tag: ["Web development"]
    },
    {
      id: 2,
      imgUrl: "/images/sih.png",
      title: "Crowd Management & Trespassing prevention in railwaystation",
      description:
        "A real-time CCTV monitoring system using SSD to track movement, detect trespassing, and trigger alerts with email notifications.",
      gitUrl: "https://www.linkedin.com/posts/shajith-rooban-b26453221_using-existing-cctv-network-for-crowd-management-activity-7151993763886780416-OSCa?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADfF744BOKK7gIKhvHZqkGzeqUQmdAeqyzM",
      previewUrl: "https://www.youtube.com/watch?v=VjY5MxOI7rw",
      tag: ["Computer Vision", "ML"]
    }
  ];

  const fetchProjectsByTag = async (selectedTag) => {
    try {
      const filtered =
        selectedTag === "All"
          ? cards
          : cards.filter((project) => project.tag.includes(selectedTag));
  
      setProjects(filtered);
    } catch (error) {
      console.error("Error filtering projects:", error);
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
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 responsive-tags">
        <ProjectTag onClick={handleTagChange} name="All" />
        <ProjectTag onClick={handleTagChange} name="Web development" />
        <ProjectTag onClick={handleTagChange} name="Flask" />
        <ProjectTag onClick={handleTagChange} name="Computer Vision" />
        <ProjectTag onClick={handleTagChange} name="Java" />
        <ProjectTag onClick={handleTagChange} name="ML" />
        <ProjectTag onClick={handleTagChange} name="C++" />
      </div>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.imgUrl}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;