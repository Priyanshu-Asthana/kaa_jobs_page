import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoClose, IoCheckmarkCircle } from 'react-icons/io5';
import { activateGuestMode, closeGuestModal } from '../../redux/slices/guestSlice';

export default function GuestWelcomeModal() {
  const dispatch = useDispatch();
  const { showGuestModal } = useSelector((state) => state.guest);

  if (!showGuestModal) return null;

  const handleContinueAsGuest = () => {
    dispatch(activateGuestMode());
  };

  const handleClose = () => {
    dispatch(closeGuestModal());
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-8 relative animate-slideUp">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded transition-colors"
        >
          <IoClose size={24} className="text-neutral-600" />
        </button>

        {/* Header */}
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Welcome to KIET AlmaConnect</h2>

        {/* Subtitle */}
        <p className="text-neutral-600 mb-6">You are currently browsing as a Guest.</p>
        <p className="text-sm text-neutral-500 mb-6">You can explore jobs, but applying and posting require login.</p>

        {/* Benefits */}
        <div className="mb-8">
          <h3 className="font-semibold text-neutral-900 mb-4">Why login?</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <IoCheckmarkCircle size={20} className="text-green-600 flex-shrink-0" />
              <span className="text-sm text-neutral-700">Apply instantly to jobs</span>
            </li>
            <li className="flex items-center gap-3">
              <IoCheckmarkCircle size={20} className="text-green-600 flex-shrink-0" />
              <span className="text-sm text-neutral-700">Track your applications</span>
            </li>
            <li className="flex items-center gap-3">
              <IoCheckmarkCircle size={20} className="text-green-600 flex-shrink-0" />
              <span className="text-sm text-neutral-700">Connect with alumni network</span>
            </li>
            <li className="flex items-center gap-3">
              <IoCheckmarkCircle size={20} className="text-green-600 flex-shrink-0" />
              <span className="text-sm text-neutral-700">Access full job insights</span>
            </li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <Link
            to="/login"
            className="block text-center px-4 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="block text-center px-4 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Sign Up
          </Link>
          <button
            onClick={handleContinueAsGuest}
            className="w-full px-4 py-3 text-primary font-semibold hover:text-primary-dark transition-colors"
          >
            Continue as Guest
          </button>
        </div>
      </div>
    </div>
  );
}
