import { useDispatch, useSelector } from 'react-redux';
import { IoClose } from 'react-icons/io5';
import {
  setSortBy,
  setAlumniOnly,
  toggleLocation,
  toggleExperience,
  resetFilters,
  closeMobileFilters,
} from '../../redux/slices/filtersSlice';
import { locations, experienceLevels, sortOptions } from '../../data/mockJobs';

export default function MobileFilterSheet() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const { showMobileFilters } = useSelector((state) => state.filters);

  if (!showMobileFilters) return null;

  const handleClose = () => {
    dispatch(closeMobileFilters());
  };

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={handleClose}
      ></div>

      {/* Bottom Sheet */}
      <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl max-h-[80vh] overflow-y-auto animate-slideUp">
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between p-6 bg-white border-b border-neutral-200">
          <h2 className="text-xl font-bold text-neutral-900">Filters</h2>
          <button
            onClick={handleClose}
            className="p-1 hover:bg-gray-100 rounded transition-colors"
          >
            <IoClose size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Sort By */}
          <div>
            <h3 className="font-bold text-neutral-900 mb-4">Sort By</h3>
            <select
              value={filters.sortBy}
              onChange={(e) => dispatch(setSortBy(e.target.value))}
              className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm"
            >
              {sortOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Alumni Only */}
          <div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.alumniOnly}
                onChange={(e) => dispatch(setAlumniOnly(e.target.checked))}
                className="w-4 h-4 rounded border-neutral-300 text-primary focus:ring-primary cursor-pointer"
              />
              <span className="text-sm font-medium text-neutral-700">Posted by Alumni Only</span>
            </label>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-bold text-neutral-900 mb-3">Location</h3>
            <div className="space-y-2">
              {locations.map((location) => (
                <label key={location} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.locations.includes(location)}
                    onChange={() => dispatch(toggleLocation(location))}
                    className="w-4 h-4 rounded border-neutral-300 text-primary focus:ring-primary cursor-pointer"
                  />
                  <span className="text-sm text-neutral-700">{location}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="font-bold text-neutral-900 mb-3">Experience</h3>
            <div className="space-y-2">
              {experienceLevels.map((level) => (
                <label key={level} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.experience.includes(level)}
                    onChange={() => dispatch(toggleExperience(level))}
                    className="w-4 h-4 rounded border-neutral-300 text-primary focus:ring-primary cursor-pointer"
                  />
                  <span className="text-sm text-neutral-700">{level}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4 border-t border-neutral-200">
            <button
              onClick={() => dispatch(resetFilters())}
              className="flex-1 px-4 py-2 border border-neutral-300 text-neutral-700 rounded-lg hover:bg-neutral-50 transition-colors font-medium text-sm"
            >
              Reset
            </button>
            <button
              onClick={handleClose}
              className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium text-sm"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
