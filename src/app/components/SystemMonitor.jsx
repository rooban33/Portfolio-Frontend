// pages/projects/system-monitor.js or app/projects/system-monitor/page.js (depending on your Next.js version)
"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import { 
  Monitor, 
  Download, 
  Star, 
  Cpu, 
  HardDrive, 
  Wifi, 
  Battery, 
  MessageSquare,
  BarChart3,
  Zap,
  Shield,
  Users,
  Mail,
  X,
  CheckCircle
} from 'lucide-react';

export default function SystemMonitorPage() {
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Replace this with your actual Google Drive link
  const DOWNLOAD_LINK = "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing";

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle email input change
  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setIsValidEmail(validateEmail(emailValue));
  };

  // Handle download process
  const handleDownload = async (e) => {
    e.preventDefault();
    if (!email || !isValidEmail) return;

    setIsSubmitting(true);
    
    // Log email to console (you can see this in browser dev tools)
    console.log('Download request from:', email);
    console.log('Timestamp:', new Date().toISOString());
    
    // Optional: Store in localStorage for your reference
    const downloadRequests = JSON.parse(localStorage.getItem('downloadRequests') || '[]');
    downloadRequests.push({
      email,
      project: 'system-monitor',
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('downloadRequests', JSON.stringify(downloadRequests));

    // Simulate processing time
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      
      // Redirect to Google Drive link
      window.open(DOWNLOAD_LINK, '_blank');
      
      // Close modal after 3 seconds
      setTimeout(() => {
        setShowDownloadModal(false);
        setSubmitted(false);
        setEmail('');
        setIsValidEmail(false);
      }, 3000);
    }, 1000);
  };

  const features = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Real-Time CPU Monitoring",
      description: "Live CPU usage, temperature, and core performance tracking"
    },
    {
      icon: <HardDrive className="w-6 h-6" />,
      title: "Smart Storage Management",
      description: "AI-powered cleanup suggestions and duplicate file detection"
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Network Speed Testing",
      description: "Real network speed measurement with multiple CDN tests"
    },
    {
      icon: <Battery className="w-6 h-6" />,
      title: "Battery Health Monitor",
      description: "Cross-platform battery status and health analysis"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "AI Performance Assistant",
      description: "Chat with Gemini AI about your system performance"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Interactive Dashboard",
      description: "Beautiful charts and real-time performance visualization"
    }
  ];

  const techStack = [
    { name: "React", color: "bg-blue-500" },
    { name: "Electron", color: "bg-cyan-500" },
    { name: "Node.js", color: "bg-green-500" },
    { name: "Gemini AI", color: "bg-purple-500" },
    { name: "systeminformation", color: "bg-orange-500" },
    { name: "Chart.js", color: "bg-pink-500" }
  ];

  return (
    <>
      <Head>
        <title>System Monitor - Desktop Performance Tool | Your Portfolio</title>
        <meta name="description" content="A comprehensive desktop system monitoring application with AI-powered performance analysis and real-time metrics." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-6 py-12"
        >
          <div className="text-center mb-16">
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <Monitor className="w-12 h-12 text-purple-400" />
              <h1 className="text-5xl font-bold text-white">System Monitor</h1>
            </motion.div>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              A powerful desktop application that combines real-time system monitoring with AI-powered performance analysis. 
              Monitor CPU, RAM, storage, network, and get intelligent optimization suggestions.
            </p>

            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
                <span className="text-white ml-2">Performance Tool</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <Users className="w-5 h-5" />
                <span className="text-white">Desktop Application</span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowDownloadModal(true)}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-3 mx-auto hover:shadow-2xl transition-all duration-300"
            >
              <Download className="w-6 h-6" />
              Download Trial Version
            </motion.button>
          </div>
        </motion.div>

        {/* Hero Screenshot */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="container mx-auto px-6 mb-16"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 p-4">
            <Image
              src="/images/about.jpeg" // Add your main dashboard screenshot
              alt="System Monitor Dashboard"
              width={1200}
              height={700}
              className="rounded-xl w-full"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="container mx-auto px-6 py-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Powerful Features
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="text-purple-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Screenshots Gallery */}
        <div className="container mx-auto px-6 py-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Application Screenshots
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/images/about.jpeg" // Add storage management screenshot
                  alt="Storage Management Interface"
                  width={600}
                  height={400}
                  className="w-full"
                />
                <div className="absolute bottom-4 left-4 bg-black/80 text-white px-4 py-2 rounded-lg">
                  <h4 className="font-semibold">Smart Storage Management</h4>
                </div>
              </div>
              
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/images/about.jpeg" // Add chatbot screenshot
                  alt="AI Performance Assistant"
                  width={600}
                  height={400}
                  className="w-full"
                />
                <div className="absolute bottom-4 left-4 bg-black/80 text-white px-4 py-2 rounded-lg">
                  <h4 className="font-semibold">AI Performance Assistant</h4>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/images/about.jpeg" // Add performance charts screenshot
                  alt="Real-time Performance Charts"
                  width={600}
                  height={400}
                  className="w-full"
                />
                <div className="absolute bottom-4 left-4 bg-black/80 text-white px-4 py-2 rounded-lg">
                  <h4 className="font-semibold">Real-time Performance Charts</h4>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Key Highlights</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    Real-time system monitoring
                  </li>
                  <li className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-green-400" />
                    Safe file cleanup suggestions
                  </li>
                  <li className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-blue-400" />
                    AI-powered performance analysis
                  </li>
                  <li className="flex items-center gap-3">
                    <Monitor className="w-5 h-5 text-purple-400" />
                    Cross-platform compatibility
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="container mx-auto px-6 py-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Built With
          </motion.h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`${tech.color} text-white px-6 py-3 rounded-full font-semibold shadow-lg`}
              >
                {tech.name}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Download Modal */}
        {showDownloadModal && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full relative"
            >
              <button
                onClick={() => setShowDownloadModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>

              {!submitted ? (
                <div>
                  <div className="text-center mb-6">
                    <Download className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Download Trial Version</h3>
                    <p className="text-gray-600">
                      This is a trial version. We're looking for your feedback as we have the next version ready to launch!
                    </p>
                  </div>

                  <form onSubmit={handleDownload}>
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="email"
                          value={email}
                          onChange={handleEmailChange}
                          required
                          className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
                            email && !isValidEmail ? 'border-red-300 bg-red-50' : 
                            email && isValidEmail ? 'border-green-300 bg-green-50' : 
                            'border-gray-300'
                          }`}
                          placeholder="your@email.com"
                        />
                      </div>
                      {email && !isValidEmail && (
                        <p className="text-red-500 text-sm mt-1">Please enter a valid email address</p>
                      )}
                      {email && isValidEmail && (
                        <p className="text-green-500 text-sm mt-1">Email looks good!</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting || !isValidEmail || !email}
                      className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                        isValidEmail && email
                          ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {isSubmitting ? 'Processing...' : 'Download Now'}
                    </button>
                  </form>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    By downloading, you agree to provide feedback to help us improve the application.
                  </p>
                </div>
              ) : (
                <div className="text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Download Started!</h3>
                  <p className="text-gray-600">
                    Thank you! Your download should begin shortly. We'd love to hear your feedback!
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </div>
    </>
  );
}