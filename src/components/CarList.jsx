import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

function CarList() {
  const { cars, name } = useSelector((state) => {
    return {
      cars: state.cars,
      name: state.form.carName,
    };
  }, shallowEqual);

  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(removeCar(id));
  };

  const renderCarList = cars.carList
    .filter((item) => item.carName.includes(cars.searchTerm))
    .map((item) => {
      const isBold = name && item.carName.includes(name);
      return (
        <div
          key={item.id}
          className={`panel flex justify-around ${isBold && "font-bold"}`}
        >
          <p>
            {item.carName} - ${item.carCost}
          </p>
          <button
            className="button is-danger"
            onClick={() => handleDelete(item.id)}
          >
            Delete
          </button>
        </div>
      );
    });

  return (
    <div>
      {renderCarList}
      <hr />
    </div>
  );
}

export default CarList;
