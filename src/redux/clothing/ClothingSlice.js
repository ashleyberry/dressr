import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ClothingState = {
  clothingList;
};

export const initialState: ClothingState = {
  clothingList: undefined,
};

export const clothingSlice = createSlice({
  name: "clothing",
  initialState,
  reducers: {
    getClothingAction: (state) => {},
    setClothingAction: (state, action) => {
      state.clothingList = action.payload;
    },
  },
});

export const { getClothingAction, setClothingAction } = clothingSlice.actions;
