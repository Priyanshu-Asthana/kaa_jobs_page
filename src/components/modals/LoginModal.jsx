import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { IoClose } from 'react-icons/io5';
import { login } from '../../redux/slices/authSlice';
import { deactivateGuestMode } from '../../redux/slices/guestSlice';

export default function LoginModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock login
    dispatch(login({ email, name: 'User' }));
    dispatch(deactivateGuestMode());
    onClose();
    navigate('/jobs');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-8 relative animate-slideUp">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded transition-colors"
        >
          <IoClose size={24} className="text-neutral-600" />
        </button>

        {/* Header */}
        <h2 className="text-2xl font-bold text-neutral-900 mb-1">Login to Your Account</h2>
        <p className="text-sm text-neutral-600 mb-6">Access all job opportunities and more.</p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors mt-6"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-neutral-600 mt-4">
          Don't have an account?{' '}
          <a href="/signup" className="text-primary font-semibold hover:text-primary-dark">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
