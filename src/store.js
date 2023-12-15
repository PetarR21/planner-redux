import { configureStore } from '@reduxjs/toolkit';
import itemReducer from './reducers/items';
import filterReducer from './reducers/filter';
import notificationReducer from './reducers/notification';

const store = configureStore({
  reducer: {
    items: itemReducer,
    notification: notificationReducer,
    filter: filterReducer,
  },
});

export default store;
