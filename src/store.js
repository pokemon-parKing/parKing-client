import { configureStore } from '@reduxjs/toolkit';
// name it as 'xxxxxReducer'
import exampleReducer from './utils/slice/example.js';

export const store = configureStore({
  reducer: {
    // the key is always what you named your slice
    example: exampleReducer,
  },
});