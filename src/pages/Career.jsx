import { motion } from 'framer-motion';
import { Briefcase, Users, Award, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const positions = [
  {
    title: 'Frontend Developer',
    type: 'Full-time',
    location: 'Remote',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=facearea&w=400&h=400&q=80',
    description: 'Build beautiful, performant web apps using React and modern JS frameworks.',
    requirements: [
      '2+ years experience with React',
      'Strong CSS/JS skills',
      'Familiarity with REST APIs',
    ],
  },
  {
    title: 'Backend Engineer',
    type: 'Full-time',
    location: 'Remote',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&h=400&q=80',
    description: 'Design and implement scalable backend systems using Node.js and cloud services.',
    requirements: [
      '2+ years Node.js experience',
      'Database design (MongoDB, SQL)',
      'API development',
    ],
  },
  {
    title: 'AI/ML Specialist',
    type: 'Contract',
    location: 'Remote',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=facearea&w=400&h=400&q=80',
    description: 'Develop and deploy machine learning models for real-world business problems.',
    requirements: [
      'Experience with Python ML libraries',
      'Model deployment',
      'Data analysis',
    ],
  },
];

const internships = [
  {
    title: 'Web Development Intern',
    type: 'Internship',
    location: 'Remote',
    image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=facearea&w=400&h=400&q=80',
    description: 'Learn and contribute to real-world web projects with mentorship from senior devs.',
    requirements: [
      'Basic HTML/CSS/JS',
      'Eagerness to learn',
      'Team player',
    ],
  },
  {
    title: 'AI/ML Intern',
    type: 'Internship',
    location: 'Remote',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=400&q=80',
    description: 'Work on data-driven projects and get hands-on experience with ML models.',
    requirements: [
      'Python basics',
      'Interest in AI/ML',
      'Analytical mindset',
    ],
  },
  {
    title: 'Cybersecurity Intern',
    type: 'Internship',
    location: 'Remote',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=400&h=400&q=80',
    description: 'Assist in security audits and learn about modern cybersecurity practices.',
    requirements: [
      'Interest in security',
      'Attention to detail',
      'Quick learner',
    ],
  },
];

export default function Career() {
  const [form, setForm] = useState({ name: '', email: '', position: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/careers", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });
      

    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      setForm({ name: '', email: '', position: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 text-gray-900">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 md:px-10 bg-gradient-to-r from-blue-700 to-purple-700 text-white relative overflow-hidden">
        <motion.div
          className="max-w-4xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">Careers at SDM Consultancy</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join a passionate team building the future of technology, security, and innovation.
          </p>
        </motion.div>
        <img src="/careers/hero-bg.png" alt="Career" className="absolute right-0 bottom-0 w-1/3 max-w-xs opacity-30 z-0 hidden md:block" />
      </section>

      {/* Company Values */}
      <section className="py-16 px-4 sm:px-6 md:px-10 max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Values
        </motion.h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Users className="w-8 h-8 text-blue-600" />, label: 'Collaboration',
              desc: 'We believe in teamwork, open communication, and shared success.'
            },
            {
              icon: <Award className="w-8 h-8 text-purple-600" />, label: 'Excellence',
              desc: 'We strive for the highest standards in everything we do.'
            },
            {
              icon: <Briefcase className="w-8 h-8 text-blue-600" />, label: 'Growth',
              desc: 'We support continuous learning and professional development.'
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white border border-gray-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{item.label}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 px-4 sm:px-6 md:px-10 bg-white">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Why Work With Us?
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <Award className="w-10 h-10 text-purple-600" />,
              title: 'Growth & Learning',
              desc: 'Access to courses, mentorship, and challenging projects.'
            },
            {
              icon: <Users className="w-10 h-10 text-blue-600" />,
              title: 'Collaborative Culture',
              desc: 'Work with a diverse, supportive, and fun team.'
            },
            {
              icon: <Briefcase className="w-10 h-10 text-blue-700" />,
              title: 'Impactful Work',
              desc: 'Contribute to projects that make a real difference.'
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 px-4 sm:px-6 md:px-10 bg-white">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Open Positions
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {positions.map((pos, idx) => (
            <motion.div
              key={idx}
              className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={pos.image} alt={pos.title} className="w-20 h-20 object-contain mx-auto mb-4 rounded-xl shadow" />
              <h3 className="text-xl font-bold text-blue-700 mb-2">{pos.title}</h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">{pos.type}</span>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">{pos.location}</span>
              </div>
              <p className="text-gray-700 text-sm mb-3">{pos.description}</p>
              <ul className="text-xs text-gray-600 mb-4 list-disc list-inside">
                {pos.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Internships Section */}
      <section className="py-16 px-4 sm:px-6 md:px-10 bg-white">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Internships
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {internships.map((intern, idx) => (
            <motion.div
              key={idx}
              className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={intern.image} alt={intern.title} className="w-20 h-20 object-contain mx-auto mb-4 rounded-xl shadow" />
              <h3 className="text-xl font-bold text-blue-700 mb-2">{intern.title}</h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">{intern.type}</span>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">{intern.location}</span>
              </div>
              <p className="text-gray-700 text-sm mb-3">{intern.description}</p>
              <ul className="text-xs text-gray-600 mb-4 list-disc list-inside">
                {intern.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 px-4 sm:px-6 md:px-10 bg-gradient-to-br from-blue-50 to-purple-50">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Apply Now
        </motion.h2>
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-blue-50"
                required
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-blue-50"
                required
              />
            </div>
            <div>
              <select
                name="position"
                value={form.position}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-blue-50"
                required
              >
                <option value="">Select Position</option>
                {positions.concat(internships).map((pos, i) => (
                  <option key={i} value={pos.title}>{pos.title}</option>
                ))}
              </select>
            </div>
            <div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us why you're a great fit (optional)"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-blue-50"
                rows={4}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? 'Submitting...' : <><Send className="w-4 h-4" /> Submit Application</>}
            </button>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-green-600 text-sm mt-2 justify-center"
              >
                <CheckCircle className="w-4 h-4" />
                Application submitted! We will contact you soon.
              </motion.div>
            )}
          </form>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-purple-700 text-white text-center">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to grow with us?</h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            Explore your potential at SDM Consultancy. We look forward to meeting you!
          </p>
        </motion.div>
      </section>

      {/* Life at SDM Video Section */}
      <section className="py-16 px-4 sm:px-6 md:px-10 bg-gradient-to-br from-purple-50 to-blue-50">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Life at SDM
        </motion.h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-8">
          Get a glimpse of our vibrant work culture, team events, and what makes SDM Consultancy a great place to grow your career.
        </p>
        <div className="flex justify-center">
          <div className="w-full max-w-2xl aspect-video mx-auto bg-gradient-to-br from-blue-100 to-purple-100 p-2 rounded-3xl shadow-2xl border-4 border-blue-200 flex items-center justify-center">
            <video
              src="/life_at_sdm.mp4"
              controls
              className="w-full h-full object-cover rounded-2xl border-2 border-white shadow-lg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Demo Office Tour Video Section */}
      <section className="py-16 px-4 sm:px-6 md:px-10 bg-gradient-to-br from-blue-50 to-purple-50">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Demo Office Tour
        </motion.h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-8">
          Take a virtual tour of our modern office space and see where the magic happens every day at SDM Consultancy.
        </p>
        <div className="flex justify-center">
          <div className="w-full max-w-2xl aspect-video rounded-2xl overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/6ZfuNTqbHE8"
              title="SDM Office Tour"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 md:px-10 bg-white">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          What Our Team Says
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: 'Aarav S.',
              role: 'Frontend Developer',
              image: 'https://randomuser.me/api/portraits/men/32.jpg',
              text: 'SDM gave me the opportunity to work on exciting projects and grow my skills rapidly. The team is super supportive!'
            },
            {
              name: 'Priya K.',
              role: 'AI Intern',
              image: 'https://randomuser.me/api/portraits/women/44.jpg',
              text: 'As an intern, I was treated like a real team member. I learned so much and felt valued from day one.'
            },
            {
              name: 'Rohit M.',
              role: 'Backend Engineer',
              image: 'https://randomuser.me/api/portraits/men/65.jpg',
              text: 'The culture at SDM is all about innovation and collaboration. I love coming to work every day!'
            },
          ].map((t, idx) => (
            <motion.div
              key={idx}
              className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full mb-4 shadow-lg object-cover" />
              <p className="text-gray-700 italic mb-4">"{t.text}"</p>
              <div className="font-semibold text-blue-700">{t.name}</div>
              <div className="text-xs text-gray-500">{t.role}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
} 