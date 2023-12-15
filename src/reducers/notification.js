import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: null,
  reducers: {
    set(state, action) {
      return action.payload;
    },
    // eslint-disable-next-line no-unused-vars
    clear(state, action) {
      return null;
    },
  },
});

export const { set, clear } = notificationSlice.actions;

export const setNotification = (message, timeout) => {
  return async (dispatch) => {
    dispatch(set(message));
    setTimeout(() => {
      dispatch(clear());
    }, timeout * 1000);
  };
};

export default notificationSlice.reducer;
