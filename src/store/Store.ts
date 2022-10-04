import { configureStore } from '@reduxjs/toolkit';

// import dataReducer from './InitialDataSlice';
import filterReducer from './FilterSlice';

export const store = configureStore({
  reducer: {
    filterSlice: filterReducer,
    // dataSlice: dataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
