import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-extrabold mb-4 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">SDM Consultancy</h3>
            <p className="text-blue-100 mb-4">
              Empowering businesses with innovative technology solutions and expert consulting services.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" aria-label="Facebook" className="hover:text-blue-300 transition-colors"><Facebook className="w-6 h-6" /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-blue-300 transition-colors"><Linkedin className="w-6 h-6" /></a>
              <a href="#" aria-label="Twitter" className="hover:text-blue-300 transition-colors"><Twitter className="w-6 h-6" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-extrabold mb-4 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-blue-100 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/services" className="text-blue-100 hover:text-white transition-colors">Services</a></li>
              <li><a href="/team" className="text-blue-100 hover:text-white transition-colors">Our Team</a></li>
              <li><a href="/career" className="text-blue-100 hover:text-white transition-colors">Careers</a></li>
              <li><a href="/contact" className="text-blue-100 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-extrabold mb-4 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Contact Us</h3>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-center gap-2"><Mail className="w-5 h-5" /> info@sdmconsultancy.com</li>
              <li className="flex items-center gap-2"><Phone className="w-5 h-5" /> +1 (555) 123-4567</li>
              <li className="flex items-center gap-2"><MapPin className="w-5 h-5" /> 123 Tech Street, Digital City</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-300/20 mt-10 pt-8 text-center text-blue-200">
          <p>&copy; {new Date().getFullYear()} SDM Consultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
