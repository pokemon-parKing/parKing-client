import { createSlice } from '@reduxjs/toolkit';

const initState = {
  count: 0,
  array: []
}

// exporting here allows access to state throughout our app.
export const exampleSlice = createSlice({
  name: 'example',
  initState,
  reducers: {
    addToArray: (state, action) => {
      // action.payload is the value that gets inputted when we invoke this method
      state.array.push(action.payload);
    },
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    }
  }
})

// we are exporting the methods to set state in our app
export const { increment, addToArray, decrement } = exampleSlice.actions;


// this is what we use in the store.js
export default exampleSlice.reducer;