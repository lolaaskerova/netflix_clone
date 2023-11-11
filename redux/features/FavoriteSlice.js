import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorite: [],
};

export const FavoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFav: (state, action) => {
      const itemInFav = state.favorite.find(
        (item) => item.id === action.payload.id
      );
      if (!itemInFav) {
        state.favorite = [...state.favorite, { ...action.payload }];
      }
      localStorage.setItem("favorites", JSON.stringify(state.favorite));
    },
    removeFav: (state, action) => {
      state.favorite = state.favorite.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("favorites", JSON.stringify(state.favorite));
    },
  },
});

export const favoriteReducer = FavoriteSlice.reducer;
export const { addToFav, removeFav } = FavoriteSlice.actions;
