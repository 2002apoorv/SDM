import { useState, useRef } from "react";
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Upload, FileText, Users, Briefcase, Send, Download, Calendar, Clock } from 'lucide-react';
import Lottie from 'lottie-react';
import innovationAnimation from '../assets/innovation3.json';

const services = [
  {
    id: "web-dev",
    name: "Web Development",
    description: "Custom websites and web applications"
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    description: "Security assessments and protection"
  },
  {
    id: "ml-ai",
    name: "Machine Learning & AI",
    description: "AI solutions and data analytics"
  },
  {
    id: "cloud",
    name: "Cloud Solutions",
    description: "Cloud infrastructure and deployment"
  },
  {
    id: "mobile",
    name: "Mobile Development",
    description: "iOS and Android applications"
  },
  {
    id: "consulting",
    name: "IT Consulting",
    description: "Technology strategy and planning"
  }
];

const careerPositions = [
  {
    id: "frontend-dev",
    title: "Frontend Developer",
    type: "Full-time",
    location: "Remote",
    experience: "2-4 years"
  },
  {
    id: "backend-dev",
    title: "Backend Developer",
    type: "Full-time",
    location: "Remote",
    experience: "3-5 years"
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Remote",
    experience: "2-4 years"
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    type: "Full-time",
    location: "Remote",
    experience: "3-5 years"
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    type: "Full-time",
    location: "Remote",
    experience: "2-4 years"
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    inquiryType: "general"
  });

  const [careerFormData, setCareerFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    coverLetter: "",
    portfolio: ""
  });

  const [selectedService, setSelectedService] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);
  const [activeTab, setActiveTab] = useState("contact");
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'service') {
      const service = services.find(s => s.id === value);
      setSelectedService(service);
    }
  };

  const handleCareerChange = (e) => {
    const { name, value } = e.target;
    setCareerFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'position') {
      const position = careerPositions.find(p => p.id === value);
      setSelectedPosition(position);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        alert("File size should be less than 5MB");
        return;
      }
      if (!file.type.includes('pdf') && !file.type.includes('doc') && !file.type.includes('docx')) {
        alert("Please upload PDF, DOC, or DOCX files only");
        return;
      }
      setResumeFile(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    console.log("Contact Form Submitted:", formData);
    alert("Thank you for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "", inquiryType: "general" });
    setSelectedService(null);
  };

  const handleCareerSubmit = async (e) => {
  e.preventDefault();

  // Create FormData to send both text + file
  const formData = new FormData();
  formData.append("name", careerFormData.name);
  formData.append("email", careerFormData.email);
  formData.append("phone", careerFormData.phone);
  formData.append("position", careerFormData.position || selectedPosition);  // fallback
  formData.append("experience", careerFormData.experience);
  formData.append("coverLetter", careerFormData.coverLetter);
  formData.append("portfolio", careerFormData.portfolio);
  formData.append("resume", resumeFile);  // your PDF file

  try {
    const response = await fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to upload");
    }

    const result = await response.json();
    console.log("Server Response:", result);

    alert("Thank you for your application! We'll review your resume and get back to you soon.");

    // Clear form fields
    setCareerFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      coverLetter: "",
      portfolio: ""
    });
    setSelectedPosition(null);
    setResumeFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

  } catch (error) {
    console.error("Error uploading form:", error);
    alert("Something went wrong while submitting the form. Please try again.");
  }
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 text-gray-800 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Lottie
          animationData={innovationAnimation}
          loop={true}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss your project, explore career opportunities, or answer any questions you have.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-xl p-2 shadow-lg">
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveTab("contact")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === "contact"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                <Send className="w-4 h-4 inline mr-2" />
                Contact Us
              </button>
              <button
                onClick={() => setActiveTab("career")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === "career"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                <Briefcase className="w-4 h-4 inline mr-2" />
                Join Our Team
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8 h-fit"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">hello@sdmconsultancy.com</p>
                    <p className="text-sm text-gray-500">We reply within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">Available Worldwide</p>
                    <p className="text-sm text-gray-500">Remote-first company</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
                <div className="space-y-3">
                  <a href="/counselling" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
                    <Calendar className="w-4 h-4" />
                    Book Free Consultation
                  </a>
                  <a href="/services" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
                    <FileText className="w-4 h-4" />
                    View Our Services
                  </a>
                  <a href="/team" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
                    <Users className="w-4 h-4" />
                    Meet Our Team
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Main Form Area */}
          <div className="lg:col-span-2">
            {activeTab === "contact" ? (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Inquiry Type *
                      </label>
                      <select
                        name="inquiryType"
                        required
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="project">Project Discussion</option>
                        <option value="consultation">Free Consultation</option>
                        <option value="partnership">Partnership</option>
                        <option value="support">Technical Support</option>
                      </select>
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Service Interested In
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service.id} value={service.id}>
                            {service.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {selectedService && (
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h4 className="font-medium text-blue-800">{selectedService.name}</h4>
                      <p className="text-sm text-blue-600">{selectedService.description}</p>
                    </div>
                  )}

                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows="5"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your project, requirements, or any questions you have..."
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">* Required fields</p>
                    <button
                      type="submit"
                      className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300 font-semibold"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-8"
              >
                {/* Career Opportunities */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Open Positions</h2>
                  <div className="grid gap-4">
                    {careerPositions.map((position) => (
                      <div key={position.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-gray-900">{position.title}</h3>
                            <div className="flex gap-4 mt-2 text-sm text-gray-600">
                              <span className="flex items-center gap-1">
                                <Briefcase className="w-4 h-4" />
                                {position.type}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {position.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {position.experience}
                              </span>
                            </div>
                          </div>
                          <button
                            onClick={() => {
                              setSelectedPosition(position);
                              setCareerFormData(prev => ({ ...prev, position: position.id }));
                            }}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                          >
                            Apply Now
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Career Application Form */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Apply for Position</h2>
                  
                  <form onSubmit={handleCareerSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={careerFormData.name}
                          onChange={handleCareerChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={careerFormData.email}
                          onChange={handleCareerChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={careerFormData.phone}
                          onChange={handleCareerChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>

                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                          Position *
                        </label>
                        <select
                          name="position"
                          required
                          value={careerFormData.position}
                          onChange={handleCareerChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select a position</option>
                          {careerPositions.map((position) => (
                            <option key={position.id} value={position.id}>
                              {position.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {selectedPosition && (
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <h4 className="font-medium text-blue-800">{selectedPosition.title}</h4>
                        <div className="flex gap-4 mt-2 text-sm text-blue-600">
                          <span>{selectedPosition.type}</span>
                          <span>•</span>
                          <span>{selectedPosition.location}</span>
                          <span>•</span>
                          <span>{selectedPosition.experience} experience</span>
                        </div>
                      </div>
                    )}

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Years of Experience *
                      </label>
                      <select
                        name="experience"
                        required
                        value={careerFormData.experience}
                        onChange={handleCareerChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select experience level</option>
                        <option value="0-1">0-1 years</option>
                        <option value="1-3">1-3 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="5-8">5-8 years</option>
                        <option value="8+">8+ years</option>
                      </select>
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Resume/CV *
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileUpload}
                          className="hidden"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="text-blue-600 hover:text-blue-700 font-medium"
                        >
                          {resumeFile ? resumeFile.name : "Click to upload resume"}
                        </button>
                        <p className="text-sm text-gray-500 mt-1">
                          PDF, DOC, or DOCX (max 5MB)
                        </p>
                      </div>
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Portfolio URL
                      </label>
                      <input
                        type="url"
                        name="portfolio"
                        value={careerFormData.portfolio}
                        onChange={handleCareerChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="https://your-portfolio.com"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Cover Letter
                      </label>
                      <textarea
                        name="coverLetter"
                        rows="4"
                        value={careerFormData.coverLetter}
                        onChange={handleCareerChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Tell us why you'd be a great fit for this position..."
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-500">* Required fields</p>
                      <button
                        type="submit"
                        className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300 font-semibold"
                      >
                        Submit Application
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
