import { createSlice } from '@reduxjs/toolkit';
import itemsService from '../services/items';

const itemSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    appendItem(state, action) {
      state.push(action.payload);
    },
    updateItem(state, action) {
      const item = action.payload;
      return state.map((i) => (i.id !== item.id ? i : item));
    },
    setItems(state, action) {
      return action.payload;
    },
  },
});

export const { appendItem, updateItem, setItems } = itemSlice.actions;

export const initalizeItems = () => {
  return async (dispatch) => {
    const items = await itemsService.getAll();
    dispatch(setItems(items));
  };
};

export const createItem = (content) => {
  return async (dispatch) => {
    const newItem = await itemsService.create(content);
    dispatch(appendItem(newItem));
  };
};

export const toggleItem = (item) => {
  return async (dispatch) => {
    const updatedItem = await itemsService.update({
      ...item,
      completed: !item.completed,
    });
    dispatch(updateItem(updatedItem));
  };
};

export default itemSlice.reducer;
