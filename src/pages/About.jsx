import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { Target, Users, Shield, Zap, Award, TrendingUp, Globe, Heart, CheckCircle, Star, ArrowRight } from 'lucide-react';
import innovationAnimation from '../assets/innovation1.json';

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering solutions that exceed expectations and drive measurable results."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and foster strong partnerships with our clients and within our team."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security",
      description: "Security is at the core of everything we do, ensuring your digital assets are protected and compliant."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions to solve complex business challenges."
    }
  ];

  const achievements = [
    {
      number: "50+",
      label: "Projects Delivered",
      description: "Successfully completed projects across various industries"
    },
    {
      number: "15+",
      label: "Industries Served",
      description: "From startups to Fortune 500 companies"
    },
    {
      number: "8+",
      label: "Team Members",
      description: "Expert professionals with diverse skills"
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      description: "Consistent positive feedback and long-term partnerships"
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock technical support and maintenance"
    },
    {
      number: "3+",
      label: "Years Experience",
      description: "Deep expertise in modern technologies and methodologies"
    }
  ];

  const timeline = [
    {
      year: "2021",
      title: "Foundation",
      description: "SDM Consultancy was founded with a vision to transform businesses through innovative technology solutions."
    },
    {
      year: "2022",
      title: "Growth & Expansion",
      description: "Expanded our team and service offerings, serving clients across multiple industries and geographies."
    },
    {
      year: "2023",
      title: "Innovation Hub",
      description: "Launched our AI/ML division and established partnerships with leading technology providers."
    },
    {
      year: "2024",
      title: "Global Reach",
      description: "Achieved international recognition and expanded our global client base with remote-first operations."
    }
  ];

  const testimonials = [
    {
      name: "Sonam Singh",
      role: "CTO, TechCorp",
      text: "SDM Consultancy transformed our entire digital infrastructure. Their expertise in cybersecurity and web development is unmatched.",
      rating: 5
    },
    {
      name: "Manoj Dev",
      role: "CEO, DigiLogistics",
      text: "Working with SDM has been a game-changer for our business. Their AI solutions helped us automate 70% of our processes.",
      rating: 5
    },
    {
      name: "Emma Rodrigh",
      role: "Product Manager, InnovateLab",
      text: "The team at SDM is incredibly professional and talented. They delivered our project on time and exceeded our expectations.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 text-gray-800 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0 opacity-5">
        <Lottie
          animationData={innovationAnimation}
          loop={true}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
            About SDM Consultancy
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're a dynamic team of innovators, problem-solvers, and technology enthusiasts dedicated to transforming businesses through cutting-edge digital solutions.
          </p>
        </motion.div>

        {/* Company Story */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Founded in 2021, SDM Consultancy emerged from a shared vision to bridge the gap between complex technology and business success. Our founders recognized that many organizations struggled to harness the full potential of digital transformation.
                </p>
                <p>
                  What started as a small team of passionate developers has grown into a comprehensive technology consultancy serving clients worldwide. We've maintained our commitment to innovation, security, and client success throughout our journey.
                </p>
                <p>
                  Today, we're proud to be trusted partners for businesses ranging from innovative startups to established enterprises, helping them navigate the digital landscape with confidence and achieve sustainable growth.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose SDM?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Expert team with diverse technical backgrounds</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Proven track record of successful project delivery</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Cutting-edge technology stack and methodologies</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Comprehensive security and compliance focus</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Ongoing support and maintenance services</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Mission & Vision */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To empower businesses with innovative, secure, and scalable technology solutions that drive growth, efficiency, and competitive advantage in the digital economy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the leading technology consultancy that shapes the future of digital transformation, known for innovation, reliability, and exceptional client success.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Core Values */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape our relationships with clients, partners, and each other.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Achievements */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600">
              Numbers that tell our story of growth, innovation, and client success.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{achievement.number}</div>
                <div className="text-sm font-semibold text-gray-900 mb-1">{achievement.label}</div>
                <div className="text-xs text-gray-600">{achievement.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              From humble beginnings to becoming a trusted technology partner.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg"></div>
                  </div>
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from the businesses we've helped transform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-700 to-purple-700 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work Together?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Let's discuss how SDM Consultancy can help transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/counselling"
                className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
