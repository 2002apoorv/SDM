import { useEffect } from 'react';
import Lottie from 'lottie-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import innovationAnimation from '../assets/innovation2.json';
import akashImage from '../assets/akashImage.jpg';
import ritikImage from '../assets/ritikImage.jpg';
import gauravImage from '../assets/gauravImage.jpg';
import devrajImage from '../assets/devrajImage.jpg';
import apoorvImage from '../assets/apoorvImage.jpg';
import dhananjayImage from '../assets/dhananjayImage.jpg';

const teamMembers = [
  {
    name: "Ritik Yadav",
    role: "Full-Stack Developer",
    bio: "Ritik Yadav builds scalable web apps and leads product architecture. He specializes in MERN, API design, and deployment strategies.",
    expertise: "Ask me about: MERN, REST APIs, DevOps",
    image: ritikImage,
  },
  {
    name: "Akash Patel",
    role: "Cybersecurity Specialist",
    bio: "Akash secures applications and infrastructure. He focuses on OWASP practices, ethical hacking, and threat analysis.",
    expertise: "Ask me about: pentesting, firewalls, network security",
    image: akashImage,
  },
  {
    name: "Gaurav Verma",
    role: "Machine Learning Engineer",
    bio: "Gaurav builds intelligent systems using Python, TensorFlow, and large datasets. He brings AI insights into practical use cases.",
    expertise: "Ask me about: AI, NLP, deep learning",
    image: gauravImage,
  },
  {
    name: "Kushagara Mehrshey",
    role: "UI/UX Designer",
    bio: "Devraj creates intuitive user experiences and beautiful interfaces. She specializes in user research, wireframing, and design systems.",
    expertise: "Ask me about: Figma, user research, design systems",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Apoorv Singh",
    role: "DevOps Engineer",
    bio: "Apoorv automates deployment pipelines and manages cloud infrastructure. He ensures scalable, reliable, and secure operations.",
    expertise: "Ask me about: AWS, Docker, CI/CD",
    image: apoorvImage,
  },
  {
    name: "Devraj Roar",
    role: "Data Scientist",
    bio: "Devraj transforms raw data into actionable insights. She builds predictive models and data visualization solutions.",
    expertise: "Ask me about: Python, SQL, data visualization",
    image: devrajImage,
  },
  {
    name: "Dhananjay Varshney",
    role: "Mobile App Developer",
    bio: "Dhananjay develops cross-platform mobile applications. He specializes in React Native, Flutter, and native iOS/Android development.",
    expertise: "Ask me about: React Native, Flutter, mobile UX",
    image: dhananjayImage,
  },
  {
    name: "Neha Gupta",
    role: "Project Manager",
    bio: "Neha leads project delivery and client relationships. She ensures timely delivery, quality standards, and client satisfaction.",
    expertise: "Ask me about: Agile, stakeholder management, risk assessment",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
  },
];

const Team = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 text-gray-800 px-4 py-16 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Lottie animation positioned at the top middle */}
        <div className="flex justify-center mb-8">
          <div className="w-48 h-48">
            <Lottie animationData={innovationAnimation} loop={true} />
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">Meet the Team</h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          The minds behind SDM Consultancy — skilled, passionate, and committed to digital excellence.
        </p>

        {/* Team Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 flex flex-col items-center transition-transform transform hover:-translate-y-1 duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 object-cover rounded-full mb-4 border-4 border-gray-200"
              />
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-sm text-blue-600 mb-3 font-semibold">{member.role}</p>
              <p className="text-sm text-gray-600 text-center leading-relaxed">{member.bio}</p>
              <p className="text-xs text-gray-500 mt-3 italic text-center">{member.expertise}</p>
              
            </div>
          ))}
        </div>

        {/* Future Hiring Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Join Our Growing Team</h3>
          <p className="text-lg mb-6 opacity-90">
            We're always looking for talented individuals who are passionate about technology and innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              View Open Positions
            </a>
            <a href="/contact" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Send Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
