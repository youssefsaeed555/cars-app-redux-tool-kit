import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = { carList: [], searchTerm: "" };
export const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    addCar: (state, action) => {
      state.carList.push({
        carName: action.payload.carName,
        carCost: action.payload.carCost,
        id: nanoid(),
      });
    },
    removeCar: (state, action) => {
      state.carList = state.carList.filter((car) => car.id !== action.payload);
    },
    changeSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { addCar, changeSearchTerm, removeCar } = carSlice.actions;
