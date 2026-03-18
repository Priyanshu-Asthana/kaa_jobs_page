import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isGuestMode: localStorage.getItem('guestMode') === 'true',
  showGuestModal: localStorage.getItem('guestMode') !== 'true' && !localStorage.getItem('user'),
};

const guestSlice = createSlice({
  name: 'guest',
  initialState,
  reducers: {
    activateGuestMode: (state) => {
      state.isGuestMode = true;
      state.showGuestModal = false;
      localStorage.setItem('guestMode', 'true');
    },
    deactivateGuestMode: (state) => {
      state.isGuestMode = false;
      localStorage.removeItem('guestMode');
    },
    closeGuestModal: (state) => {
      state.showGuestModal = false;
    },
    showGuestModal: (state) => {
      state.showGuestModal = true;
    },
  },
});

export const { activateGuestMode, deactivateGuestMode, closeGuestModal, showGuestModal } =
  guestSlice.actions;
export default guestSlice.reducer;
