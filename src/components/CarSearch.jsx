import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";

function CarSearch() {
  const { searchTerm } = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(changeSearchTerm(e.target.value));
  };
  return (
    <div className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="search filed is-horizontal">
        <label className="label">Search</label>
        <input className="input" value={searchTerm} onChange={handleChange} />
      </div>
    </div>
  );
}

export default CarSearch;
