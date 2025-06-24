import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, Clock, Users, CheckCircle, Star, Phone, Mail, MapPin, ArrowRight, Shield, Brain, Laptop, Zap, Award, Headphones } from 'lucide-react';

export default function Counselling() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectDescription: '',
    budget: '',
    timeline: ''
  });

  const services = [
    {
      id: 'web-development',
      title: 'Web Development Consultation',
      description: 'Get expert advice on building scalable web applications',
      icon: <Laptop className="w-6 h-6" />,
      duration: '60 min',
      price: 'Free'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and recommendations',
      icon: <Shield className="w-6 h-6" />,
      duration: '90 min',
      price: 'Free'
    },
    {
      id: 'ai-ml',
      title: 'AI & ML Strategy',
      description: 'AI implementation roadmap and technical guidance',
      icon: <Brain className="w-6 h-6" />,
      duration: '75 min',
      price: 'Free'
    },
    {
      id: 'general',
      title: 'General Consultation',
      description: 'Broad technical consultation for your business needs',
      icon: <Headphones className="w-6 h-6" />,
      duration: '45 min',
      price: 'Free'
    }
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      text: "The consultation session was incredibly insightful. SDM helped us identify critical security gaps and provided a clear roadmap for improvement.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CEO, StartupXYZ",
      text: "Their AI consultation transformed our approach to automation. The session was professional, thorough, and immediately actionable.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager, InnovateLab",
      text: "The web development consultation saved us months of development time. Their expertise is unmatched.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "What should I prepare for the consultation?",
      answer: "Please prepare a brief overview of your project, current challenges, and any specific questions you have. Technical documentation is helpful but not required."
    },
    {
      question: "How long does a consultation session last?",
      answer: "Sessions typically last 45-90 minutes depending on the service type. We'll ensure all your questions are addressed thoroughly."
    },
    {
      question: "Is the consultation really free?",
      answer: "Yes! Our initial consultation sessions are completely free. We believe in providing value upfront to help you make informed decisions."
    },
    {
      question: "Can I reschedule my appointment?",
      answer: "Absolutely! You can reschedule up to 24 hours before your scheduled session. We'll send you a confirmation email with rescheduling options."
    },
    {
      question: "What happens after the consultation?",
      answer: "You'll receive a detailed summary of our discussion, recommendations, and next steps. If you decide to work with us, we'll create a customized proposal."
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    fetch('http://localhost:5000/counsellor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        service: selectedService,
        preferredDate: selectedDate,
        preferredTime: selectedTime,
        ...formData
      })
    });

    console.log('Booking submitted:', { selectedService, selectedDate, selectedTime, formData });
    alert('Thank you! We\'ll confirm your appointment via email shortly.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header Section */}
      <section className="py-20 px-4 sm:px-6 md:px-10 bg-gradient-to-r from-blue-700 to-purple-700 text-white">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Book Your Free Consultation
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Get expert guidance from our seasoned professionals. Transform your ideas into reality with personalized consultation sessions.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Free Initial Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-300" />
              <span>45-90 Minute Sessions</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-300" />
              <span>Expert Consultants</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Booking Form */}
          <div className="lg:col-span-2">
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Schedule Your Session</h2>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Service Selection */}
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-4">
                    Choose Your Consultation Type
                  </label>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <div
                        key={service.id}
                        className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${selectedService === service.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-300'
                          }`}
                        onClick={() => setSelectedService(service.id)}
                      >
                        <div className="flex items-start gap-3">
                          <div className="text-blue-600 mt-1">{service.icon}</div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900">{service.title}</h3>
                            <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                            <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {service.duration}
                              </span>
                              <span className="text-green-600 font-medium">{service.price}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Date and Time Selection */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-3">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-3">
                      Preferred Time
                    </label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-3">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-3">
                    Project Description *
                  </label>
                  <textarea
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Tell us about your project, challenges, and goals..."
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-3">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under ₹10,000</option>
                      <option value="10k-50k">₹10,000 - ₹50,000</option>
                      <option value="50k-100k">₹50,000 - ₹100,000</option>
                      <option value="100k-plus">₹100,000+</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-3">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-3-months">1-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-plus-months">6+ months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </div>

          {/* Right Column - Info & Testimonials */}
          <div className="space-y-8">
            {/* Contact Info */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">consult@sdm.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Available Worldwide</span>
                </div>
              </div>
            </motion.div>

            {/* What to Expect */}
            <motion.div
              className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl p-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-xl font-bold mb-4">What to Expect</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Detailed project analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Technical recommendations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Cost and timeline estimates</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Next steps roadmap</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Follow-up support</span>
                </li>
              </ul>
            </motion.div>

            {/* Testimonials */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Client Testimonials</h3>
              <div className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mb-2 italic">"{testimonial.text}"</p>
                    <p className="text-xs font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 md:px-10 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            Join hundreds of satisfied clients who've accelerated their growth with SDM Consultancy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#top"
              className="inline-block px-8 py-4 bg-white text-blue-700 font-semibold rounded-full hover:shadow-xl hover:-translate-y-1 transition"
            >
              Book Your Session
            </a>
            <a
              href="/contact"
              className="inline-block px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-700 transition"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
} 