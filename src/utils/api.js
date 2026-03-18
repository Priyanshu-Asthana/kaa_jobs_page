// API configuration for future backend integration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.almaconnect.com';

export const apiEndpoints = {
  // Jobs
  getJobs: `${API_BASE_URL}/api/jobs`,
  getJobById: (id) => `${API_BASE_URL}/api/jobs/${id}`,
  searchJobs: `${API_BASE_URL}/api/jobs/search`,
  applyJob: `${API_BASE_URL}/api/apply`,
  getApplications: `${API_BASE_URL}/api/applications`,

  // Auth
  login: `${API_BASE_URL}/api/auth/login`,
  signup: `${API_BASE_URL}/api/auth/signup`,
  logout: `${API_BASE_URL}/api/auth/logout`,
  refreshToken: `${API_BASE_URL}/api/auth/refresh`,

  // Events
  getEvents: `${API_BASE_URL}/api/events`,
  getEventById: (id) => `${API_BASE_URL}/api/events/${id}`,

  // Directory
  getAlumni: `${API_BASE_URL}/api/alumni`,
  searchAlumni: `${API_BASE_URL}/api/alumni/search`,

  // News
  getNews: `${API_BASE_URL}/api/news`,
  getNewsById: (id) => `${API_BASE_URL}/api/news/${id}`,
};

// Mock API functions for current development
export const mockApiCall = async (endpoint, options = {}) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: 200, data: {} });
    }, 300);
  });
};
