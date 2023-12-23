"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>C</li>
        <li>Html</li>
        <li>Css</li>
        <li>Bootsrap</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>C++</li>
        <li>JAVA</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Msc Software Systems, Coimbatore Institute of technology</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Hackrrank Skill certifications:Problem Solving</li>
        <li>OpenCv bootcamp with 100% grade</li>
        <li>Introduction to Machine learning from Kaggle</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about.jpg" className="" width={800} height={800} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            
          I am Shajithrooban, an MSc Software System student deeply passionate about software development. Proficient in Java, C++, and Python, I excel in both front-end and back-end development, crafting seamless user experiences. My journey includes freelancing as a web developer, where I've honed my skills and commitment to delivering high-quality work. Beyond academics, I am captivated by computer vision, aspiring to innovate at the intersection of artificial intelligence and visual perception. My ultimate goal is to establish my own software solutions firm, where I can channel my dedication into creating innovative and impactful technological solutions. Eager to contribute my creativity and technical expertise to the ever-evolving tech landscape, I am excited about future collaborations and opportunities in the world of software development. 
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
