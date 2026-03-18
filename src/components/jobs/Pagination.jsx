import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../redux/slices/jobsSlice';
import { scrollToTop } from '../../utils/helpers';

export default function Pagination({ totalPages }) {
  const dispatch = useDispatch();
  const { currentPage } = useSelector((state) => state.jobs);

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
    scrollToTop();
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('...');
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (currentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-8 mb-8">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
      >
        Previous
      </button>

      <div className="flex gap-1">
        {getPageNumbers().map((page, idx) => (
          <button
            key={idx}
            onClick={() => typeof page === 'number' && handlePageChange(page)}
            disabled={page === '...'}
            className={`px-3 py-2 rounded-lg font-medium transition-colors ${
              page === currentPage
                ? 'bg-primary text-white'
                : page === '...'
                  ? 'cursor-default'
                  : 'border border-neutral-300 hover:bg-neutral-50'
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
      >
        Next
      </button>
    </div>
  );
}
