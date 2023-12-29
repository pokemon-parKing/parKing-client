import { configureStore } from '@reduxjs/toolkit';
// name it as 'xxxxxReducer'
import exampleReducer from './utils/slice/example.js';


  // the key is always what you named your slice
export const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
});