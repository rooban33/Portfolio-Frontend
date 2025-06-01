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
  User,
  Phone,
  X,
  CheckCircle
} from 'lucide-react';

export default function SystemMonitorPage() {
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: ''
  });
  const [validationErrors, setValidationErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Replace this with your actual Google Drive link
  const DOWNLOAD_LINK = "https://drive.google.com/drive/folders/12ds5xAbM9rZxBCGC_OlFfWgd_yLsXCO4?usp=drive_link";
  
  // Replace with your Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxrBvwpzpJicMLNJECjhQfM1X9mT1AHyD4A4Sp50yXEc3-TuU05vhtq-2rSMN39pYU/exec";

  // Validation functions
  const validateName = (name) => {
    return name.trim().length >= 2;
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateWhatsApp = (phone) => {
    // Remove all non-digits
    const cleaned = phone.replace(/\D/g, '');
    // Check if it's 10-15 digits (common range for international numbers)
    return cleaned.length >= 10 && cleaned.length <= 15;
  };

  // Handle form input changes
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Real-time validation
    const errors = { ...validationErrors };
    
    switch (field) {
      case 'name':
        if (validateName(value)) {
          delete errors.name;
        } else {
          errors.name = 'Name must be at least 2 characters long';
        }
        break;
      case 'email':
        if (validateEmail(value)) {
          delete errors.email;
        } else {
          errors.email = 'Please enter a valid email address';
        }
        break;
      case 'whatsapp':
        if (validateWhatsApp(value)) {
          delete errors.whatsapp;
        } else {
          errors.whatsapp = 'Please enter a valid WhatsApp number (10-15 digits)';
        }
        break;
    }
    
    setValidationErrors(errors);
  };

  // Format WhatsApp number for display
  const formatWhatsAppNumber = (value) => {
    // Remove all non-digits
    const cleaned = value.replace(/\D/g, '');
    // Format as: +1 (234) 567-8901 for US numbers, or just add + for international
    if (cleaned.length === 10) {
      return `+1 (${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
    } else if (cleaned.length > 10) {
      return `+${cleaned}`;
    }
    return cleaned;
  };

  // Check if form is valid
  const isFormValid = () => {
    return validateName(formData.name) && 
           validateEmail(formData.email) && 
           validateWhatsApp(formData.whatsapp) &&
           Object.keys(validationErrors).length === 0;
  };

  // Handle download process
  const handleDownload = async (e) => {
    e.preventDefault();
    if (!isFormValid()) return;

    setIsSubmitting(true);
    
    try {
      // Prepare data for Google Sheets
      const submissionData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        whatsapp: formData.whatsapp.replace(/\D/g, ''), // Store only digits
        whatsapp_formatted: formatWhatsAppNumber(formData.whatsapp),
        project: 'system-monitor',
        timestamp: new Date().toISOString(),
        user_agent: navigator.userAgent,
        referrer: document.referrer || 'direct'
      };

      // Send to Google Apps Script
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      });

      console.log('Form submitted successfully:', submissionData);
      
      // Simulate processing time for better UX
      setTimeout(() => {
        setSubmitted(true);
        setIsSubmitting(false);
        
        // Redirect to Google Drive link
        window.open(DOWNLOAD_LINK, '_blank');
        
        // Close modal after 4 seconds
        setTimeout(() => {
          setShowDownloadModal(false);
          setSubmitted(false);
          setFormData({ name: '', email: '', whatsapp: '' });
          setValidationErrors({});
        }, 4000);
      }, 1500);

    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      // Still allow download even if logging fails
      window.open(DOWNLOAD_LINK, '_blank');
    }
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
              <div className="flex items-center gap-2 text-purple-400">
                <Users className="w-5 h-5" />
                <span className="text-white">Windows Application</span>
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
        {/* <motion.div 
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
        </motion.div> */}

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
                  src="/images/storage.png" // Add storage management screenshot
                  alt="Storage Management Interface"
                  width={300}
                  height={400}
                  className="w-full"
                />
                <div className="absolute bottom-4 left-4 bg-black/80 text-white px-4 py-2 rounded-lg">
                  <h4 className="font-semibold">Smart Storage Management</h4>
                </div>
              </div>
              
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/images/chat.png" // Add chatbot screenshot
                  alt="AI Performance Assistant"
                  width={300}
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
                  src="/images/chart.png" // Add performance charts screenshot
                  alt="Real-time Performance Charts"
                  width={300}
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

        {/* Enhanced Download Modal */}
        {showDownloadModal && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl p-8 max-w-lg w-full relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setShowDownloadModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
              >
                <X className="w-6 h-6" />
              </button>

              {!submitted ? (
                <div>
                  <div className="text-center mb-8">
                    <Download className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Download Trial Version</h3>
                    <p className="text-gray-600">
                      This is a trial version. We're looking for your feedback as we have the next version ready to launch!
                    </p>
                  </div>

                  <form onSubmit={handleDownload} className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          style={{"color":"black"}}
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                          className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
                            validationErrors.name ? 'border-red-300 bg-red-50' : 
                            formData.name && !validationErrors.name ? 'border-green-300 bg-green-50' : 
                            'border-gray-300'
                          }`}
                          placeholder="Enter your full name"
                        />
                      </div>
                      {validationErrors.name && (
                        <p className="text-red-500 text-sm mt-1">{validationErrors.name}</p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="email"
                          style={{"color":"black"}}
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                          className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
                            validationErrors.email ? 'border-red-300 bg-red-50' : 
                            formData.email && !validationErrors.email ? 'border-green-300 bg-green-50' : 
                            'border-gray-300'
                          }`}
                          placeholder="your@email.com"
                        />
                      </div>
                      {validationErrors.email && (
                        <p className="text-red-500 text-sm mt-1">{validationErrors.email}</p>
                      )}
                    </div>

                    {/* WhatsApp Field */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        WhatsApp Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="tel"
                          style={{"color":"black"}}
                          value={formData.whatsapp}
                          onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                          required
                          className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
                            validationErrors.whatsapp ? 'border-red-300 bg-red-50' : 
                            formData.whatsapp && !validationErrors.whatsapp ? 'border-green-300 bg-green-50' : 
                            'border-gray-300'
                          }`}
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                      {validationErrors.whatsapp && (
                        <p className="text-red-500 text-sm mt-1">{validationErrors.whatsapp}</p>
                      )}
                      <p className="text-gray-500 text-sm mt-1">
                        Include country code (e.g., +1 for US, +91 for India)
                      </p>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting || !isFormValid()}
                      className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                        isFormValid()
                          ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Processing...
                        </div>
                      ) : (
                        'Download Now'
                      )}
                    </button>
                  </form>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    By downloading, you agree to provide feedback to help us improve the application. 
                    Your information will be used only for product updates and support.
                  </p>
                </div>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Download Started!</h3>
                  <p className="text-gray-600 mb-4">
                    Thank you, {formData.name}! Your download should begin shortly.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
                    <p className="mb-2">We'll contact you at:</p>
                    <p>📧 {formData.email}</p>
                    <p>📱 {formatWhatsAppNumber(formData.whatsapp)}</p>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    We'd love to hear your feedback and can't wait to show you what's coming next!
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