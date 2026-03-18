import { useDispatch, useSelector } from 'react-redux';
import { IoChevronDown } from 'react-icons/io5';
import {
  setSortBy,
  setAlumniOnly,
  toggleLocation,
  toggleExperience,
  resetFilters,
} from '../../redux/slices/filtersSlice';
import { locations, experienceLevels, sortOptions } from '../../data/mockJobs';

export default function FilterSidebar() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  return (
    <div className="hidden md:block sticky top-24 h-fit bg-white border border-neutral-200 rounded-lg p-6 space-y-6 overflow-y-auto max-h-[calc(100vh-120px)]">
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

      {/* Reset Filters */}
      <button
        onClick={() => dispatch(resetFilters())}
        className="w-full px-4 py-2 border border-neutral-300 text-neutral-700 rounded-lg hover:bg-neutral-50 transition-colors font-medium text-sm"
      >
        Reset Filters
      </button>
    </div>
  );
}
