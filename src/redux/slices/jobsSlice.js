import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  appliedJobs: sessionStorage.getItem('appliedJobs')
    ? JSON.parse(sessionStorage.getItem('appliedJobs'))
    : [],
  searchQuery: '',
  selectedCategory: 'All Jobs',
  currentPage: 1,
};

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    applyToJob: (state, action) => {
      const jobId = action.payload;
      if (!state.appliedJobs.includes(jobId)) {
        state.appliedJobs.push(jobId);
        sessionStorage.setItem('appliedJobs', JSON.stringify(state.appliedJobs));
      }
    },
    undoApplication: (state, action) => {
      const jobId = action.payload;
      state.appliedJobs = state.appliedJobs.filter((id) => id !== jobId);
      sessionStorage.setItem('appliedJobs', JSON.stringify(state.appliedJobs));
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      state.currentPage = 1;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
      state.currentPage = 1;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { applyToJob, undoApplication, setSearchQuery, setSelectedCategory, setCurrentPage } =
  jobsSlice.actions;
export default jobsSlice.reducer;
