"use client";
import React, { useState, useEffect } from "react";
import { TrophyIcon, StarIcon, CalendarIcon, LinkIcon } from "@heroicons/react/24/outline";
import { TrophyIcon as TrophySolid, StarIcon as StarSolid } from "@heroicons/react/24/solid";

const AchievementCard = ({ 
  imgUrl, 
  title, 
  description, 
  category, 
  date, 
  organization, 
  certificateUrl, 
  skills,
  index 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 150);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div 
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 transform transition-all duration-700 hover:scale-105 hover:-translate-y-2 min-h-[400px] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{
        background: `linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.6) 100%), url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      {/* Animated border gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px] rounded-2xl">
        <div className="w-full h-full bg-gray-900 rounded-2xl"></div>
      </div>

      {/* Glass morphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

      {/* Content container */}
      <div className="relative z-10 p-8 h-full flex flex-col justify-end" style={{"paddingTop":"14rem"}}>
        {/* Floating particles effect */}
        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>

        {/* Text content with dark overlay background */}
        <div className="bg-gradient-to-t from-black/90 via-black/70 to-transparent pt-8 pb-4 px-2 -mx-8 -mb-8 mt-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
            {title}
          </h3>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4 group-hover:text-white transition-colors duration-300">
            {description}
          </p>
          
          <div className="flex items-center text-gray-400 text-sm mb-2 group-hover:text-gray-200 transition-colors duration-300">
            <CalendarIcon className="h-4 w-4 mr-2" />
            <span>{date}</span>
          </div>
          <div className="text-cyan-400 font-medium text-base group-hover:text-cyan-300 transition-colors duration-300">
            {organization}
          </div>
        </div>

        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>

      {/* Animated corner accents */}
      <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-purple-500/30 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-cyan-500/30 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

const AchievementSection = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Achievement data array
  const achievements = [
    {
      imgUrl: "/images/melinia.jpg",
      title: "Mr.MELINIA",
      description: "Overall best individual performer of Melinia-2k24 national level Technical Symposium",
      organization: "MELINIA'24",
      date: "Mar 2024",
    },
    {
      imgUrl: "/images/tg.jpg",
      title: "THOROGOOD STAR AWARD",
      description: "Awarded for showing exceptional passion and commitment at work.",
      date: "Nov 2024",
      organization: "THOROGOOD",
    },
    
  ];

  const categories = ['all', ...new Set(achievements.map(achievement => achievement.category))];

  const filteredAchievements = achievements.filter(achievement => {
    const matchesFilter = filter === 'all' || achievement.category === filter;
    const matchesSearch = achievement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         achievement.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Header section */}
      <div className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center justify-center space-x-2 mb-4">
          <h4 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Achievements
          </h4>
        </div>
        
        {/* Decorative line */}
        <div className="mt-8 flex items-center justify-center">
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-64"></div>
        </div>
      </div>

      {/* Controls section */}
      <div className="mb-12 relative z-10">
      </div>

      {/* Achievements grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center relative z-10 max-w-6xl mx-auto">
        {filteredAchievements.map((achievement, index) => (
          <div key={index} className="w-full max-w-md">
            <AchievementCard
              {...achievement}
              index={index}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchievementSection;