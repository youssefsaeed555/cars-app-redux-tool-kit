import { configureStore } from "@reduxjs/toolkit";
import { formSlice, changeName, changeCost } from "./slices/formSlice";
import {
  carSlice,
  addCar,
  removeCar,
  changeSearchTerm,
} from "./slices/carSlice";

const store = configureStore({
  reducer: {
    form: formSlice.reducer,
    cars: carSlice.reducer,
  },
});

export default store;
export { changeName, changeCost, addCar, removeCar, changeSearchTerm };
