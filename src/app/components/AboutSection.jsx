"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="image-list">
        <Image src="/images/c.png" title="C" className="image-item" width={80} height={80} />
        <Image src="/images/html.png" title="HTML" className="image-item" width={80} height={80} />
        <Image src="/images/css.png" title="CSS" className="image-item" width={80} height={80} />
        <Image src="/images/js.svg" title="Java Script" className="image-item" width={80} height={80} />
        <Image src="/images/react.png" title="React" className="image-item" width={80} height={80} />
        <Image src="/images/cpp1.png" title="C++" className="image-item" width={80} height={80} />
        <Image src="/images/java.png" title="JAVA" className="image-item" width={80} height={80} />
        <Image src="/images/python.png" title="Python" className="image-item" width={80} height={80} />
        <Image src="/images/node.png" title="Node Js" className="image-item" width={80} height={80} />
        <Image src="/images/mysql.png" title="Mysql" className="image-item" width={80} height={80} />
      </div>
    ),
    
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="education-content">
        <div className="education-card">
          <div className="education-icon">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
            </svg>
          </div>
          <div className="education-details">
            <h3 className="education-degree" style={{"color":"blueviolet"}}>Master of Science in Software Systems</h3>
            <p className="education-institution">Coimbatore Institute of Technology</p>
            <div className="education-meta">
              <span className="education-status">Currently persuing with 8.7 CGPA</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  // {
  //   title: "Achievements",
  //   id: "certifications",
  //   content: (
  //     <ul className="list-disc pl-2">
  //       <li>Cyber Fest: Secured the championship title at Cyber Fest’s Maze Runner</li>
  //       <li>Yugam - Code2Duo: 2nd Runners-up</li>
  //       <li>SIH - Achieved success in SIH (2023) by clearing the Internal Hackathon</li>
  //       <li>OpenCV Bootcamp with 100% grade - OpenCV University</li>
  //     </ul>
  //   ),
  // },
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
        <Image src="/images/about.jpeg" className="" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            
Howdy🤠! I'm Shajithrooban, a versatile software developer based in Coimbatore. Proficient in C, C++, Python, React, Nodejs, and more, I actively contribute to diverse technology initiatives. As a valuable member of the Research Assistant team at the Coimbatore Institute of Technology, I played a key role in developing an innovative student performance analysis fuzzy model, which earned recognition at the I-SMAC conference in Nepal. In my position as the Head of the Technical Team at the FOSS-CIT, I drive meaningful contributions to the open-source community through events like Hacktoberfest. Explore my portfolio to witness my commitment to impactful technology solutions. Let's connect and innovate!</p>
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
