import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carSlice";
const initialState = { carName: "", carCost: 0 };
export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.carName = action.payload;
    },
    changeCost: (state, action) => {
      state.carCost = action.payload;
    },
  },
  extraReducers: {
    [addCar]: (state, action) => {
      state.carName = "";
      state.carCost = 0;
    },
  },
});

export const { changeName, changeCost } = formSlice.actions;
