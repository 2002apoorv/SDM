import { motion } from 'framer-motion';
import { useState } from 'react';
import Lottie from 'lottie-react';
import innovationAnimation4 from '../assets/innovation4.json';
import { 
  Code, Shield, Brain, Cloud, Smartphone, BarChart3, 
  ArrowRight, CheckCircle, Star, Users, Zap, Award,
  Clock, Target, TrendingUp, Globe, Lock, Settings
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Crafting beautiful, fast, and scalable websites using modern frameworks and cutting-edge technologies.",
    icon: <Code className="w-10 h-10" />,
    features: [
      "Responsive Design & Mobile-First Approach",
      "Progressive Web Apps (PWA)",
      "E-commerce Solutions",
      "Content Management Systems",
      "API Development & Integration",
      "Performance Optimization"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "Next.js", "TypeScript"],
    pricing: {
      basic: "₹5,000",
      standard: "₹12,000",
      premium: "₹25,000+"
    },
    timeline: "4-12 weeks",
    caseStudy: {
      title: "E-commerce Platform",
      description: "Built a scalable e-commerce solution that increased sales by 300%",
      metrics: ["300% Sales Increase", "50% Faster Load Times", "99.9% Uptime"]
    }
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.",
    icon: <Shield className="w-10 h-10" />,
    features: [
      "Security Audits & Assessments",
      "Penetration Testing",
      "Vulnerability Management",
      "Security Training & Awareness",
      "Incident Response Planning",
      "Compliance & Governance"
    ],
    technologies: ["OWASP", "NIST", "ISO 27001", "GDPR", "SOC 2", "PCI DSS"],
    pricing: {
      basic: "₹3,000",
      standard: "₹8,000",
      premium: "₹15,000+"
    },
    timeline: "2-8 weeks",
    caseStudy: {
      title: "Financial Institution Security",
      description: "Implemented comprehensive security framework for a regional bank",
      metrics: ["100% Compliance", "Zero Security Breaches", "50% Risk Reduction"]
    }
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    description: "Building intelligent systems using advanced algorithms and data-driven models for automation and prediction.",
    icon: <Brain className="w-10 h-10" />,
    features: [
      "Predictive Analytics & Forecasting",
      "Natural Language Processing",
      "Computer Vision Solutions",
      "Recommendation Systems",
      "Process Automation",
      "Custom AI Models"
    ],
    technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Hugging Face", "AWS SageMaker"],
    pricing: {
      basic: "₹8,000",
      standard: "₹20,000",
      premium: "₹50,000+"
    },
    timeline: "6-16 weeks",
    caseStudy: {
      title: "Predictive Analytics Platform",
      description: "Developed ML models that improved decision accuracy by 85%",
      metrics: ["85% Accuracy Improvement", "70% Time Savings", "ROI: 400%"]
    }
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment solutions for modern applications with high availability.",
    icon: <Cloud className="w-10 h-10" />,
    features: [
      "Cloud Migration & Strategy",
      "Serverless Architecture",
      "Container Orchestration",
      "Cloud Security & Compliance",
      "DevOps & CI/CD",
      "Cost Optimization"
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
    pricing: {
      basic: "₹4,000",
      standard: "₹10,000",
      premium: "₹25,000+"
    },
    timeline: "3-10 weeks",
    caseStudy: {
      title: "Multi-Cloud Migration",
      description: "Migrated legacy systems to cloud, reducing costs by 60%",
      metrics: ["60% Cost Reduction", "99.9% Uptime", "50% Faster Deployment"]
    }
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android with exceptional user experience.",
    icon: <Smartphone className="w-10 h-10" />,
    features: [
      "iOS & Android Development",
      "Cross-platform Solutions",
      "Mobile UI/UX Design",
      "App Store Optimization",
      "Push Notifications",
      "Offline Capabilities"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "App Store Connect"],
    pricing: {
      basic: "₹6,000",
      standard: "₹15,000",
      premium: "₹35,000+"
    },
    timeline: "6-14 weeks",
    caseStudy: {
      title: "Healthcare Mobile App",
      description: "Built a HIPAA-compliant mobile app serving 100K+ users",
      metrics: ["100K+ Active Users", "4.8 App Store Rating", "HIPAA Compliant"]
    }
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    description: "Transform your data into actionable insights with advanced analytics and visualization solutions.",
    icon: <BarChart3 className="w-10 h-10" />,
    features: [
      "Business Intelligence Dashboards",
      "Data Visualization",
      "Big Data Processing",
      "Real-time Analytics",
      "Data Warehousing",
      "Predictive Modeling"
    ],
    technologies: ["Tableau", "Power BI", "Python", "R", "Apache Spark", "Snowflake"],
    pricing: {
      basic: "₹5,000",
      standard: "₹12,000",
      premium: "₹30,000+"
    },
    timeline: "4-12 weeks",
    caseStudy: {
      title: "Retail Analytics Platform",
      description: "Created analytics dashboard that increased revenue by 25%",
      metrics: ["25% Revenue Increase", "Real-time Insights", "90% User Adoption"]
    }
  }
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We analyze your requirements, goals, and constraints to create a comprehensive project plan.",
    icon: <Target className="w-8 h-8" />
  },
  {
    step: "02",
    title: "Design & Architecture",
    description: "Our team designs the solution architecture and creates detailed technical specifications.",
    icon: <Settings className="w-8 h-8" />
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "We build your solution using agile methodologies with continuous testing and quality assurance.",
    icon: <Code className="w-8 h-8" />
  },
  {
    step: "04",
    title: "Deployment & Support",
    description: "We deploy your solution and provide ongoing support, maintenance, and optimization.",
    icon: <Zap className="w-8 h-8" />
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 text-gray-800 relative">
      {/* Background Animation */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none opacity-30">
        <Lottie animationData={innovationAnimation4} loop={true} />
      </div>
      {/* Main Content (z-10) */}
      <div className="relative z-10">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 md:px-10 bg-gradient-to-r from-blue-700 to-purple-700 text-white">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
            Discover the comprehensive range of technical expertise SDM Consultancy brings to help your business grow digitally and securely.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-green-400" />
              <span>Secure Solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-300" />
              <span>Expert Support</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-purple-300" />
              <span>Quality Guaranteed</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center text-white mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                          <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.slice(0, 4).map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Starting from</span>
                      <span className="font-bold text-blue-600">{service.pricing.basic}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm mt-1">
                      <span className="text-gray-600">Timeline</span>
                      <span className="font-medium text-gray-900">{service.timeline}</span>
                    </div>
                  </div>
                </div>

                <button 
                  className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                  onClick={(e) => { e.stopPropagation(); navigate('/contact'); }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and maximum value for your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center text-white mx-auto mb-6 text-2xl font-bold">
                  {step.step}
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 md:px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Popular Tiers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our commitment to quality and support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                description: "Perfect for small projects and startups",
                features: [
                  "Core functionality",
                  "Basic customization",
                  "Email support",
                  "30-day warranty",
                  "Documentation"
                ]
              },
              {
                name: "Standard",
                description: "Ideal for growing businesses",
                features: [
                  "Advanced features",
                  "Full customization",
                  "Priority support",
                  "90-day warranty",
                  "Training sessions",
                  "Performance optimization"
                ],
                popular: true
              },
              {
                name: "Premium",
                description: "Enterprise-grade solutions",
                features: [
                  "Custom development",
                  "Dedicated support",
                  "1-year warranty",
                  "Ongoing maintenance",
                  "Scalability planning",
                  "Security audits"
                ]
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl shadow-xl p-8 relative ${
                  plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{plan.price}</div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  onClick={() => navigate('/counselling')}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 md:px-10 bg-gradient-to-r from-blue-700 to-purple-700 text-white text-center">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            Let's discuss your project requirements and find the perfect solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/counselling"
              className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Book Free Consultation
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300"
            >
              Get a Quote
            </a>
          </div>
        </motion.div>
      </section>
      </div>
    </div>
  );
};

export default Services; 