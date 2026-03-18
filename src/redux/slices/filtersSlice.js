import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sortBy: 'Newest First',
  alumniOnly: false,
  locations: [],
  experience: [],
  showMobileFilters: false,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setAlumniOnly: (state, action) => {
      state.alumniOnly = action.payload;
    },
    setLocations: (state, action) => {
      state.locations = action.payload;
    },
    setExperience: (state, action) => {
      state.experience = action.payload;
    },
    toggleLocation: (state, action) => {
      const location = action.payload;
      if (state.locations.includes(location)) {
        state.locations = state.locations.filter((loc) => loc !== location);
      } else {
        state.locations.push(location);
      }
    },
    toggleExperience: (state, action) => {
      const exp = action.payload;
      if (state.experience.includes(exp)) {
        state.experience = state.experience.filter((e) => e !== exp);
      } else {
        state.experience.push(exp);
      }
    },
    toggleMobileFilters: (state) => {
      state.showMobileFilters = !state.showMobileFilters;
    },
    closeMobileFilters: (state) => {
      state.showMobileFilters = false;
    },
    resetFilters: (state) => {
      state.sortBy = 'Newest First';
      state.alumniOnly = false;
      state.locations = [];
      state.experience = [];
    },
  },
});

export const {
  setSortBy,
  setAlumniOnly,
  setLocations,
  setExperience,
  toggleLocation,
  toggleExperience,
  toggleMobileFilters,
  closeMobileFilters,
  resetFilters,
} = filtersSlice.actions;
export default filtersSlice.reducer;
