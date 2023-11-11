import { configureStore } from "@reduxjs/toolkit";
import { favoriteReducer } from "./features/FavoriteSlice";

export const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
  },
});
