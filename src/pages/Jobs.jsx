import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoSearch, IoFilter } from 'react-icons/io5';
import { setSearchQuery, setSelectedCategory } from '../redux/slices/jobsSlice';
import { toggleMobileFilters } from '../redux/slices/filtersSlice';
import { mockJobs, jobCategories } from '../data/mockJobs';
import { filterJobs } from '../utils/helpers';
import GuestWelcomeModal from '../components/modals/GuestWelcomeModal';
import JobDetailsModal from '../components/modals/JobDetailsModal';
import JobCard from '../components/jobs/JobCard';
import FilterSidebar from '../components/jobs/FilterSidebar';
import MobileFilterSheet from '../components/jobs/MobileFilterSheet';
import Pagination from '../components/jobs/Pagination';

export default function Jobs() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { isGuestMode } = useSelector((state) => state.guest);
  const { searchQuery, selectedCategory, currentPage } = useSelector((state) => state.jobs);
  const filters = useSelector((state) => state.filters);

  const [selectedJob, setSelectedJob] = useState(null);
  const [showJobDetails, setShowJobDetails] = useState(false);

  // Filter jobs
  const filteredJobs = filterJobs(mockJobs, searchQuery, selectedCategory, filters);
  
  // Apply guest limit
  const displayedJobs = isGuestMode && !isAuthenticated ? filteredJobs.slice(0, 5) : filteredJobs;
  const totalJobs = isGuestMode && !isAuthenticated ? filteredJobs.length : displayedJobs.length;
  const itemsPerPage = 5;
  const totalPages = Math.ceil(displayedJobs.length / itemsPerPage);
  const paginatedJobs = displayedJobs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const handleCategorySelect = (category) => {
    dispatch(setSelectedCategory(category));
  };

  const handleViewDetails = (job) => {
    setSelectedJob(job);
    setShowJobDetails(true);
  };

  return (
    <div className="min-h-screen bg-neutral-50 pb-8">
      {/* Guest Welcome Modal */}
      <GuestWelcomeModal />

      {/* Header Section with Background Image */}
      <div 
        className="relative py-12 md:py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/jobs-hero.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="max-content-width relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Jobs</h1>
          <p className="text-blue-50 text-lg md:text-xl mb-6">Explore opportunities shared by KIET Alumni Network</p>

          {isGuestMode && !isAuthenticated && (
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 text-sm text-white max-w-2xl">
              <p>
                <span className="font-semibold">Showing {displayedJobs.length} of {totalJobs} jobs</span> • Login to see all
                available opportunities
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-content-width py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <IoSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search jobs, companies, or skills..."
              className="w-full pl-12 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8">
          {jobCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategorySelect(category)}
              className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white border border-neutral-200 text-neutral-700 hover:border-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Mobile Filter Button */}
        <div className="md:hidden mb-6">
          <button
            onClick={() => dispatch(toggleMobileFilters())}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors font-medium"
          >
            <IoFilter size={20} />
            Filters
          </button>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <FilterSidebar />

          {/* Job Cards */}
          <div className="md:col-span-3 space-y-4">
            {paginatedJobs.length > 0 ? (
              <>
                <div className="text-sm text-neutral-600">
                  {paginatedJobs.length} jobs found
                </div>
                {paginatedJobs.map((job) => (
                  <JobCard key={job.id} job={job} onViewDetails={() => handleViewDetails(job)} />
                ))}
              </>
            ) : (
              <div className="bg-white border border-neutral-200 rounded-lg p-12 text-center">
                <p className="text-neutral-600 mb-2">No jobs found matching your criteria.</p>
                <p className="text-sm text-neutral-500">Try adjusting your search or filters.</p>
              </div>
            )}

            {/* Guest Upsell Banner */}
            {isGuestMode && !isAuthenticated && filteredJobs.length > 5 && (
              <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">7+ More Jobs Available</h3>
                <p className="mb-6">Login to access all job opportunities and apply instantly</p>
                <a
                  href="/login"
                  className="inline-block px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Login to View All Jobs
                </a>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && <Pagination totalPages={totalPages} />}
          </div>
        </div>
      </div>

      {/* Mobile Filter Sheet */}
      <MobileFilterSheet />

      {/* Job Details Modal */}
      <JobDetailsModal job={selectedJob} isOpen={showJobDetails} onClose={() => setShowJobDetails(false)} />
    </div>
  );
}
