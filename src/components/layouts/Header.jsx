import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IoMenu, IoClose } from 'react-icons/io5';
import { logout } from '../../redux/slices/authSlice';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { isGuestMode } = useSelector((state) => state.guest);

  const navLinks = [
    { name: 'Home', path: '/jobs' },
    { name: 'Events', path: '/jobs' },
    { name: 'Jobs', path: '/jobs' },
    { name: 'Directory', path: '/jobs' },
    { name: 'News', path: '/jobs' },
  ];

  const handleLogout = () => {
    dispatch(logout());
    setIsMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 bg-primary text-white shadow-md">
      <div className="max-content-width">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/jobs" className="flex items-center gap-2 font-bold text-xl">
            <img 
              src="/images/kiet-logo.png" 
              alt="KIET Logo" 
              className="h-[40px] w-auto object-contain"
            />
            <div className="hidden sm:block">
              <div className="text-white leading-tight">KIET AlmaConnect</div>
              <div className="text-xs text-blue-100 font-normal">Alumni Association</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path) ? 'text-white border-b-2 border-white pb-1' : 'text-blue-100 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Guest Mode Badge */}
            {isGuestMode && !isAuthenticated && (
              <div className="hidden sm:flex items-center gap-2 bg-blue-500 px-3 py-1 rounded-full text-xs font-medium animate-slideInBadge">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                Guest Mode
              </div>
            )}

            {/* Auth Buttons */}
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="hidden sm:block px-4 py-2 bg-white text-primary font-medium rounded-lg hover:bg-blue-50 transition-colors"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="hidden sm:block px-4 py-2 bg-white text-primary font-medium rounded-lg hover:bg-blue-50 transition-colors"
              >
                Login
              </Link>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-primary-light rounded transition-colors"
            >
              {isMenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-blue-400">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 text-sm font-medium transition-colors ${
                  isActive(link.path) ? 'bg-primary-light text-white' : 'text-blue-100 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t border-blue-400 mt-2 pt-2 px-4">
              {isGuestMode && !isAuthenticated && (
                <div className="py-2 text-xs text-blue-100 mb-2">● Guest Mode Active</div>
              )}
              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2 bg-white text-primary font-medium rounded-lg hover:bg-blue-50 transition-colors text-sm"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 bg-white text-primary font-medium rounded-lg hover:bg-blue-50 transition-colors text-center text-sm"
                >
                  Login
                </Link>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
