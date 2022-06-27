import { configureStore } from "@reduxjs/toolkit";
import birthsdaySlice from "./birthsdaySlice";
import reviewsSlice from './reviewsSlice'
import toursSlice from "./toursSlice";

const store = configureStore({
  reducer: {
    birthsday: birthsdaySlice,
    tours: toursSlice,
    reviews: reviewsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
