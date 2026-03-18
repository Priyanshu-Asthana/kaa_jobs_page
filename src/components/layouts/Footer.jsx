import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram, FiYoutube } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="max-content-width py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/images/kiet-logo.png" 
                alt="KIET Logo" 
                className="h-[48px] w-auto object-contain"
              />
              <div>
                <div className="text-white font-bold leading-tight">KIET AlmaConnect</div>
                <div className="text-xs text-blue-100 font-normal">Alumni Association</div>
              </div>
            </div>
            <p className="text-sm text-blue-100">Let's Re-connect to Root</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/jobs" className="text-blue-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-blue-100 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-blue-100 hover:text-white transition-colors">
                  Jobs
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-blue-100 hover:text-white transition-colors">
                  Directory
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="font-bold text-lg mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  Join Community
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  Contribute
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  Partner With Us
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  Volunteer
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <div className="flex items-center gap-4 mb-4">
              <a href="#" className="text-blue-100 hover:text-white transition-colors text-xl">
                <FiFacebook />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors text-xl">
                <FiTwitter />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors text-xl">
                <FiLinkedin />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors text-xl">
                <FiInstagram />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors text-xl">
                <FiYoutube />
              </a>
            </div>
            <div className="text-sm">
              <p className="font-medium text-white mb-1">KIET Group</p>
              <p className="text-blue-100">Ghaziabad, India</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-400 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-100">
            <p>&copy; {currentYear} KIET Alumni Association. All rights reserved.</p>
            <div className="flex gap-4 justify-end">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
