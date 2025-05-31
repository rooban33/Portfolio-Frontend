"use client";
import React, { useState, useEffect, useRef } from "react";
import { 
  BriefcaseIcon, 
  CalendarIcon, 
  MapPinIcon, 
  ChevronRightIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  AcademicCapIcon
} from "@heroicons/react/24/outline";

const ExperienceTimeline = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [activeItem, setActiveItem] = useState(null);
  const observerRef = useRef();

  const experiences = [
    {
      id: 1,
      title: "Data and AI Consultant",
      company: "THORORGOOD",
      location: "Bangalore, India",
      period: "Jul 2024 - Dec 2024",
      duration: "6 months",
      type: "Internship",
      description: "Worked on a key migration project, ensuring a smooth transition with the incorporation of the latest features in a significant client project, reducing migration time",
      technologies: ["Angular JS", "Django", "Karma JS"],
      achievements: [
        "Reducing migration time by 30%",
        " Created and refined 20+ frontend elements using Angular, improving application performance by 25% and enhancing user experience.",
        "Appreciated for exceptional contributions and awarded the esteemed Thorogood Star Award within the 6-month internship duration"
      ],
      icon: RocketLaunchIcon,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "SAYVAI",
      location: "Coimbatore, India",
      period: "Dec 2023 - May 2024",
      duration: "6 months",
      type: "Part-time",
      description: "Developed and maintained multiple projects and refined company's website",
      technologies: ["JavaScript", "Python", "MongoDB", "React JS", "Node JS"],
      achievements: [
        "Spearheaded a process re-engineering initiative",
        "Impressed clients by rescuing dropped task and delivering successfully",
      ],
      icon: CodeBracketIcon,
      color: "from-blue-500 to-cyan-500"
    },
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, parseInt(entry.target.dataset.id)]));
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
    );

    const elements = document.querySelectorAll('[data-timeline-item]');
    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '6s' }}></div>
      </div>

      {/* Header */}
      <div className="text-center mb-20 relative z-10">
        <h3 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent mb-6">
          Experience Journey
        </h3>
        <div className="mt-8 flex items-center justify-center">
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-80"></div>
        </div>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Central Timeline Line */}
        <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 opacity-30"></div>
        
        {/* Animated Timeline Line */}
        <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 animate-pulse" 
             style={{ 
               height: `${Math.min(visibleItems.size * 25, 100)}%`,
               transition: 'height 1s ease-out'
             }}>
        </div>

        {/* Timeline Items */}
        <div className="space-y-12 md:space-y-20">
          {experiences.map((exp, index) => {
            const isVisible = visibleItems.has(exp.id);
            const isEven = index % 2 === 0;
            const IconComponent = exp.icon;

            return (
              <div
                key={exp.id}
                data-timeline-item
                data-id={exp.id}
                className={`relative transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline Node */}
                <div className={`absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 rounded-full border-4 border-gray-900 bg-gradient-to-r ${exp.color} shadow-lg z-20 transition-all duration-500 ${
                  isVisible ? 'scale-100 shadow-2xl' : 'scale-0'
                }`}>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent"></div>
                </div>

                {/* Pulsing Ring Animation */}
                <div className={`absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r ${exp.color} opacity-30 animate-ping z-10 ${
                  isVisible ? 'block' : 'hidden'
                }`} style={{ animationDelay: `${index * 0.5}s` }}></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  isEven ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                } ${isVisible ? 'animate-fade-in-up' : ''}`}>
                  
                  <div 
                    className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer ${
                      activeItem === exp.id ? 'ring-2 ring-purple-500/50' : ''
                    }`}
                    onClick={() => setActiveItem(activeItem === exp.id ? null : exp.id)}
                  >
                    {/* Gradient Border Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px] rounded-2xl`}>
                      <div className="w-full h-full bg-gray-900 rounded-2xl"></div>
                    </div>

                    {/* Glass morphism overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>

                    {/* Content */}
                    <div className="relative z-10 p-8">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${exp.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="flex items-center text-gray-400 text-sm mb-1">
                            <CalendarIcon className="h-4 w-4 mr-1" />
                            {exp.period}
                          </div>
                          <span className="text-xs text-gray-500 bg-gray-800/50 px-2 py-1 rounded-full">
                            {exp.duration}
                          </span>
                        </div>
                      </div>

                      {/* Title and Company */}
                      <div className="mb-4">
                        <h3 className={`text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:${exp.color} group-hover:bg-clip-text transition-all duration-300`}>
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-gray-300 mb-2">
                          <span className="font-semibold">{exp.company}</span>
                          <span className="mx-2">•</span>
                          <span className="text-sm">{exp.type}</span>
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <MapPinIcon className="h-4 w-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${exp.color} text-white shadow-lg hover:scale-110 transition-transform duration-200`}
                              style={{ animationDelay: `${i * 100}ms` }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements - Expandable */}
                      <div className={`transition-all duration-500 overflow-hidden ${
                        activeItem === exp.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Key Achievements</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start text-gray-300">
                              <ChevronRightIcon className="h-4 w-4 mt-0.5 mr-2 text-cyan-400 flex-shrink-0" />
                              <span className="text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Expand/Collapse Indicator */}
                      <div className="mt-4 pt-4 border-t border-gray-700/50">
                        <div className="flex items-center justify-center text-gray-500 text-sm">
                          <span>{activeItem === exp.id ? 'Click to collapse' : 'Click to expand'}</span>
                          <ChevronRightIcon className={`h-4 w-4 ml-1 transition-transform duration-300 ${
                            activeItem === exp.id ? 'rotate-90' : ''
                          }`} />
                        </div>
                      </div>
                    </div>

                    {/* Animated corner accents */}
                    <div className={`absolute top-0 left-0 w-16 h-16 bg-gradient-to-br ${exp.color} opacity-10 group-hover:opacity-20 rounded-br-full transition-opacity duration-500`}></div>
                    <div className={`absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl ${exp.color} opacity-10 group-hover:opacity-20 rounded-tl-full transition-opacity duration-500`}></div>
                  </div>
                </div>

                {/* Connection Line to Next Item */}
                {index < experiences.length - 1 && (
                  <div className={`hidden md:block absolute ${
                    isEven ? 'left-1/2 right-0' : 'left-0 right-1/2'
                  } top-6 h-px bg-gradient-to-r ${exp.color} opacity-20`}
                  style={{ width: '45%' }}></div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ExperienceTimeline;