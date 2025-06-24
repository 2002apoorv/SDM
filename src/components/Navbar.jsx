// src/components/Navbar.jsx
import { NavLink } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <NavLink
          to="/"
          className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-blue-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer"
        >
          <span className="inline-block">
            <Typewriter
              words={["SDM Consultancy"]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={90}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </NavLink>
        <div className="space-x-4 hidden md:flex">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-4 py-1 rounded border-2 transition-all duration-300 font-medium ${
                isActive
                  ? 'border-blue-500 text-blue-700 bg-blue-50 shadow'
                  : 'border-transparent text-gray-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-4 py-1 rounded border-2 transition-all duration-300 font-medium ${
                isActive
                  ? 'border-blue-500 text-blue-700 bg-blue-50 shadow'
                  : 'border-transparent text-gray-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600'
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `px-4 py-1 rounded border-2 transition-all duration-300 font-medium ${
                isActive
                  ? 'border-blue-500 text-blue-700 bg-blue-50 shadow'
                  : 'border-transparent text-gray-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600'
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/team"
            className={({ isActive }) =>
              `px-4 py-1 rounded border-2 transition-all duration-300 font-medium ${
                isActive
                  ? 'border-blue-500 text-blue-700 bg-blue-50 shadow'
                  : 'border-transparent text-gray-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600'
              }`
            }
          >
            Team
          </NavLink>
          <NavLink
            to="/career"
            className={({ isActive }) =>
              `px-4 py-1 rounded border-2 transition-all duration-300 font-medium ${
                isActive
                  ? 'border-blue-500 text-blue-700 bg-blue-50 shadow'
                  : 'border-transparent text-gray-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600'
              }`
            }
          >
            Career
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-4 py-1 rounded border-2 transition-all duration-300 font-medium ${
                isActive
                  ? 'border-blue-500 text-blue-700 bg-blue-50 shadow'
                  : 'border-transparent text-gray-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600'
              }`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/counselling"
            className={({ isActive }) =>
              `px-4 py-1 rounded border-2 transition-all duration-300 font-semibold ${
                isActive
                  ? 'border-blue-500 text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow'
                  : 'border-transparent bg-blue-600 text-white hover:bg-blue-700 hover:border-blue-700'
              }`
            }
          >
            Get Counselling
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

/*
@keyframes shimmer {
  0% {
    background-position: 200% center;
  }
  100% {
    background-position: -200% center;
  }
}
.animate-shimmer {
  animation: shimmer 2.5s linear infinite;
}
*/
