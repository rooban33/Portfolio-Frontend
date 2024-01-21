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
        <Image src="/images/c.png" className="image-item" width={80} height={80} />
        <Image src="/images/html.png" className="image-item" width={80} height={80} />
        <Image src="/images/css.png" className="image-item" width={80} height={80} />
        <Image src="/images/js.svg" className="image-item" width={80} height={80} />
        <Image src="/images/react.png" className="image-item" width={80} height={80} />
        <Image src="/images/cpp1.png" className="image-item" width={80} height={80} />
        <Image src="/images/java.png" className="image-item" width={80} height={80} />
        <Image src="/images/python.png" className="image-item" width={80} height={80} />
        <Image src="/images/node.avif" className="image-item" width={80} height={80} />
        <Image src="/images/mysql.png" className="image-item" width={80} height={80} />
      </div>
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
    title: "Achievements",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Cyber Fest: Secured the championship title at Cyber Fest’s Maze Runner</li>
        <li>Yugam - Code2Duo: 2nd Runners-up</li>
        <li>SIH - Achieved success in SIH (2023) by clearing the Internal Hackathon</li>
        <li>OpenCV Bootcamp with 100% grade - OpenCV University</li>
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
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Achievements{" "}
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
