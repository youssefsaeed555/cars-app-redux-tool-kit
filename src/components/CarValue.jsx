import React from "react";
import { useSelector } from "react-redux";

function CarValue() {
  const cars = useSelector((state) => state.cars);

  const totalCost = cars.carList
    .filter((item) => item.carName.includes(cars.searchTerm))
    .reduce((acc, curr) => acc + curr.carCost, 0);

  return (
    <>
      <div className="car-value">Total Cost : ${totalCost}</div>
    </>
  );
}

export default CarValue;
