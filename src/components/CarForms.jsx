import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCar, changeCost, changeName } from "../store";

function CarForms() {
  const formState = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    dispatch(changeName(e.target.value));
  };
  const handleCostChange = (e) => {
    dispatch(changeCost(e.target.valueAsNumber || 0));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addCar({ carName: formState.carName, carCost: formState.carCost })
    );
  };

  return (
    <div className="car-from panel  m-2">
      <h4 className="subtitle is-3">Add Car</h4>
      <form
        onSubmit={handleSubmit}
        className="flex align-middle justify-around"
      >
        <div className="field-group flex">
          <div className="filed mx-2">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              value={formState.carName}
              onChange={handleNameChange}
              type="text"
            />
          </div>
          <div className="filed mx-2">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              value={formState.carCost || ""}
              onChange={handleCostChange}
              type="number"
            />
          </div>
        </div>
        <div className="filed flex items-end mx-[165px]">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CarForms;
