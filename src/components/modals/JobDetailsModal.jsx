import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoClose, IoLocationSharp, IoBriefcase, IoCash, IoCalendar } from 'react-icons/io5';
import { applyToJob, undoApplication } from '../../redux/slices/jobsSlice';
import { getCompanyInitials, getAvatarColor } from '../../utils/helpers';
import LoginModal from './LoginModal';

export default function JobDetailsModal({ job, isOpen, onClose }) {
  const dispatch = useDispatch();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { isGuestMode } = useSelector((state) => state.guest);
  const { appliedJobs } = useSelector((state) => state.jobs);

  if (!isOpen || !job) return null;

  const hasApplied = appliedJobs.includes(job.id);
  const isLocked = !isAuthenticated;
  const initials = getCompanyInitials(job.company);
  const avatarColor = getAvatarColor(job.id);

  const handleApply = () => {
    if (isLocked) {
      setShowLoginModal(true);
    } else {
      dispatch(applyToJob(job.id));
    }
  };

  const handleUndo = () => {
    dispatch(undoApplication(job.id));
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slideUp">
          {/* Close Button */}
          <div className="sticky top-0 bg-white border-b border-neutral-200 flex justify-between items-center p-6">
            <h2 className="text-2xl font-bold text-neutral-900">{job.title}</h2>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded transition-colors"
            >
              <IoClose size={24} className="text-neutral-600" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Company Info */}
            <div className="flex items-start gap-4">
              <div className={`${avatarColor} text-white w-16 h-16 rounded-lg flex items-center justify-center font-bold text-xl`}>
                {initials}
              </div>
              <div>
                <p className="font-semibold text-neutral-900">{job.company}</p>
                <p className="text-sm text-neutral-600 mb-2">Posted by KIET Alumni</p>
                <div className="flex items-center gap-4 text-sm text-neutral-600 flex-wrap">
                  <div className="flex items-center gap-1">
                    <IoLocationSharp size={16} />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <IoCash size={16} />
                    {job.salary}
                  </div>
                  <div className="flex items-center gap-1">
                    <IoBriefcase size={16} />
                    {job.experience}
                  </div>
                  <div className="flex items-center gap-1">
                    <IoCalendar size={16} />
                    {job.postedTime}
                  </div>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">{job.jobType}</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">{job.category}</span>
              {job.urgentHiring && (
                <span className="px-3 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">Urgent Hiring</span>
              )}
            </div>

            {/* Skills */}
            <div>
              <h3 className="font-semibold text-neutral-900 mb-3">Required Skills</h3>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-neutral-100 text-neutral-700 text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="font-semibold text-neutral-900 mb-3">Job Description</h3>
              <div className={`text-neutral-700 space-y-3 ${isLocked ? 'blur-sm' : ''}`}>
                <p>{job.description}</p>
                <p>
                  This is an exciting opportunity to grow your career with a leading organization. You'll work with
                  cutting-edge technologies and collaborate with talented engineers. The role offers excellent learning
                  opportunities and competitive benefits.
                </p>
              </div>
              {isLocked && (
                <div className="absolute inset-0 flex items-center justify-center rounded-lg pointer-events-none">
                  <div className="text-center">
                    <p className="text-neutral-700 font-semibold">Login to view full job description</p>
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 sticky bottom-0 bg-white border-t border-neutral-200 p-6 -m-6">
              {hasApplied ? (
                <>
                  <button
                    onClick={handleUndo}
                    className="flex-1 px-4 py-3 border-2 border-neutral-300 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-colors"
                  >
                    Undo
                  </button>
                  <div className="flex-1 px-4 py-3 bg-gray-400 text-white font-semibold rounded-lg flex items-center justify-center cursor-default">
                    ✓ Applied
                  </div>
                </>
              ) : (
                <button
                  onClick={handleApply}
                  className="flex-1 px-4 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
                >
                  {isLocked ? '🔒 Apply Now' : 'Apply Now'}
                </button>
              )}
              <button className="px-4 py-3 border-2 border-neutral-300 text-neutral-700 rounded-lg hover:bg-neutral-50 transition-colors">
                💾
              </button>
            </div>
          </div>
        </div>
      </div>

      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </>
  );
}
