import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import guestReducer from './slices/guestSlice';
import jobsReducer from './slices/jobsSlice';
import filtersReducer from './slices/filtersSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    guest: guestReducer,
    jobs: jobsReducer,
    filters: filtersReducer,
  },
});
