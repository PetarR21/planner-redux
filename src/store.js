import { configureStore } from '@reduxjs/toolkit';
import itemReducer from './reducers/items';

const store = configureStore({
  reducer: {
    items: itemReducer,
    //notification: notificationReducer,
    //filter: filterReducer,
  },
});

export default store;
