import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoLocationSharp, IoCash, IoCalendarOutline, IoLockClosed } from 'react-icons/io5';
import { applyToJob, undoApplication } from '../../redux/slices/jobsSlice';
import { getCompanyInitials, getAvatarColor } from '../../utils/helpers';
import LoginModal from '../modals/LoginModal';

export default function JobCard({ job, onViewDetails }) {
  const dispatch = useDispatch();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { appliedJobs } = useSelector((state) => state.jobs);

  const hasApplied = appliedJobs.includes(job.id);
  const isLocked = !isAuthenticated;
  const initials = getCompanyInitials(job.company);
  const avatarColor = getAvatarColor(job.id);

  const handleApply = (e) => {
    e.preventDefault();
    if (isLocked) {
      setShowLoginModal(true);
    } else if (!hasApplied) {
      dispatch(applyToJob(job.id));
    } else {
      dispatch(undoApplication(job.id));
    }
  };

  return (
    <>
      <div className="bg-white border border-neutral-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className={`${avatarColor} text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0`}>
            {initials}
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-neutral-900">{job.title}</h3>
            <p className="text-sm text-neutral-600">{job.company}</p>
            <span className="inline-block mt-1 px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
              Posted by KIET Alumni
            </span>
          </div>
        </div>

        {/* Meta Info */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <IoLocationSharp size={16} className="text-neutral-400" />
            {job.location}
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <IoCash size={16} className="text-neutral-400" />
            {job.salary}
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <IoCalendarOutline size={16} className="text-neutral-400" />
            {job.postedTime}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded">{job.jobType}</span>
          <span className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded">{job.experience}</span>
          {job.urgentHiring && (
            <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded">Urgent Hiring</span>
          )}
        </div>

        {/* Skills */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {job.skills.slice(0, 3).map((skill) => (
              <span key={skill} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                {skill}
              </span>
            ))}
            {job.skills.length > 3 && (
              <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">+{job.skills.length - 3}</span>
            )}
          </div>
        </div>

        {/* Description Preview */}
        <p className="text-sm text-neutral-600 mb-4 line-clamp-2">{job.description}</p>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleApply}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors ${
              hasApplied
                ? 'bg-gray-400 text-white cursor-default'
                : isLocked
                  ? 'bg-primary text-white hover:bg-primary-dark'
                  : 'bg-primary text-white hover:bg-primary-dark'
            }`}
          >
            {isLocked && <IoLockClosed size={16} />}
            {hasApplied ? '✓ Applied' : 'Apply Now'}
          </button>
          <button
            onClick={onViewDetails}
            className="flex-1 px-4 py-2 border-2 border-neutral-300 text-neutral-700 rounded-lg font-semibold hover:bg-neutral-50 transition-colors"
          >
            View Details
          </button>
        </div>
      </div>

      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </>
  );
}
