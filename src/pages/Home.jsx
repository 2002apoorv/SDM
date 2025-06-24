import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Lottie from 'lottie-react';
import { ParallaxProvider } from 'react-scroll-parallax';
import innovationAnimation1 from '../assets/innovation.json';
import { ShieldCheck, BrainCircuit, LaptopMinimal, Mail, Phone, MapPin, ArrowRight, CheckCircle, Star, Users, Award, Zap, Sparkles, HelpCircle, X } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import Marquee from 'react-fast-marquee';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import innovationAnimation4 from '../assets/innovation7.json';
import akashImage from '../assets/akashImage.jpg';
import ritikImage from '../assets/ritikImage.jpg';
import gauravImage from '../assets/gauravImage.jpg';
import devrajImage from '../assets/devrajImage.jpg';
import apoorvImage from '../assets/apoorvImage.jpg';
import dhananjayImage from '../assets/dhananjayImage.jpg';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Subscribed email:', email);
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
      // Reset subscription status after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }, 1000);
  };

  const stats = [
    { number: "50+", label: "Projects Delivered", icon: <Award className="w-6 h-6" /> },
    { number: "15+", label: "Industries Served", icon: <Users className="w-6 h-6" /> },
    { number: "100%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Zap className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      text: "SDM Consultancy completely revamped our security infrastructure and improved performance. Stellar service!",
      author: "Mayank Yadav",
      company: "TechCorp",
      rating: 5,
      image: "/path/to/image.jpg",
    },
    {
      text: "Their AI automation cut our processing time in half. Exceptional tech & support!",
      author: "Neha Gupta",
      company: "StartupXYZ",
      rating: 5,
      image: "/path/to/neha-gupta-image.jpg",
    },
    {
      text: "The team delivered our project ahead of schedule with outstanding quality. Highly recommended!",
      author: "Devraj Dhananjay",
      company: "InnovateLab",
      rating: 5,
      image: "/path/to/devraj-dhananjay-image.jpg",
    }
  ];

  const teamPreview = [
    {
      name: 'Ritik Yadav',
      role: 'Full-Stack Developer',
      image: ritikImage,
      bio: 'Builds scalable web apps and leads product architecture.'
    },
    {
      name: 'Akash Patel',
      role: 'Cybersecurity Specialist',
      image: akashImage,
      bio: 'Secures applications and infrastructure, focuses on OWASP.'
    },
    {
      name: 'Gaurav Verma',
      role: 'Machine Learning Engineer',
      image: gauravImage,
      bio: 'Builds intelligent systems using Python and TensorFlow.'
    },
    {
      name: 'Devraj Roar',
      role: 'Data Scientist',
      image: devrajImage,
      bio: 'Transforms raw data into actionable insights.'
    },
  ];

  const timeline = [
    { year: '2021', title: 'Founded', desc: 'SDM Consultancy was founded.' },
    { year: '2022', title: 'First 50 Projects', desc: 'Delivered 50+ projects across industries.' },
    { year: '2023', title: 'AI Division Launched', desc: 'Started AI/ML solutions for clients.' },
    { year: '2024', title: 'Global Expansion', desc: 'Expanded to serve clients worldwide.' },
  ];

  return (
    <ParallaxProvider>
      {/* Animated Background - remove bottom right animation */}
      {/* Main Content (z-10) */}
      <div className="relative z-10 min-h-screen text-gray-900 overflow-y-auto">
        <div className="relative z-10">
          {/* Hero Section */}
          <section className="relative py-20 px-4 sm:px-6 md:px-10 bg-gradient-to-br from-blue-50 to-purple-100 overflow-hidden">
            <motion.div
              className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {/* Left: Animation - now using innovationAnimation4 */}
              <div className="w-64 md:w-80 lg:w-96 -ml-6 md:-ml-10">
                <Lottie animationData={innovationAnimation4} loop={true} speed={0.5} />
              </div>

              {/* Right: Text */}
              <div className="text-center md:text-left max-w-xl md:max-w-2xl">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
                  <Typewriter
                    words={["Empowering Innovation with SDM Consultancy"]}
                    loop={false}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={2000}
                  />
                </h1>
                <motion.p
                  className="text-lg md:text-xl text-gray-700 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Transforming businesses with cutting-edge Web, Cybersecurity, and AI solutions.
                </motion.p>
                <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                  <a href="/contact" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition duration-300 text-center font-semibold">
                    Get in Touch
                  </a>
                  <a href="/services" className="px-6 py-3 bg-white text-blue-700 border-2 border-blue-700 rounded-full hover:shadow-md hover:-translate-y-1 transition duration-300 text-center font-semibold">
                    Our Services
                  </a>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Marquee Section */}
          <section className="overflow-hidden bg-gradient-to-r from-blue-700 to-purple-700 py-4">
            <div className="max-w-7xl mx-auto">
              <Marquee pauseOnHover={true} gradient={false} speed={80} className="flex items-center gap-8">
                {[
                  "SEO",
                  "Mobile Development",
                  "Cyber Security",
                  "Digital Marketing",
                  "Graphic Design",
                  "App Development",
                  "Website Development",
                  "Ecommerce"
                ].map((service, idx) => (
                  <span key={idx} className="flex items-center gap-2 text-white text-lg font-medium mx-8">
                    {idx !== 0 && <Sparkles className="text-blue-300 w-7 h-7" />}
                    {service}
                  </span>
                ))}
              </Marquee>
            </div>
          </section>

          <WaveBottom />

          {/* Stats Section */}
          <section className="py-16 px-4 sm:px-6 md:px-10 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                      {stat.icon}
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* About Us */}
          <section className="py-20 px-4 sm:px-6 md:px-10 max-w-6xl mx-auto">
            <motion.div
              className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 sm:p-10 shadow-xl border border-blue-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At SDM Consultancy, we're a dynamic team of developers, strategists, and security experts dedicated to building future-ready digital ecosystems. Whether it's a startup MVP or enterprise-grade platform — we deliver with precision and passion.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/about" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </section>

          {/* Core Services */}
          <section className="py-20 px-4 sm:px-6 md:px-10 bg-gradient-to-b from-gray-50 to-white">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our Core Services
            </motion.h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: "Web Development",
                  desc: "Seamless web apps with React, Node.js, and MongoDB. Built for speed, UX, and performance.",
                  icon: <LaptopMinimal className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Cybersecurity",
                  desc: "Risk audits, secure code, and active protection to safeguard your digital assets.",
                  icon: <ShieldCheck className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "AI & ML Solutions",
                  desc: "Automate decisions and optimize workflows with custom-trained ML models.",
                  icon: <BrainCircuit className="w-8 h-8 text-blue-600" />
                }
              ].map((item, i) => (
                <motion.a
                  href="/services"
                  key={i}
                  className="block bg-white border border-gray-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
                </motion.a>
              ))}
            </div>
          </section>
          {/* Why Choose Us */}
          <section className="py-20 px-4 sm:px-6 md:px-10 bg-gradient-to-br from-blue-900 to-gray-900 text-white">
            <motion.h2
              className="text-4xl font-extrabold text-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              WHY CHOOSE US?
            </motion.h2>
            <motion.p 
              className="text-lg text-center text-blue-200 mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Find the right experts with the right team
            </motion.p>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              
              {/* Left Features */}
              <div className="flex flex-col gap-12 w-full md:w-1/3 items-center md:items-end">
                <Feature text="Client Centric Approach" description="24/7 assistance and a client-first mindset." alignment="right" />
                <Feature text="Dedicated Support" description="Skilled professionals at your service." alignment="right" />
                <Feature text="Agile Development" description="Agile, security-focused, and results-driven." alignment="right" />
              </div>

              {/* Central Question Mark */}
              <motion.div 
                className="relative my-8 md:my-0"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "backOut" }}
                viewport={{ once: true }}
              >
                <HelpCircle className="w-48 h-48 text-blue-400 opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <HelpCircle className="w-32 h-32 text-blue-300 opacity-40 animate-pulse" />
                </div>
              </motion.div>

              {/* Right Features */}
              <div className="flex flex-col gap-12 w-full md:w-1/3 items-center md:items-start">
                <Feature text="Proven Track Record" description="Proven track record of delivering results." alignment="left" />
                <Feature text="Transparent Communication" description="Expanding your presence with smart marketing." alignment="left" />
                <Feature text="Security with Modern Solutions" description="Innovative solutions for modern challenges." alignment="left" />
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-20 px-4 sm:px-6 md:px-10 bg-white">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-center text-blue-700 mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                What Our Clients Say
              </motion.h2>
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <Testimonial key={index} {...testimonial} />
                ))}
              </div>
            </div>
          </section>

          {/* Newsletter & Contact Section */}
          <section className="py-20 px-4 sm:px-6 md:px-10 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Newsletter */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-xl p-8"
                >
                  <h2 className="text-2xl font-bold mb-4 text-blue-800">Stay Updated</h2>
                  <p className="text-gray-600 mb-6">
                    Get the latest insights on technology trends, security updates, and industry best practices delivered to your inbox.
                  </p>
                  <form onSubmit={handleSubscribe} className="space-y-4">
                    <div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? 'Subscribing...' : 'Subscribe to Newsletter'}
                    </button>
                    {isSubscribed && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 text-green-600 text-sm"
                      >
                        <CheckCircle className="w-4 h-4" />
                        Successfully subscribed! Welcome to our community.
                      </motion.div>
                    )}
                  </form>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white"
                >
                  <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-white/20 p-3 rounded-full">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <p className="text-blue-100">+1 (555) 123-4567</p>
                        <p className="text-sm text-blue-200">Mon-Fri 9AM-6PM EST</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-white/20 p-3 rounded-full">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-blue-100">hello@sdmconsultancy.com</p>
                        <p className="text-sm text-blue-200">We reply within 24 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-white/20 p-3 rounded-full">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Location</h3>
                        <p className="text-blue-100">Available Worldwide</p>
                        <p className="text-sm text-blue-200">Remote-first company</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/20">
                    <a
                      href="/contact"
                      className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                      Contact Us
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-20 bg-gradient-to-r from-blue-700 to-purple-700 text-white text-center">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to elevate your business?</h2>
              <p className="text-lg sm:text-xl mb-8 opacity-90">
                Book your free strategy session with our consultants today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="/counselling"
                  className="inline-block px-10 py-4 bg-white text-blue-700 font-semibold rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  Book Free Consultation
                </a>
                <a
                  href="/contact"
                  className="inline-block px-10 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-700 transition-all duration-300"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </section>

          {/* Projects Section */}
          <section className="py-20 px-4 sm:px-6 md:px-10 bg-white">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our Projects
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  image: '/commerce.png',
                  title: 'Secure E-Commerce Platform',
                  desc: 'A robust, scalable online store with advanced security and seamless UX.'
                },
                {
                  image: '/Ai.png',
                  title: 'AI-Powered Analytics',
                  desc: 'Custom dashboards and ML models for actionable business insights.'
                },
                {
                  image: '/mobbanking.png',
                  title: 'Mobile Banking App',
                  desc: 'A user-friendly, secure mobile app for digital banking.'
                },
                {
                  image: '/healthcare.png',
                  title: 'Healthcare Portal',
                  desc: 'A HIPAA-compliant platform for patient management and telemedicine.'
                }
              ].map((proj, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedProject(proj)}
                >
                  <div className="w-full h-48 flex items-center justify-center mb-6 bg-white rounded-2xl shadow-xl border-4 border-blue-200 overflow-hidden">
                    <img src={proj.image} alt={proj.title} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-700 mb-2 text-center">{proj.title}</h3>
                  <p className="text-gray-700 text-sm text-center">{proj.desc}</p>
                </motion.div>
              ))}
              {/* New card for 'Your project is next here!' */}
              <motion.div
                className="bg-gradient-to-br from-yellow-100 to-pink-100 border-2 border-yellow-400 p-6 rounded-2xl shadow-2xl flex flex-col items-center justify-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 2 }}
                viewport={{ once: true }}
              >
                <div className="w-full h-48 flex items-center justify-center mb-6 bg-white rounded-2xl border-4 border-yellow-300 overflow-hidden">
                  <img src="/clients/yourproject.png" alt="Your Project" className="w-24 h-24 object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
                  {/* If no image, fallback to icon */}
                  <svg className="w-24 h-24 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                </div>
                <h3 className="text-2xl font-extrabold text-yellow-700 mb-2 text-center animate-pulse">Your project is next here!</h3>
                <p className="text-gray-700 text-base text-center font-medium">Let's build something amazing together.</p>
              </motion.div>
            </div>
          </section>

          {/* Trusted Clients Section (Carousel) */}
          <section className="py-16 px-4 sm:px-6 md:px-10 bg-gradient-to-r from-blue-50 to-purple-100">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-900">
                Our Trusted Clients
                <div className="w-24 h-1 bg-blue-500 mx-auto mt-2 rounded-full" />
              </h2>
              <Slider
                dots={false}
                infinite={true}
                speed={4000}
                slidesToShow={5}
                slidesToScroll={1}
                autoplay={true}
                cssEase="linear"
                responsive={[
                  { breakpoint: 1200, settings: { slidesToShow: 4 } },
                  { breakpoint: 900, settings: { slidesToShow: 3 } },
                  { breakpoint: 600, settings: { slidesToShow: 2 } },
                  { breakpoint: 400, settings: { slidesToShow: 1 } },
                ]}
                className="client-slider"
              >
                {[
                  { src: '/clients/mafia.png', alt: 'Mafia Unisex Salon' },
                  { src: '/clients/angelone.png', alt: 'Angel One' },
                  { src: '/clients/head2toe.png', alt: 'Head 2 Toe' },
                  { src: '/clients/khoobsurat.png', alt: 'Khoobsurat Collection' },
                  { src: '/clients/ngc.png', alt: 'NGC Neon Gaming Cafe' },
                  { src: '/clients/himalayanpublicschool.png', alt: 'Himalayan Public School' },
                  { src: '/clients/s.png', alt: 'S Logo' },
                  { src: '/clients/poolcampus.png', alt: 'Pool Campus' },
                  { src: '/clients/pi.png', alt: 'Pi Lightbulb' },
                  { src: '/clients/tooth.png', alt: 'Dental Clinic' },
                  { src: '/clients/ayushmanhospital.png', alt: 'Ayushman Hospital' },
                  { src: '/clients/t.png', alt: 'T Logo' },
                  { src: '/clients/skywings.png', alt: 'SkyWings' },
                ].map((client, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center px-4">
                    <img
                      src={client.src}
                      alt={client.alt}
                      className="h-32 w-auto object-contain mb-2 rounded-xl bg-white p-3 transition-transform duration-300 hover:scale-105 border-2 border-blue-200 shadow-xl font-bold"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </section>
        </div>

        <AnimatePresence>
          {selectedProject && (
            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
          )}
        </AnimatePresence>
      </div>
    </ParallaxProvider>
  );
}

function Testimonial({ text, author, company, rating }) {
  const stars = Array(rating).fill(0);

  return (
    <motion.div
      className="bg-gray-50 p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col justify-between"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <p className="text-gray-700 italic mb-4">"{text}"</p>
      <div>
        <div className="flex items-center mb-2">
          {stars.map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />)}
        </div>
        <p className="font-semibold text-blue-700">{author}</p>
        <p className="text-sm text-gray-500">{company}</p>
      </div>
    </motion.div>
  );
}

function Feature({ text, description, alignment }) {
  const textAlign = alignment === 'right' ? 'text-right' : 'text-left';
  const itemAlign = alignment === 'right' ? 'items-end' : 'items-start';

  return (
    <motion.div
      className={`flex flex-col ${itemAlign} gap-1`}
      initial={{ opacity: 0, x: alignment === 'right' ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-bold text-white">{text}</h3>
      <p className="text-blue-200">{description}</p>
      <div className="w-24 h-0.5 bg-blue-400 mt-2"/>
    </motion.div>
  );
}

function WaveBottom() {
  return (
    <div className="absolute bottom-0 left-0 w-full h-20 overflow-hidden" style={{ transform: 'translateY(1px)' }}>
      <svg className="w-full h-20" viewBox="0 0 1440 320">
        <path fill="#fff" d="M0,224L1440,320L1440,320L0,320Z" />
      </svg>
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden"
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/50 p-2 rounded-full hover:bg-white transition-colors"
          >
            <X className="w-6 h-6 text-gray-800" />
          </button>
        </div>
        <div className="p-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">{project.title}</h2>
          <p className="text-lg text-gray-700">{project.desc}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
